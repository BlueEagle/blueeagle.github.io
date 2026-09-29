import React from 'react'
import profilePicture from '../imgs/prof_pic.jpg'

const Bio = () => (
  <section id="about" className="about">
    <div className="about-copy">
      <p className="about-hello">Hello, I'm Collin.</p>
      <h1 className="about-title">Senior Security Engineer @ MX Technologies: AppSec, DLP, IDP, Full Stack, Native, and AI.</h1>
      <div className="about-actions">
        <a href="#blog" className="btn btn-primary">Read the blog</a>
        <a href="#contact" className="btn btn-secondary">Get in touch</a>
      </div>
    </div>
    <div className="about-photo-wrap">
      <img className="about-photo" src={profilePicture} alt="Collin Ballou" />
    </div>
  </section>
)

export default Bio
