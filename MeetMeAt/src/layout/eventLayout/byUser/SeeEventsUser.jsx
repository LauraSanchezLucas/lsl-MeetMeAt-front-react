import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAppointment, getAllEvents } from '../../../service/apiCalls';
import { userData } from '../../userSlice';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './SeeEventsUser.css';


export const SeeEventsUser = () => {

    const navigate = useNavigate();
    const credentialsRdx = useSelector(userData);

    const [events, setEvents] = useState([]);

    const [credential, setCredential] = useState({
        user_id: credentialsRdx.credentials.user,
        event_id: "",
    });

    useEffect(() => {
        if (events.length === 0) {
            getAllEvents()
                .then((result) => {
                    setEvents(result.data.event)
                }).catch((error) => console.log(error));
        }
    }, [events]);

    const bookAppoint = (eventId) => {
        const appointmentData = {
            user_id: credentialsRdx.credentials.user,
            event_id: eventId,
        };
        getAppointment(appointmentData, credentialsRdx.credentials.token)
            .then(respuesta => {
                setCredential({
                    ...credential,
                    event_id: eventId
                });
                setTimeout(() => {
                    navigate("/appointment");
                }, 500);
            }).catch(error => {
                console.log(error)
            })
    };

    return (
        <div className='event-user-background'>
            <Row className='card-main'>
                {events.map((event) => (
                    <Col key={event.id} lg={4} sm={4}>
                        <Card className='card-event'>
                            <Card.Img className='event-image' variant='top' src={event.image} />
                            <Card.Body>
                                <Card.Title>{event.name}</Card.Title>
                                <Card.Text><strong>Description:</strong><br />{event.description}</Card.Text>
                                <Card.Text><strong>Place:</strong><br />{event.place} </Card.Text>
                                <Card.Text><strong>Date:</strong><br /> {event.date} </Card.Text>
                                <Card.Text><strong>Hour:</strong><br /> {event.hour} </Card.Text>
                                <Button
                                    onClick={() => { bookAppoint(event.id) }} variant="primary" className='buttonOk'>
                                    Book!
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}


