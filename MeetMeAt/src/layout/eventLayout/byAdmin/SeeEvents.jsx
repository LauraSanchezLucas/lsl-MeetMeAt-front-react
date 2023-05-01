import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import { useEffect, useState } from 'react';
import { deleteEventByAdmin, getAllEvents } from '../../../service/apiCalls';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { userData } from '../../userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export const SeeEvents = () => {

    const credentialRdx = useSelector(userData);
    const navigate = useNavigate();

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
    console.log(events, 'tytyty')

    const selected = (event) => {
        //Primero guardo en RDX los datos escogidos...
        // dispatch(addChoosen({ choosenObject: appointment }))
        deleteEventByAdmin(event.id, credentialRdx.credentials.token)
        console.log(credentialRdx.credentials.token, 'yuuuuuuuu')
        setTimeout(()=>{
            navigate("/all/events");
            window.location.reload();
        },500)
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