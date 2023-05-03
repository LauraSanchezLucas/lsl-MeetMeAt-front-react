import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import logo from '../../assets/logo.png';
import business1 from '../../assets/business1.png';
import business2 from '../../assets/business2.png';
import business3 from '../../assets/business3.png';
import business4 from '../../assets/business4.png';
import business6 from '../../assets/business6.png';
import Card from 'react-bootstrap/Card';
import social from '../../assets/social.jpg';
import sport from '../../assets/sport.jpg';
import cultural from '../../assets/cultural.jpg';
import musical from '../../assets/musical.jpg';
import corporate from '../../assets/corporate.jpg';
import item1 from '../../assets/item1.jpg';
import item2 from '../../assets/item2.jpg';
import item3 from '../../assets/item3.jpg';
import item4 from '../../assets/item4.jpg';
import item5 from '../../assets/item5.jpg';
import item6 from '../../assets/item6.jpg';
import item7 from '../../assets/item7.jpg';
import A2 from '../../assets/A2.jpg';


export const Home = () => {
  return (
    <>
      <Container fluid className='all-code'>
        {/* LOGO*/}
        <Row className='all-code'>
          {/* MAIN PART*/}
          <Col lg={12} sm={12} xs={12} className='all-code'>
            <div className='main-home '>
              <div className='logo'><img src={logo} alt="Meet me at" /></div>
              <div className='slogan'>Let´s make every moment count together!!!</div>
            </div>
          </Col>
        </Row>
        {/* BUSINESS PART */}
        <div className='business-side'>
          <Col lg={2} sm={6} xs={6} className='d-flex flex-column flex-lg-row'>
            <img src={business1} alt="Initech industries" className='business-container' />
            <img src={business2} alt="Empire records" className='business-container' />
            <img src={business3} alt="Oscorp corporation" className='business-container' />
            <img src={business4} alt="Hooli sports" className='business-container' />
            <img src={business6} alt="Thorns group" className='business-container' />
          </Col>
        </div>
        {/* ABOUT US PART */}
        <div className='about-side' >
          <Col className='d-flex flex-column flex-md-col'>
            <div className='paragraph1'>About Us...</div>
            <div className='paragraph2'>Our goal is to help people connect and enjoy memorable moments through personalized and unique events. Join Meet Me At and discover how you can reconnect with your local community and enjoy life to the fullest!</div>
            <div className='paragraph3'><p>We are dedicated to creating a unique experience for our customers, offering them a wide variety of events so they can choose the one that best suits their needs.</p></div>
          </Col>
        </div>

        {/* TYPE OF SERVICES */}
        <div className='service-side'>
          <Col className='d-flex flex-column flex-md-row'>
            <Card className='card-service' >
              <Card.Body>
                <Card.Img variant="top" src={social} />
                <Card.Text>
                We create the perfect ambiance for your social gathering, complete with delectable cuisine and elegant décor.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card-service'>
              <Card.Body>
                <Card.Img variant="top" src={sport} />
                <Card.Text>
                Our comprehensive sports event ensure seamless organization of tournaments, competitions, and matches, leaving you free to focus on the activity.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card-service'>
              <Card.Body>
                <Card.Img variant="top" src={musical} />
                <Card.Text>
                From small, intimate concerts to large-scale festivals, our music event services cater to every need, with expert sound and lighting, top-notch artists, and flawless event management.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card-service'>
              <Card.Body>
                <Card.Img variant="top" src={corporate} />
                <Card.Text>
                Elevate your corporate event with our innovative events, which include strategic venue selection, customized branding, and expert logistics management.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card-service'>
              <Card.Body>
                <Card.Img variant="top" src={cultural} className='picture' />
                <Card.Text>
                Immerse yourself in the rich cultural heritage of our events, featuring vibrant art, performances, and indulge in delectable local cuisine.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        {/* COLLAGE  */}
        <div className='collage-side' >
          <div className='item-1'>
            <img src={item1} className='image-collage' />
          </div>
          <div>
            <img src={item2} className='image-collage' />
          </div>
          <div className='item-3'>
            <img src={item3} className='image-collage' />
          </div>
          <div className='movil-item-1'>
            <img src={item4} className='image-collage' />
          </div>
          <div className='item-5'>
            <img src={item5} className='image-collage' />
          </div>
          <div className='movil-item-2'>
            <img src={item6} className='image-collage' />
          </div>
          <div className='item-7'>
            <img src={A2} className='image-collage' />
          </div>
          <div className='item-8'>
            <img src={item7} className='image-collage' />
          </div>
        </div>
      </Container>
    </>
  )
}