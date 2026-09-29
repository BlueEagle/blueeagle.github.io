// Blog posts live in posts.json. Each post: { slug, title, date (YYYY-MM-DD),
// author, tags, body, cover? }. `body` entries are either a paragraph string
// (inline [text](url) links supported) or a code block: { code, lang }.
// `cover` is an optional image path, e.g. "/covers/my-post.jpg" in public/.
import posts from './posts.json'

// Posts published before this year are shown with an "Archive" label.
export const ARCHIVE_BEFORE = 2021

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g

const strip = s => s.replace(LINK_RE, '$1')
export const textOf = p => p.body.map(b => typeof b === 'string' ? strip(b) : b.code).join(' ')
const fmtDate = d => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

// Split a paragraph into plain-text and link segments.
export function segments(p) {
  const out = []
  const re = new RegExp(LINK_RE.source, 'g')
  let last = 0, m
  while ((m = re.exec(p))) {
    if (m.index > last) out.push({ text: p.slice(last, m.index) })
    out.push({ text: m[1], href: m[2] })
    last = re.lastIndex
  }
  if (last < p.length) out.push({ text: p.slice(last) })
  return out
}

export function meta(p) {
  const year = +p.date.slice(0, 4)
  const first = strip(p.body.find(b => typeof b === 'string') || '')
  return {
    ...p,
    year,
    archive: year < ARCHIVE_BEFORE,
    displayDate: fmtDate(p.date),
    minutes: Math.max(1, Math.round(textOf(p).split(/\s+/).length / 220)),
    excerpt: first.length > 180 ? first.slice(0, 180).replace(/\s+\S*$/, '') + '…' : first
  }
}

// Newest first.
export const SORTED = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
export const ALL_TAGS = [...new Set(SORTED.flatMap(p => p.tags))].sort()
