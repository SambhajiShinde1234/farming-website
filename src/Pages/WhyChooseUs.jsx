import React from 'react'

const CHARACTERISTICS = [
    {
        id: 1,
        reason: 'Premium Seed Quality',
        desc: 'Our seeds are rigorously tested for purity and viability, ensuring high germination rates and robust plant growth for superior crop yields.'
    },
    {
        id: 2,
        reason: 'Innovative Breeding Techniques',
        desc: 'We use advanced breeding methods to develop seeds that are resilient, high-yielding, and adapted to various environmental conditions, helping you achieve optimal results.'
    },
    {
        id: 3,
        reason: 'Sustainable Practices',
        desc: 'Committed to environmental stewardship, we employ eco-friendly production and packaging methods to promote sustainable farming and reduce our ecological footprint.'
    },
    {
        id: 4,
        reason: 'Expert Support and Guidance',
        desc: 'Our knowledgeable team provides personalized support and advice, from seed selection to crop management, ensuring you have the resources needed for successful farming.'
    }
];

const  WhyChooseUs = () => {
  return (
    <div className='containerBg'>
        <div className='container-fluid'>
            <p className='subTitleSpacing'>Why choose us ?</p>
            <h3 className='titleSpacing'>The Value We Bring</h3>

            
        </div>
    </div>
  )
}

export default WhyChooseUs