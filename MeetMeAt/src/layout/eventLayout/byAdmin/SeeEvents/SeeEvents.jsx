import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import { useEffect, useState } from 'react';
import { deleteEventByAdmin, getAllEvents } from '../../../../service/apiCalls';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { userData } from '../../../userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './SeeEvents.css'


export const SeeEvents = () => {

    const credentialRdx = useSelector(userData);
    const navigate = useNavigate();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (events.length === 0) {
            getAllEvents()
                .then((result) => {
                    setEvents(result.data.event);
                })
                .catch((error) => console.log(error));
        }
    }, [events]);

    const selected = (event) => {
        deleteEventByAdmin(event.id, credentialRdx.credentials.token);
        setTimeout(() => {
            navigate("/all/events");
            window.location.reload();
        }, 500);
    };
    
    return (
        <div className="admin-background">
            <Row className="admin-card-main">
                {events.map((event) => (
                    <Col key={event.id} lg={4} sm={4}>
                        <Card className="admin-card-event">
                            <Card.Img variant="top" src={event.image} />
                            <Card.Body>
                                <Card.Title>{event.name}</Card.Title>
                                <Card.Text>
                                    <strong>Description:</strong>
                                    <br />
                                    {event.description}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Place:</strong>
                                    <br />
                                    {event.place}{" "}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Date:</strong>
                                    <br /> {event.date}{" "}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Hour:</strong>
                                    <br /> {event.hour}{" "}
                                </Card.Text>
                                <Button className="buttonOk" onClick={() => selected(event)}>
                                    Cancel!
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
