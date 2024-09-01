import React from 'react'
import Hero from '../Pages/Hero';
import About from '../Pages/About';
import Products from '../Pages/Products';
import WhyChooseUs from '../Pages/WhyChooseUs'; 
import Testimonial from '../Pages/Testimonial';
import Gallery from '../Pages/Gallery';
import Contact from '../Pages/Contact';

const AppContent = () => {
  return (
    <div>
        <Hero />
        <Products />
        <About />
        <Gallery />
        <WhyChooseUs />
        <Testimonial />
        {/* <Contact /> */}
    </div>
  )
}

export default AppContent