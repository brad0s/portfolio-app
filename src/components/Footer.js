import React from 'react'
import logo from '../bw-logo-white.svg'
import github from '../assets/iconmonstr-github.svg'
import linkedin from '../assets/iconmonstr-linkedin.svg'
import twitter from '../assets/iconmonstr-twitter.svg'
import '../styles/Footer.scss'

function Footer() {
  return (
    <footer className="Footer">
      <div><img src={logo} alt="My logo" /></div>
      <div className="social-media">
        <a href="https://github.com/brad0s" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/wright-braden/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
        <a href="https://twitter.com/Braden23763605" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
      </div>
      <div>created by me &#169; 2021</div>
    </footer>
  )
}

export default Footer