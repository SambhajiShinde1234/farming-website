import React from 'react'
import Hero from '../Pages/Hero';
import About from '../Pages/About';
import Products from '../Pages/Products';
import WhyChooseUs from '../Pages/WhyChooseUs'; 
import Testimonial from '../Pages/Testimonial';
import Contact from '../Pages/Contact';

const AppContent = () => {
  return (
    <div>
        <Hero />
        <Products />
        <About />
        <WhyChooseUs />
        <Testimonial />
        {/* <Contact /> */}
    </div>
  )
}

export default AppContent