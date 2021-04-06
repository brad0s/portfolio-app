
import React from 'react'
import './styles/App.scss'
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Bio from './components/Bio'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkHistory from './components/WorkHistory'
import Footer from './components/Footer'

class App extends React.Component {

  constructor() {
    super()
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(e) {
    let { scrollY } = e.path[1]
    let { scrollTop } = e.target.scrollingElement

    if (scrollY > ( window.innerHeight*(2/3)) ) {
      document.getElementById("viewMore").classList.add("hide")
      document.getElementById("viewMore").classList.remove("unhide")
    }

    if (scrollTop === 0) {
      document.getElementById("viewMore").classList.remove("hide")
      document.getElementById("viewMore").classList.add("unhide")
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div onScroll={this.handleScroll} className="App">
        <NavBar />
        <Header />
        <Bio />
        <Skills />
        <Projects />
        <WorkHistory />
        <Footer />
      </div>
    );
  }
  
}

export default App;
