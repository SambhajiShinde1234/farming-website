import React from 'react'
import Hero from '../Pages/Hero';
import About from '../Pages/About';
import Products from '../Pages/Products';
import Contact from '../Pages/Contact';

const AppContent = () => {
  return (
    <div>
        <Hero />
        <About />
        <Products />
        {/* <Contact /> */}
    </div>
  )
}

export default AppContent