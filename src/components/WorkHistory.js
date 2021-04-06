import React from 'react'
import '../styles/WorkHistory.scss'
import byuh from '../assets/byuh-logo.png'
import varian from '../assets/varian-logo.png'
import nolo from '../assets/nolo-logo.png'

function WorkHistory() {
  return (
    <section id="WorkHistroy">
      <div className="WorkHistory">
        <h2>Work History</h2>
        <p>These are companies that I've worked for:</p>
        <div className="WorkHistory-list">
          <div className="WorkHistory-item">
            <img src={byuh} alt="BYUH logo" />
          </div>
          <div className="WorkHistory-item">
            <img src={varian} alt="BYUH logo" />
          </div>
          <div className="WorkHistory-item">
            <img src={nolo} alt="BYUH logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkHistory