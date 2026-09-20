import { useState } from 'react'
import { books } from '../data/content'
import { sitePath } from '../paths'

const languages = [...new Set(books.flatMap(book => book.languages))]
const fields = [...new Set(books.flatMap(book => book.fields))]
const statuses = { unread: '未読', reading: '読書中', read: '読了' }
const filters = [['all', 'すべて'], ['read', '読んだ本'], ['unread', '未読'], ['recommended', 'おすすめ']]

export function Books() {
  const [filter, setFilter] = useState('all')
  const [language, setLanguage] = useState('')
  const [field, setField] = useState('')
  const visibleBooks = books.filter(book =>
    (!language || book.languages.includes(language)) &&
    (!field || book.fields.includes(field)) &&
    (filter === 'all' || (filter === 'recommended' ? book.recommended : book.status === filter)),
  )

  return <>
    <div className="book-filters" role="group" aria-label="本の絞り込み">
      {filters.map(([value, label]) => <button key={value} className="text-button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}
    </div>
    <div className="filters">
      <label>言語・技術<select aria-label="言語・技術" value={language} onChange={event => setLanguage(event.target.value)}><option value="">すべての言語・技術</option>{languages.map(item => <option key={item}>{item}</option>)}</select></label>
      <label>分野<select aria-label="分野" value={field} onChange={event => setField(event.target.value)}><option value="">すべての分野</option>{fields.map(item => <option key={item}>{item}</option>)}</select></label>
      <button className="text-button" onClick={() => { setLanguage(''); setField(''); setFilter('all') }}>絞り込みを解除</button>
    </div>
    <p className="result-count" aria-live="polite">{visibleBooks.length} books</p>
    {visibleBooks.length ? <ul className="book-grid">{visibleBooks.map(book => <li className="book-card" key={book.id}>
      <div className="book-cover-stage">
        {book.imageUrl ? <img className="book-cover" src={sitePath(book.imageUrl)} alt={`${book.title}の表紙`} width="180" height="240" loading="lazy" /> : <div className="book-cover-placeholder"><span>{book.languages.join(' / ') || 'Architecture'}</span><span>書影準備中</span></div>}
      </div>
      <div className="book-card-top"><span className="book-language">{book.languages.join(' / ') || 'Architecture'}</span>{book.status && <span className="book-status">{statuses[book.status]}</span>}</div>
      <h2>{book.url ? <a href={book.url}>{book.title}</a> : book.title}</h2>
      {book.nickname && <p className="book-nickname">{book.nickname}</p>}
      <p className="book-author">{book.author}</p>
      <div className="book-tags">{book.fields.map(field => <span key={field}>{field}</span>)}{book.recommended && <span>おすすめ</span>}</div>
      {book.review && <p className="book-review">{book.review}</p>}
    </li>)}</ul> : <p className="empty-state">この条件に合う本はまだありません。</p>}
  </>
}
