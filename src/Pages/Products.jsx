import React from 'react'
import onionProduct from '../assets/Images/onion.png';
import { Card, Col, Row } from 'antd';
const PRODUCTS = [
    {
        id: 1,
        name: 'Onion',
        url: onionProduct,
        areaUnderCultivation: '3.50 Lakh Ha',
        producePerHectar: '40 MT Per Ha'
    },
    {
        id: 2,
        name: 'Chilli',
        url: onionProduct,
        areaUnderCultivation: '2.0 Lakh Ha',
        producePerHectar: '30 MT Per Ha'
    },
    {
        id: 3,
        name: 'Garlic',
        url: onionProduct,
        areaUnderCultivation: '3.50 Lakh Ha',
        producePerHectar: '20 MT Per Ha'
    },
    {
        id: 4,
        name: 'Cucumber',
        url: onionProduct,
        areaUnderCultivation: '5.50 Lakh Ha',
        producePerHectar: '10 MT Per Ha'
    }
]

const Products = () => {
  return (
    <div className='containerBg'>
        <div className='container-fluid'>
            <p className='subTitleSpacing'>Our Innovation</p>
            <h3 className='titleSpacing'>What We’re Cultivating</h3>
            <Row gutter={[16,16]}>
                {PRODUCTS.map((item) => (
                    <Col xs={24} sm={12} md={8} lg={8} xl={6}>
                        <Card className='productBlock' key={item.id} hoverable>
                            <img src={item.url} alt={item.url} style={{ height: 200 , borderRadius: '100px' }} />
                            <h3 className='productName'>
                                {item.name}
                            </h3>
                            <p className='productDesc'>
                                Area under cultivation : {item.areaUnderCultivation}
                            </p>
                            <p className='productDesc'>
                                Productivity : {item.producePerHectar}
                            </p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
  )
}

export default Products