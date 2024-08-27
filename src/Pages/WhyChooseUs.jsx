import { Card, Col, Row } from 'antd';
import React from 'react'



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