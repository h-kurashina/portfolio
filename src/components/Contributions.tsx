import { contributions } from '../data/content'
import type { Contribution } from '../types/project'

const statuses: Record<Contribution['status'], string> = { open: 'Open', merged: 'Merged', closed: 'Closed' }

export function Contributions() {
  if (!contributions.length) return <p className="empty-state">コントリビュートはこれから追加していきます。</p>

  return <ul className="content-list contributions-list">
    {contributions.map(contribution => <li key={contribution.id}>
      <article aria-labelledby={`contribution-${contribution.id}`}>
        <div className="contribution-top">
          <span className="contribution-repository">{contribution.repository}</span>
          <span className="contribution-status" data-status={contribution.status}>{statuses[contribution.status]}</span>
        </div>
        <h2 id={`contribution-${contribution.id}`}><a href={contribution.pullRequestUrl} target="_blank" rel="noreferrer">{contribution.title}</a></h2>
        <p className="contribution-description">{contribution.description}</p>
        <p className="content-meta"><time dateTime={contribution.date}>{contribution.date}</time> / {contribution.languages.join(' / ')}</p>
      </article>
    </li>)}
  </ul>
}
