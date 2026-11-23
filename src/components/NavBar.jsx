import React from 'react'

const NAV = [
  ['#about', 'About'],
  ['#projects', 'Projects'],
  ['#/resources', 'Resources'],
  ['#services', 'Consulting'],
  ['#blog', 'Blog'],
  ['#contact', 'Contact']
]

const NavBar = ({ theme, onToggleTheme }) => (
  <header className="site-header">
    <nav className="site-nav">
      <a href="#about" className="brand">
        <img src="/icon.svg" alt="" className="brand-mark" width="28" height="28" />
        <span>Collin's Code</span>
      </a>
      <div className="nav-links">
        {NAV.map(([href, label]) => (
          <a key={href} href={href} className="nav-link">{label}</a>
        ))}
        <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle dark mode">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  </header>
)

export default NavBar
