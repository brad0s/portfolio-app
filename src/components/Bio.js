import React from 'react'
import Avi from '../assets/brados-avataaars-circle.svg'
import '../styles/Bio.scss'

function Bio() {
  return(
    <section id="Bio">
      <div className="Bio">
        <h2>Hi, I'm Braden. Nice to meet you.</h2>
        <img src={Avi} alt="My avatar" />
        <p>I've always enjpyed aesthitics and functionality. I studied computer science and I have worked multiple internships and jobs at various companies. I dililgient, hard-working and love to tackle new challenges.</p>
      </div>
    </section>
  )
}

export default Bio