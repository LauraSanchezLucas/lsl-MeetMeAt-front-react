import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../../userSlice";
import { addChoosen } from '../../../detailSlice';
import { deleteEventByProfessional, getAllEventsProfessional } from "../../../../service/apiCalls";
import { Button, Card, Col, Row } from "react-bootstrap";
// import './SeeAllEventsByProfessional.css'


export const SeeAllEventsByProfessional = () => {

    const credentialRdx = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (events.length === 0) {
            getAllEventsProfessional(credentialRdx.credentials.token)
                .then(
                    result => {
                        console.log(result, 'tttttttt')
                        setEvents(result.data.event)
                        console.log(result.data.event, 'rrrrrrrr')
                    }
                )
                .catch(error => console.log(error));
        }

    }, [events])


    const selected = (event) => {
        //Primero guardo en RDX los datos escogidos...
        // dispatch(addChoosen({ choosenObject: appointment }))
        deleteEventByProfessional(event.id, credentialRdx.credentials.token)
        console.log(credentialRdx.credentials.token, 'yuuuuuuuu')
        setTimeout(() => {
            navigate("/");
        }, 500)
    }
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
                                <Button className="buttonOk" onClick={() => selected(event)}>Cancel!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
