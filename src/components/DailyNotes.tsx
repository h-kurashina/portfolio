import { publications } from '../data/content'

export function DailyNotes() {
  if (!publications.length) return <p className="empty-state">記事や投稿などの発信活動を、これからまとめていきます。</p>

  return <ul className="content-list daily-notes-list">
    {publications.map(post => <li key={post.id}>
      <article aria-labelledby={`note-${post.id}`}>
        <p className="content-meta">{post.platform} / <time dateTime={post.date}>{post.date}</time></p>
        <h2 id={`note-${post.id}`}>{post.title}</h2>
        {post.body && <div className="note-body">{post.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>}
        {post.url && <a className="note-link" href={post.url} target="_blank" rel="noreferrer">{post.linkLabel ?? '記事を読む'} <span aria-hidden="true">↗</span></a>}
      </article>
    </li>)}
  </ul>
}
