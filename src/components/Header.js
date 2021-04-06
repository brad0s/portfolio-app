import React from 'react'
import '../styles/Header.scss'
import chevron from '../chevron-down.svg'

function Header() {

  return (
    <div className="Header">
      <h1>Hi, I'm Braden. I'm a <span className="jobTitle">web developer</span>.</h1>
      <a id="viewMore" href="#Bio" className="viewMore button"><img src={chevron} alt="chevron down" /> View More</a>
    </div>
  )
}

export default Header