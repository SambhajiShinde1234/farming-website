import { Row, Col, Button } from 'antd';
import aboutImage from '../assets/Images/aboutImage.png';

const About = () => {
    return (
      <div className="container-fluid">
        <p className='subTitleSpacing'>Discover the journey</p>
        <h3 className='titleSpacing'>Our Story</h3>
        <Row gutter={[16, 16]}>
          <Col  xl={12} lg={12} md={24} sm={24} xs={24}>
            <img className='ourStoryImg' src={aboutImage} alt='farmer-image' loading='lazy' />
          </Col>
          <Col  xl={12} lg={12} md={24} sm={24} xs={24}>
            <div className='ourStoryBlock'>
              <p className='ourStoryP'>
                Enhance Your Harvest with Manganga’s Sustainable Seed Varieties
              </p>
              <h2 className='ourStoryh2'>
                Quality Agri-Produce, Guided by Expertise.
              </h2>
              <p className='ourStoryP2'>
                Founded in 2020, Manganga-Tech is committed to supporting farmers by providing high-quality seeds. 
                We prioritize sustainable agricultural practices to ensure the best produce and support responsible farming.
              </p>
              <p className='ourStoryP3'>
                At Manganga-Tech, we are dedicated to empowering farmers with top-quality seeds to enhance both the yield and quality of your crops. 
                Since our founding in 2020, we've partnered with farmers and Fertilizer shops to provide not only superior seeds but also comprehensive support, 
                including sustainable packaging solutions and expert technical guidance. 
                Our goal is to foster a trusted relationship where our high-quality seeds and your successful harvests lead to 
                improved profitability and sustainable practices for everyone involved.
              </p>
            </div>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <span className='characterSpan'> 🌾Sustainable Farming</span>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <span className='characterSpan'> 🌾Quality Seed Varieties</span>
              </Col>
            </Row>
            <Button className='connectBtn'>Connect With Us</Button> 
          </Col>
        </Row>
      </div>
    )
  }
  
  export default About