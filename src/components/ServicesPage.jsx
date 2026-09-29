import React from 'react'

const SERVICES = [
  { n: '01', title: 'Application security', body: 'Threat modeling, secure code review, and AppSec program guidance for web and mobile teams.' },
  { n: '02', title: 'DLP & identity', body: 'Data loss prevention strategy and identity provider (IDP) integration, SSO, and access design.' },
  { n: '03', title: 'Full stack & native', body: 'Web apps, APIs, and native clients built with security designed in from the start.' },
  { n: '04', title: 'AI integration', body: 'Practical LLM features and tooling, with attention to data handling and abuse cases.' }
]

const ServicesPage = () => (
  <section id="services" className="section alt">
    <div className="container">
      <div className="section-intro">
        <h2 className="section-title">Consulting</h2>
        <p className="lede">Available for select freelance engagements. Every project is scoped individually.</p>
      </div>
      <div className="service-grid">
        {SERVICES.map(s => (
          <div key={s.n} className="service">
            <span className="service-n">{s.n}</span>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-body">{s.body}</p>
          </div>
        ))}
      </div>
      <a href="mailto:me@balloucollin.dev" className="cta-link">Start a conversation →</a>
    </div>
  </section>
)

export default ServicesPage
