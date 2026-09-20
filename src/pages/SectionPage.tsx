import { useState } from 'react'
import { SiteMenu } from '../components/SiteMenu'
import { Pointer } from '../components/Pointer'
import { PersonalProfile } from '../components/PersonalProfile'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { books, developmentWorks, fields, filterWorks, languages, publications } from '../data/content'

function Development() {
  const [language, setLanguage] = useState('')
  const [field, setField] = useState('')
  const visibleWorks = filterWorks(developmentWorks, language, field)
  const allLanguages = [...new Set([...languages, ...developmentWorks.flatMap(work => work.languages)])]
  const allFields = [...new Set([...fields, ...developmentWorks.flatMap(work => work.fields)])]
  return <>
    <div className="filters">
      <label htmlFor="language-filter">言語<select id="language-filter" aria-label="言語" value={language} onChange={event => setLanguage(event.target.value)}><option value="">すべての言語</option>{allLanguages.map(item => <option key={item}>{item}</option>)}</select></label>
      <label htmlFor="field-filter">分野<select id="field-filter" aria-label="分野" value={field} onChange={event => setField(event.target.value)}><option value="">すべての分野</option>{allFields.map(item => <option key={item}>{item}</option>)}</select></label>
      <button className="text-button" onClick={() => { setLanguage(''); setField('') }}>絞り込みを解除</button>
    </div>
    <p className="result-count" aria-live="polite">{visibleWorks.length} projects</p>
    {visibleWorks.length ? <ul className="content-list">{visibleWorks.map(work => <li key={work.id}><h2>{work.url ? <a href={work.url}>{work.title}</a> : work.title}</h2><p>{work.description}</p><p className="content-meta">{[...work.languages, ...work.fields].join(' / ')}</p></li>)}</ul> : <p className="empty-state">{developmentWorks.length ? '条件に合う作品はありません。' : '作品はこれから追加していきます。'}</p>}
  </>
}

function Books() {
  const [filter, setFilter] = useState('all')
  const visibleBooks = books.filter(book => filter === 'read' ? book.read : filter === 'recommended' ? book.recommended : true)
  return <>
    <div className="book-filters" role="group" aria-label="本の絞り込み">{[['all', 'すべて'], ['read', '読んだ本'], ['recommended', 'おすすめ']].map(([value, label]) => <button key={value} className="text-button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}</div>
    <p className="result-count" aria-live="polite">{visibleBooks.length} books</p>
    {visibleBooks.length ? <ul className="content-list">{visibleBooks.map(book => <li key={book.id}><h2>{book.url ? <a href={book.url}>{book.title}</a> : book.title}</h2><p className="content-meta">{book.author}{book.recommended ? ' / おすすめ' : ''}</p><p>{book.review}</p></li>)}</ul> : <p className="empty-state">{books.length ? 'この分類の本はまだありません。' : '読んだ本、おすすめしたい本をこれから並べていきます。'}</p>}
  </>
}

export function SectionPage({ pathname }: { pathname: string }) {
  const project = projects.find(item => item.projectUrl === pathname)
  if (!project) return <main className="not-found"><h1>Page not found</h1><a href="/">Back to index</a></main>
  return <div className="projects-page has-entered detail-page" data-preview={project.id}>
    <SiteMenu />
    <main className="works-container">
      <section className="works-content">
        <a className="back-link" href="/">← Home</a>
        <div className="section-title"><img src={project.imageUrl} alt="" width="64" height="64" /><h1>{project.title}</h1></div>
        <p className="section-description">{project.description}</p>
        {project.id === 'development' && <Development />}
        {project.id === 'books' && <Books />}
        {project.id === 'personal-portfolio' && <PersonalProfile />}
        {project.id === 'daily-notes' && (publications.length ? <ul className="content-list">{publications.map(post => <li key={post.id}><p className="content-meta">{post.platform} / <time dateTime={post.date}>{post.date}</time></p><h2><a href={post.url}>{post.title}</a></h2></li>)}</ul> : <p className="empty-state">記事や投稿などの発信活動を、これからまとめていきます。</p>)}
      </section>
    </main>
    <footer className="site-footer"><small>©{new Date().getFullYear()} {site.name} All rights reserved</small></footer>
    <Pointer />
  </div>
}
