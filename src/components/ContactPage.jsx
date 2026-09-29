import React from 'react'

const CONTACTS = [
  { label: 'Email', value: 'me@balloucollin.dev', href: 'mailto:me@balloucollin.dev' },
  { label: 'GitHub', value: '@BlueEagle', href: 'https://github.com/BlueEagle' },
  { label: 'LinkedIn', value: 'Collin Ballou', href: 'https://www.linkedin.com/in/collin-ballou-67749539/' }
]

const ContactPage = () => (
  <section id="contact" className="section alt">
    <div className="container contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        {CONTACTS.map(c => (
          <a key={c.label} href={c.href} className="contact-card">
            <span className="contact-label">{c.label}</span>
            <span className="contact-value">{c.value}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default ContactPage
