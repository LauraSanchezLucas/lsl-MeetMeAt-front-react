import { Container, Row } from 'react-bootstrap';
import './Home.css';
import logo from '../../assets/logo.png'
import business1 from '../../assets/business1.png'
import business2 from '../../assets/business2.png'
import business3 from '../../assets/business3.png'
import business4 from '../../assets/business4.png'
import business6 from '../../assets/business6.png'

export const Home = () => {
  return (
    <>
      <Container fluid>
      <Row>
        <div className='main-home'>
          <div className='overlay'></div>
          <div className='logo'>
          <img src={logo} alt="Meet me at"/>
          </div>
        </div>
      {/* </Row>  
        <Row> */}
        <div className='business-side'>
          <img src={business1} alt="Initech industries" className='business-container'/>
          <img src={business2} alt="Empire records" className='business-container' />
          <img src={business3} alt="Oscorp corporation" className='business-container' />
          <img src={business4} alt="Hooli sports" className='business-container' />
          <img src={business6} alt="Thorns group" className='business-container' />
        </div>
        <div className='about-side' ></div>
        <div className='service-side' ></div>
        <div className='collage-side' ></div>
        <div className='contact-side' ></div>
      </Row>
      </Container>
    </>
  )
}
