import React, { useState } from 'react';
import { Anchor, Drawer, Button, Grid } from 'antd';
import logo from '../assets/Images/logo.avif';

const { Link } = Anchor;
const { useBreakpoint } = Grid;

function AppHeader() {
  const screen = useBreakpoint();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='container-fluid'>
      <div className='header'>
        <div className='logo'>
          <a href="/" style={{ color: '#151515', fontWeight: 700 }}>
            Manganga-Tech
          </a>
        </div>

        {/* Show links on tablet and larger screens */}
        {/* {(screen.md || screen.lg) && ( */}
          <div className='mobileHidden'>
            <a href="#hero" className='custom-link'>Home</a>
            <a href="#about" className='custom-link'>About Us</a>
            <a href="#contact" className='custom-link'>Contact Us</a>
          </div>
        {/* )} */}

        {/* Show drawer on mobile and tablet screens */}
        {/* {(screen.xs || screen.sm) && ( */}
          <div className='mobileVisible'>
            <Button type="primary" onClick={showDrawer}>
              <i className="fas fa-bars"></i>
            </Button>
            <Drawer
              placement="right"
              closable={true}
              onClose={onClose}
              open={visible}
            >
              <Anchor targetOffset="65">
                <Link href="#hero" title="Home" />
                <Link href="#about" title="About Us" />
                <Link href="#contact" title="Contact Us" />
              </Anchor>
            </Drawer>
          </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default AppHeader;
