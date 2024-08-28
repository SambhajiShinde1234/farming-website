import { Col, Flex, Row } from "antd"
import logo from '../assets/Images/logo.png';

const LINKS = [
  {
    id: 1,
    text: 'About',
    url: 'about'
  },
  {
    id: 2,
    text: 'Testimonial',
    url: 'testimonial'
  },
  {
    id: 3,
    text: 'Product',
    url: 'product'
  },
  {
    id: 4,
    text: 'Gallery',
    url: 'gallery'
  }
]

const Footer = () => {
    return (
        <div className="container-fluid">
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={12} lg={6}>
                <img alt="Logo" src={logo} style={{ height: '200px', width: '220px' }}/>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6}>
              <p className="footerHeading">Links</p>
               <Flex style={{ flexDirection: 'column', gap: '15px' }}>
                {LINKS.map(item => (
                  <a href={item.url} key={item.id}>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    <span className="footerAddress">{item.text}</span>
                  </a> 
                ))}     
                </Flex>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6}>
              <p className="footerHeading">Address</p>
              <div className="logoTitleStack">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span className="footerAddress">
                  At Post Pangra Shinde,Hingoli,
                  Maharshtra 411038
                </span>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6}> 
              <p className="footerHeading">Contact</p>
              <div className="logoTitleStack">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span className="footerAddress">
                  <a href="mailto:mangangaagro@gmail.com" style={{ color: '#6E7673'}}>
                    mangangaagro@gmail.com
                  </a>
                </span>
              </div>
              <hr />
              <div className="logoTitleStack">
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                <span className="footerAddress">
                <a href="tel:+918854698752" style={{ color: '#6E7673'}}>
                  +91 8854698752
                </a>
                </span>
              </div>               
            </Col>
          </Row>
        </div>
    )
  }
  
  export default Footer