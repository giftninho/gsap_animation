import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import Navbar from './comoponents/Navbar'
import Hero from './comoponents/Hero'


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-dvh bg-black' />
    </main>
  )
}

export default App