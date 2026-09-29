import React from 'react'
import { SORTED, ALL_TAGS, textOf, meta } from '../resources/blog'

const BlogPage = ({ query, onQuery, tag, onTag }) => {
  const q = query.trim().toLowerCase()
  const filtered = SORTED.filter(p => (!tag || p.tags.includes(tag)) &&
    (!q || (p.title + ' ' + p.tags.join(' ') + ' ' + textOf(p)).toLowerCase().includes(q)))

  const byYear = {}
  filtered.forEach(p => { const m = meta(p); (byYear[m.year] = byYear[m.year] || []).push(m) })
  const years = Object.keys(byYear).sort((a, b) => b - a)

  const chips = [{ label: 'All', active: !tag, onClick: () => onTag(null) }]
    .concat(ALL_TAGS.map(t => ({ label: t, active: tag === t, onClick: () => onTag(tag === t ? null : t) })))

  return (
    <section id="blog" className="section">
      <div className="container narrow">
        <div className="section-head">
          <h2 className="section-title">Writing</h2>
          <a href={`${process.env.PUBLIC_URL}/rss.xml`} className="rss-pill">RSS</a>
        </div>
        <div className="blog-filters">
          <input type="search" className="search" placeholder="Search posts" aria-label="Search posts"
            value={query} onChange={e => onQuery(e.target.value)} />
          <div className="chips">
            {chips.map(c => (
              <button key={c.label} type="button" className={`chip${c.active ? ' active' : ''}`}
                aria-pressed={c.active} onClick={c.onClick}>{c.label}</button>
            ))}
          </div>
        </div>
        {years.map(year => (
          <div key={year} className="year-group">
            <div className="year-head">
              <span>{year}</span>
              {byYear[year][0].archive && <span className="archive-badge">Archive</span>}
            </div>
            {byYear[year].map(p => (
              <a key={p.slug} href={`#/blog/${p.slug}`} className={`post-row${p.cover ? ' has-cover' : ''}`}>
                <div className="post-row-copy">
                  <div className="meta">
                    <span>{p.displayDate}</span><span>·</span><span>{p.minutes} min read</span>
                  </div>
                  <h3 className="post-title">{p.title}</h3>
                  <p className="post-excerpt">{p.excerpt}</p>
                  <div className="tag-list">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                {p.cover && <img className="post-thumb" src={p.cover} alt="" loading="lazy" />}
              </a>
            ))}
          </div>
        ))}
        {!filtered.length && <p className="no-results">No posts match that search.</p>}
      </div>
    </section>
  )
}

export default BlogPage
