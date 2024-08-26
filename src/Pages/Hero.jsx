import Hero1 from '../assets/Images/hero1.png'
import { Button, Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Precision in Every Seed: Excellence from Start to Finish ',
    // content: ' Our commitment to quality starts with the careful selection and testing of every seed we produce. We employ stringent quality control measures to ensure that each seed meets our high standards for purity, vitality, and performance. With our seeds, you can trust that you’re planting the foundation for a thriving harvest'
  },
  {
    key: '2',
    title: 'Innovative Breeding for Maximum Impact ',
    // content: "Harnessing cutting-edge breeding techniques, we create seeds designed to excel in any environment. Our forward-thinking approach means you get varieties that not only adapt to diverse conditions but also drive superior growth, resilience, and yield. Experience the benefits of seeds that are as innovative as they are reliable",
  },
  {
    key: '3',
    title: 'Expertise You Can Trust, Results You Can See ',
    // content: 'we deliver seeds that consistently perform at their best. Our team’s dedication to understanding and addressing your specific needs ensures that you get seeds that lead to exceptional results. With us, your success is rooted in quality and expertise',
  },
]

const Hero = () => {
  return (
    <div className="heroBlock1">
      <Carousel autoplay>
        {items.map((item) => (
          <div key={item.key} className='container-fluid'>
            <div className='content'>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Hero