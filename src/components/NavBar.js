import React from 'react'
import '../styles/NavBar.scss'
import logo from '../bw-logo-white.svg'

function NavBar() {
  return (
    <div className="NavBar">
      <span className="logo">
        <img src={logo} alt="logo"/>
      </span>
      <button className="button contact">Contact</button>
    </div>
  )
}

export default NavBar