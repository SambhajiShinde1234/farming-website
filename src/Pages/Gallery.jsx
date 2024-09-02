import { Carousel } from 'antd'
import React from 'react'

const GALLERY = [
  {
    id: 1,
    url: '',
    farmerName: '',
    farmerAddress: '',
    
  }
]
const Gallery = () => {
  return (
    <div className='containerBg'>
        <div className='container-fluid'>
            <p className='subTitleSpacing'>See Our Happy Farmers</p>
            <h3 className='titleSpacing'>Farmers Gallery</h3>

            <Carousel>

            </Carousel>
        </div>
    </div>
  )
}

export default Gallery