import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import { useEffect, useState } from 'react';
import { getAllEvents } from '../../service/apiCalls';
import Card from 'react-bootstrap/Card';


export const SeeEventByProfessional = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        console.log(events, 'si')

        if (events.length === 0) {
            getAllEvents()
                .then((result) => {
                    console.log(result.data.event, 'yuhiu')
                    setEvents(result.data.event)
                }).catch((error) => console.log(error));
        }
    }, [events]);
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
                                        </Card.Body>
                                    </Card>
                            </Col>
                            ))}           
                    </Row>
                </Container>
            </div>
        </>
    )
}