import { mkdir, copyFile } from 'node:fs/promises'

// Real HTML entry points support direct links and reloads on static hosting.
for (const route of ['personal', 'development', 'daily-notes', 'books']) {
  await mkdir(`dist/${route}`, { recursive: true })
  await copyFile('dist/index.html', `dist/${route}/index.html`)
}
