import React from 'react'

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <span>© {new Date().getFullYear()} Collin Ballou</span>
      <div className="footer-links">
        <a href="https://github.com/BlueEagle">GitHub</a>
        <a href="https://www.linkedin.com/in/collin-ballou-67749539/">LinkedIn</a>
        <a href={`${process.env.PUBLIC_URL}/rss.xml`}>RSS</a>
      </div>
    </div>
  </footer>
)

export default Footer
