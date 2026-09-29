// Generates public/rss.xml from src/resources/posts.json. Runs before dev/build.
const fs = require('fs')
const path = require('path')
// The live site. Feed links point here.
const SITE = 'https://ballou.rocks'
const posts = require('../src/resources/posts.json')

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const strip = s => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
const pubDate = d => new Date(d + 'T12:00:00Z').toUTCString()

const items = posts.slice().sort((a, b) => b.date.localeCompare(a.date)).map(p => {
  const first = strip(p.body.find(b => typeof b === 'string') || '')
  const url = `${SITE}/#/blog/${p.slug}`
  return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate(p.date)}</pubDate>
${p.tags.map(t => `      <category>${esc(t)}</category>`).join('\n')}
      <description>${esc(first)}</description>
    </item>`
})

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Collin's Code</title>
    <link>${SITE}/</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Writing by Collin Ballou.</description>
    <language>en-us</language>
${items.join('\n')}
  </channel>
</rss>
`

fs.writeFileSync(path.join(__dirname, '../public/rss.xml'), xml)
console.log(`Wrote public/rss.xml (${posts.length} posts)`)
