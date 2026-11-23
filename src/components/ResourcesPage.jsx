import React, { useEffect } from 'react'
import { RESOURCES } from '../resources/resources'

const ResourcesPage = () => {
  useEffect(() => {
    document.title = "Resources · Collin's Code"
    return () => { document.title = "Collin's Code" }
  }, [])

  return (
    <main className="resources">
      <div className="container">
        <a href="#about" className="back-link">← Home</a>
        <div className="section-intro">
          <h1 className="section-title">Resources</h1>
          <p className="lede">Free tools I've built for problems I ran into myself. Use them, share them, and let me know if they help.</p>
        </div>
        <div className="repo-grid">
          {RESOURCES.map(r => (
            <a key={r.href} href={r.href} className="repo-card">
              <h2 className="repo-name">{r.title}</h2>
              <p className="repo-desc">{r.description}</p>
              <div className="repo-meta">
                {r.tags.map(t => <span key={t}>{t}</span>)}
                <span className="resource-open">Open →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ResourcesPage
