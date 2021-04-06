import React from 'react'
import '../styles/Projects.scss'

function Projects() {

  // function handleMouseEnter(e) {
  //   const { nextSibling } = e.target
  //   console.log(nextSibling)
  //   nextSibling.classList.add("show")
  // }

  // function handleMouseExit(e) {
  //   const { target } = e
  //   console.log(target)
  //   target.classList.remove("show")
  // }

  return (
    <section id="Projects">
      <div className="Projects">
        <h2>Projects</h2>
        <div className="Projects-wrapper">
          <div className="project">
            <h4>Todo App</h4>
            <div className="project-details">
              Simple todo app built with reactjs.
              <a className="button" href="https://github.com/brad0s/todo-react" target="_blank" rel="noreferrer">View Code</a>
            </div>
          </div>
          <div className="project">
            <h4>Meme Generator</h4>
            <div className="project-details">
              Meme generator app built with reactjs.
              <a className="button" href="https://github.com/brad0s/meme-gen" target="_blank" rel="noreferrer">View Code</a>
            </div>
          </div>
          <div className="project">
            <h4>LLC Launch Path</h4>
            <div className="project-details">
              Helped create the frontend for this path on creating your own LLC.
              <a className="button" href="https://www.nolo.com/lander/entry/llc/llcname" target="_blank" rel="noreferrer">View Site</a>
            </div>
          </div>
          <div className="project">
            <h4>BYU–H Financial Aid</h4>
            <div className="project-details">
              Helped create the frontend for this website for BYU–H.
              <a className="button" href="https://financialaid.byuh.edu/" target="_blank" rel="noreferrer">View Site</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects