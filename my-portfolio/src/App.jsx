import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Ivana Stojanova, home">
          <span className="wordmark-flower" aria-hidden="true">✿</span>
          ivana<span className="wordmark-dot">.</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">My CV</a>
          <a href="#journey">My journey</a>
          <a className="nav-contact" href="#contact">Say hello <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
