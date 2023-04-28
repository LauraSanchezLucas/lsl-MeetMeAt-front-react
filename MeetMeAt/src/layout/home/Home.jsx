import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import logo from '../../assets/logo.png'
import business1 from '../../assets/business1.png'
import business2 from '../../assets/business2.png'
import business3 from '../../assets/business3.png'
import business4 from '../../assets/business4.png'
import business6 from '../../assets/business6.png'
import Card from 'react-bootstrap/Card';
import social from '../../assets/social.jpg'
import sport from '../../assets/sport.jpg'
import cultural from '../../assets/cultural.jpg'
import musical from '../../assets/musical.jpg'
import corporate from '../../assets/corporate.jpg'


export const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <div className='main-home'>
            <div className='logo'><img src={logo} alt="Meet me at" /></div>
            <div className='slogan'>Let´s make every moment count together!!!</div>
          </div>
          <div className='business-side'>
            <img src={business1} alt="Initech industries" className='business-container' />
            <img src={business2} alt="Empire records" className='business-container' />
            <img src={business3} alt="Oscorp corporation" className='business-container' />
            <img src={business4} alt="Hooli sports" className='business-container' />
            <img src={business6} alt="Thorns group" className='business-container' />
          </div>
          <div className='about-side' >
            <div className='paragraph1'>About Us...</div>
            <div className='paragraph2'>Our goal is to help people connect and enjoy memorable moments through personalized and unique events. Join Meet Me At and discover how you can reconnect with your local community and enjoy life to the fullest!</div>
            <div className='paragraph3'><p>We are dedicated to creating a unique experience for our customers, offering them a wide variety of events so they can choose the one that best suits their needs.</p></div>
          </div>
        

          <div className='service-side' >
            <Container>
            <Row>
            <Card className='card-service col-12 col-md-6'>
              <Card.Body>
                <Card.Img variant="top" src={social} />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card-service col-12 col-md-6'>
              <Card.Body>
                <Card.Img variant="top" src={sport} />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card-service col-12 col-md-6'>
              <Card.Body>
                <Card.Img variant="top" src={musical} />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card-service col-12 col-md-6'>
              <Card.Body>
                <Card.Img variant="top" src={corporate} />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card-service col-12 col-md-6'>
              <Card.Body>
                <Card.Img variant="top" src={cultural} className='picture' />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </Row>
            </Container>
          </div>
          <div className='collage-side' >

            
          </div>


          {/* <div className='contact-side' ></div> */}
        </Row>
      </Container>
    </>
  )
}
