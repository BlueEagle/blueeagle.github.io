import React, { useState, useEffect, useRef } from 'react'
import NavBar from './NavBar'
import Bio from './Bio'
import Projects, { useRecentRepos } from './Projects'
import ServicesPage from './ServicesPage'
import BlogPage from './BlogPage'
import BlogPost from './BlogPost'
import ContactPage from './ContactPage'
import Footer from './Footer'
import { SORTED } from '../resources/blog'

const THEME_COLORS = { light: '#F5EFE6', dark: '#1A1714' }

// Articles live at #/blog/<slug>; every other hash is a section anchor.
const articleSlug = () => {
  const m = (window.location.hash || '').match(/^#\/blog\/(.+)$/)
  return m && SORTED.some(p => p.slug === m[1]) ? m[1] : null
}

const scrollToSection = (id, behavior) => {
  const el = id && document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior })
}

function App() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light')
  const [route, setRoute] = useState(articleSlug)
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState(null)
  const pendingScroll = useRef(null)
  const { repos, error: reposError } = useRecentRepos()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', THEME_COLORS[theme])
  }, [theme])

  const toggleTheme = () => {
    const t = theme === 'dark' ? 'light' : 'dark'
    try { localStorage.setItem('cc-theme', t) } catch (e) {}
    setTheme(t)
  }

  useEffect(() => {
    // Content renders after load, so the browser can't jump to a deep-linked section itself.
    if (!articleSlug()) scrollToSection(window.location.hash.slice(1), 'auto')

    let current = articleSlug()
    const onHash = () => {
      const slug = articleSlug()
      if (slug) {
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else if (current) {
        // Leaving an article: scroll to the section once the home page has rendered.
        pendingScroll.current = window.location.hash.slice(1)
      }
      current = slug
      setRoute(slug)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (route || pendingScroll.current === null) return
    const id = pendingScroll.current
    pendingScroll.current = null
    requestAnimationFrame(() => scrollToSection(id, 'smooth'))
  }, [route])

  return (
    <>
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      {route ? (
        <BlogPost slug={route} />
      ) : (
        <main>
          <Bio />
          <Projects repos={repos} error={reposError} />
          <ServicesPage />
          <BlogPage query={query} onQuery={setQuery} tag={tag} onTag={setTag} />
          <ContactPage />
        </main>
      )}
      <Footer />
    </>
  )
}

export default App
