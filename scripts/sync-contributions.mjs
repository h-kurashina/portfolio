import { readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

const CONTENT = 'src/data/content.ts'
// Each contribution lists pullRequestUrl before status; never look past the next entry's URL.
const ENTRY = /(pullRequestUrl: '([^']+)'(?:(?!pullRequestUrl)[\s\S])*?status: ')(open|merged|closed)(')/g

export function updateStatuses(source, states) {
  const changes = []
  const updated = source.replace(ENTRY, (match, head, url, status, tail) => {
    const next = states[url]
    if (!next || next === status) return match
    changes.push({ url, from: status, to: next })
    return `${head}${next}${tail}`
  })
  return { updated, changes }
}

async function fetchState(url) {
  const [, repository, number] = url.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/pull\/(\d+)/) ?? []
  if (!repository) throw new Error(`Not a GitHub pull request URL: ${url}`)
  const response = await fetch(`https://api.github.com/repos/${repository}/pulls/${number}`, {
    headers: { accept: 'application/vnd.github+json', ...(process.env.GITHUB_TOKEN && { authorization: `Bearer ${process.env.GITHUB_TOKEN}` }) },
  })
  if (!response.ok) throw new Error(`${url}: GitHub API responded ${response.status}`)
  const pull = await response.json()
  return pull.merged_at ? 'merged' : pull.state
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const source = await readFile(CONTENT, 'utf8')
  const urls = [...source.matchAll(ENTRY)].map(match => match[2])
  const states = Object.fromEntries(await Promise.all(urls.map(async url => [url, await fetchState(url)])))
  const { updated, changes } = updateStatuses(source, states)
  for (const { url, from, to } of changes) console.log(`${url}: ${from} -> ${to}`)
  if (changes.length) await writeFile(CONTENT, updated)
  else console.log(`No status changes (${urls.length} contributions checked).`)
}
