import React, {useState, useEffect} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAppointment, getAllEvents } from '../../service/apiCalls';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


export const BookAppointment = () => {

    const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);
        // console.log(credentialsRdx.credentials.user, 'si')


   const [events, setEvents] = useState([]);

  const [credential, setCredential] = useState({
    user_id: credentialsRdx.credentials.user ,
    event_id: "", 
   
  });
  
  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


   useEffect(() => {
        if (events.length === 0) {
            getAllEvents()
                .then((result) => {
                    console.log(result, 'yuhiu')
                    setEvents(result.data.event)
                }).catch((error) => console.log(error));
        }
    }, [events]);
    
  const bookAppoint = (eventId) => {
    
    const appointmentData = {
        user_id: credentialsRdx.credentials.user,
        event_id: eventId,
    }
    
    getAppointment(appointmentData, credentialsRdx.credentials.token)
    .then ( respuesta => { 
        setCredential({
            ...credential,
            event_id: eventId
        })
        setTimeout(() => {
          navigate("/");
        }, 500);
    }) .catch(error =>{
        console.log(error)
    })

}
  return (
    <>
<div>
                <Container className='backGround-treatment'>
                    <h1>Events:</h1>
                    <Row>
                        {events.map((event)=>(
                            <Col key={event.id} lg={5} sm={5}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{event.name}</Card.Title>
                                            <Card.Text>Description: {event.description}</Card.Text>
                                            <Card.Text>Place: {event.place} </Card.Text>
                                            <Card.Text>Date: {event.date} </Card.Text>
                                            <Card.Text>Hour: {event.hour} </Card.Text>
        <Button
        onClick={()=> {console.log(event.id, 'siiii'); bookAppoint(event.id)}} variant="primary">
      Book!
      </Button>
                                        </Card.Body>
                                    </Card>
                            </Col>
                            ))}           
                    </Row>
                </Container>
            </div>
  </>
      );  
  }            