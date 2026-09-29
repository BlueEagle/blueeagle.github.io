import React, { useState, useEffect } from 'react'

const USER_NAME = 'BlueEagle'

// Fetched by App once, so returning from an article doesn't refetch and shift the layout.
export const useRecentRepos = () => {
  const [repos, setRepos] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${USER_NAME}/repos?sort=pushed&per_page=100`)
      .then(r => r.json())
      .then(d => {
        if (!Array.isArray(d)) throw new Error('bad response')
        // Most recently pushed, non-fork, non-archived repos.
        setRepos(d.filter(r => !r.fork && !r.archived)
          .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
          .slice(0, 6))
      })
      .catch(() => setError(true))
  }, [])

  return { repos, error }
}

const Projects = ({ repos, error }) => {
  const msg = error ? 'Could not load repositories right now.'
    : repos && !repos.length ? 'No public repositories found.' : ''

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
          <a href={`https://github.com/${USER_NAME}?tab=repositories`} style={{ fontSize: 15 }}>All repositories →</a>
        </div>
        <p className="lede">Most recently active repositories, pulled live from GitHub.</p>
        <div className="repo-grid">
          {(repos || []).map(r => (
            <a key={r.id} href={r.html_url} className="repo-card">
              <h3 className="repo-name">{r.name}</h3>
              <p className="repo-desc">{r.description || 'No description yet.'}</p>
              <div className="repo-meta">
                {r.language && <span className="repo-lang">{r.language}</span>}
                <span>★ {r.stargazers_count}</span>
                <span>Updated {new Date(r.pushed_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
              </div>
            </a>
          ))}
        </div>
        {msg && <p className="status-msg">{msg}</p>}
      </div>
    </section>
  )
}

export default Projects
