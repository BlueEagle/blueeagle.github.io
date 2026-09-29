import React, { useEffect } from 'react'
import { SORTED, meta, segments } from '../resources/blog'

const BlogPost = ({ slug }) => {
  const idx = SORTED.findIndex(p => p.slug === slug)
  const post = meta(SORTED[idx])
  const newer = idx > 0 ? SORTED[idx - 1] : null
  const older = idx < SORTED.length - 1 ? SORTED[idx + 1] : null

  useEffect(() => {
    document.title = `${post.title} · Collin's Code`
    return () => { document.title = "Collin's Code" }
  }, [post.title])

  return (
    <main className="article">
      <a href="#blog" className="back-link">← All writing</a>
      <div className="article-head">
        <div className="meta">
          <span>{post.displayDate}</span><span>·</span><span>{post.minutes} min read</span><span>·</span><span>{post.author}</span>
        </div>
        <h1 className="article-title">{post.title}</h1>
        <div className="tag-list">
          {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      {post.cover && <img className="article-cover" src={post.cover} alt="" />}
      {post.archive && (
        <p className="archive-note">From the archive. This post was written in {post.year} and may be out of date.</p>
      )}
      <div className="article-body">
        {post.body.map((b, i) => typeof b === 'string' ? (
          <p key={i}>
            {segments(b).map((s, j) => s.href
              ? <a key={j} href={s.href}>{s.text}</a>
              : <span key={j}>{s.text}</span>)}
          </p>
        ) : (
          <div key={i} className="code-block">
            <div className="code-lang">{b.lang || 'code'}</div>
            <pre><code>{b.code}</code></pre>
          </div>
        ))}
      </div>
      <div className="post-nav">
        {newer && (
          <a href={`#/blog/${newer.slug}`} className="post-nav-link">
            <span className="post-nav-label">← Newer</span>
            <span className="post-nav-title">{newer.title}</span>
          </a>
        )}
        {older && (
          <a href={`#/blog/${older.slug}`} className="post-nav-link older">
            <span className="post-nav-label">Older →</span>
            <span className="post-nav-title">{older.title}</span>
          </a>
        )}
      </div>
    </main>
  )
}

export default BlogPost
