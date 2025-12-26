

import { Suspense, lazy } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Hero = lazy(() => import('../Components/Hero'))
const About = lazy(() => import('../Components/About'))
const Projects = lazy(() => import('../Components/Projects'))
const Contact = lazy(() => import('../Components/Contact'))

function Loader() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px'
    }}>
      Loading...
    </div>
  )
}

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, Arial, sans-serif', color: '#111' }}>
      <Header />

      <Suspense fallback={<Loader />}>
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </Suspense>

      <Footer />
    </div>
  )
}
