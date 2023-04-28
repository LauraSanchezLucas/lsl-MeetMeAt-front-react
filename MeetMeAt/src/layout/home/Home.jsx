import { Container, Row } from 'react-bootstrap';
import './Home.css';
import logo from '../../assets/logo.png'

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
      </Row>  
        <Row>
        <div className='business-side'></div>
        <div className='about-side' ></div>
        <div className='service-side' ></div>
        <div className='collage-side' ></div>
        <div className='contact-side' ></div>
      </Row>
      </Container>
    </>
  )
}
