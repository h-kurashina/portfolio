import { caseStudies } from '../data/content'

const steps = [
  ['situation', '状況'],
  ['approach', '調べ方'],
  ['finding', '見つけたこと'],
  ['fix', '直し方'],
  ['lesson', '学び'],
] as const

// Two identical halves let the tape loop seamlessly at -50%.
const tape = 'CAUTION — AUTHORIZED TESTING ONLY — '.repeat(6)

export function CaseStudies() {
  return <>
    <p className="hazard-tape" aria-hidden="true"><span>{tape}{tape}</span></p>
    <p className="case-disclaimer">すべて許可された環境（自作アプリ・学習用ラボ・公開済みの報告）での検証です。業務で得た情報は載せていません。</p>
    {caseStudies.length ? <ol className="case-list">
      {caseStudies.map((study, index) => <li key={study.id}>
        <article aria-labelledby={`case-${study.id}`}>
          <div className="case-top">
            <span className="case-id">CASE-{String(index + 1).padStart(3, '0')}</span>
            <span className="case-severity" data-severity={study.severity}>{study.severity.toUpperCase()}</span>
          </div>
          <h2 id={`case-${study.id}`}>{study.title}</h2>
          <p className="case-meta">TARGET: {study.target} / <time dateTime={study.date}>{study.date}</time> / {study.tags.join(' · ')}</p>
          <dl className="case-steps">
            {steps.map(([key, label]) => <div key={key}><dt>{label}</dt><dd>{study[key]}</dd></div>)}
          </dl>
          {study.url && <a className="case-link" href={study.url} target="_blank" rel="noreferrer">詳しい記録を読む <span aria-hidden="true">↗</span></a>}
        </article>
      </li>)}
    </ol> : <div className="case-terminal" role="status">
      <p><span className="case-prompt">$</span> ls ./case-studies</p>
      <p className="case-warning">[!] 0 records found — 公開できる事例を準備中です。</p>
      <p><span className="case-prompt">$</span> <span className="case-cursor" aria-hidden="true" /></p>
    </div>}
  </>
}
