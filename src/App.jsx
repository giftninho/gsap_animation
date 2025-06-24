import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import Navbar from './comoponents/Navbar'
import Hero from './comoponents/Hero'
import Cocktails from './comoponents/Cocktails'
import About from './comoponents/About'
import Art from './comoponents/Art'


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  )
}

export default App