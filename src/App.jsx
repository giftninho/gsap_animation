import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import Navbar from './comoponents/Navbar'
import Hero from './comoponents/Hero'
import Cocktails from './comoponents/Cocktails'
import About from './comoponents/About'


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  )
}

export default App