import { Card, Col, Row } from 'antd';
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
        desc: 'We use advanced breeding methods to develop seeds that are high-yielding, adapted to various environmental conditions, to achieve optimal results.'
    },
    {
        id: 3,
        reason: 'Sustainable Practices',
        desc: 'Committed to environmental stewardship, we employ eco-friendly production and packaging methods to promote sustainable farming and reduce our ecological footprint.'
    },
    {
        id: 4,
        reason: 'Expert Support and Guidance',
        desc: 'Our knowledgeable team provides personalized support, from seed selection to crop management, ensuring you have the resources needed for successful farming.'
    }
];

const  WhyChooseUs = () => {
  return (
    <div className='containerBg'>
        <div className='container-fluid'>
            <p className='subTitleSpacing'>Why choose us ?</p>
            <h3 className='titleSpacing'>The Value We Bring</h3>
            <Row gutter={[20,20]}>
                {CHARACTERISTICS.map((item) => (
                    <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card className='characterBlock' key={item.id}>
                            <h3 className='characterName'>
                                {item.reason}
                            </h3>
                            <p className='characterDesc'>
                                {item.desc}
                            </p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
  )
}

export default WhyChooseUs