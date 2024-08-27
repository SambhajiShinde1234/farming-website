import { Carousel } from 'antd';
import React from 'react'

const feedback = [
    {
        id: 1,
        message: "The peppers from Manganga-agro-tech seeds are colorful, spicy, and grow abundantly. They’ve become a favorite among our buyers. Excellent seeds for high-quality peppers.",
        farmerName: 'Ramesh Shinde',
        location: 'Nanded, Maharashtra'
    },
    {
        id: 2,
        message: "Using Manganga-agro-tech tomato seeds has been fantastic. Our crops are healthier, yield more, and taste better. The seeds are reliable and have made a real difference in our farming.",
        farmerName: 'Ravi Sharma',
        location: 'Pune, Maharashtra'
    },
    {
        id: 3,
        message: "With Manganga-agro-tech carrot seeds, we’ve seen quicker germination and sweeter, crunchier carrots. They grow beautifully and have improved our harvests significantly. Very satisfied!",
        farmerName: 'Rajesh Kumar',
        location: 'Sambhaji nagar, Maharashtra'
    },
    {
        id: 4,
        message: "The Manganga-agro-tech lettuce seeds have been a game-changer. Our lettuce grows lush and tender, and we get great yields. Perfect for our local market demands.",
        farmerName: 'Sunita Patel',
        location: 'Baramati, Maharashtra'
    },
    {
        id: 5,
        message: "Our cucumbers from Manganga-agro-tech seeds are crisp and plentiful. The plants are robust and disease-resistant. These seeds have truly enhanced our cucumber production.",
        farmerName: 'Amit Singh',
        location: 'Kalamnuri, Maharashtra'
    },
    {
        id: 6,
        message: "The seeds from Manganga-agro-tech produce vibrant, juicy tomatoes with excellent yields. Our customers love the flavor and quality. Highly recommended for anyone growing tomatoes.",
        farmerName: 'Anita Shinde',
        location: 'Pangra shinde, Maharashtra'
    }
];

function Testimonial() {
  return (
    <div className='containerBgGreen'>
        <div className='container-fluid'>
            <p className='subTitleSpacingYellow' style={{ marginBottom: '40px'}}>Our Farmer's story</p>
           <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <i className='fas fa-star' aria-hidden="true"></i>
            <i className='fas fa-star' aria-hidden="true"></i>
            <i className='fas fa-star' aria-hidden="true"></i>
            <i className='fas fa-star' aria-hidden="true"></i>
            <i className='fas fa-star' aria-hidden="true"></i>
            </div>
            <Carousel autoplay>
                {feedback.map((item) => (
                    <div key={item.id} className='container-fluid'>
                        <p className='feedbackMessage'>{item.message}</p>
                        <p className='farmerName'>{item.farmerName}</p>
                        <p className='farmerLocation' >{item.location}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    </div>
  )
}

export default Testimonial