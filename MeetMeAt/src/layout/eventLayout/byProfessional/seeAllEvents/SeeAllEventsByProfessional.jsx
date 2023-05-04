import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../../userSlice";
import { deleteEventByProfessional, getAllEventsProfessional } from "../../../../service/apiCalls";
import { Button, Card, Col, Row } from "react-bootstrap";


export const SeeAllEventsByProfessional = () => {
    const credentialRdx = useSelector(userData);


    const navigate = useNavigate();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (events.length === 0) {
            getAllEventsProfessional(credentialRdx.credentials.token)
                .then((result) => {
                    setEvents(result.data.event);
                })
                .catch((error) => console.log(error));
        }
    }, [events]);

    const selected = (event) => {
        deleteEventByProfessional(event.id, credentialRdx.credentials.token);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    };

    return (
        <div className="main-background">
            <Row className="card-main">
                {events.map((event) => (
                    <Col key={event.id} lg={4} sm={4}>
                        <Card className="card-style">
                            <Card.Img className="event-image" variant="top" src={event.image} />
                            <Card.Body>
                                <Card.Title>{event.name}</Card.Title>
                                <Card.Text>
                                    <strong>Description:</strong><br />{event.description}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Place:</strong><br />{event.place}{" "}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Date:</strong><br /> {event.date}{" "}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Hour:</strong><br /> {event.hour}{" "}
                                </Card.Text>
                                <Button className="buttonOk" onClick={() => selected(event)}>Cancel!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
