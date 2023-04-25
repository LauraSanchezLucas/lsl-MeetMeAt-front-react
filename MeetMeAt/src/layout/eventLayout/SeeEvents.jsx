import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import { useEffect, useState } from 'react';
import { deleteEventByAdmin, getAllEvents } from '../../service/apiCalls';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { userData } from '../userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateEventAdminM } from '../../components/modal/UpdateEventAdminM';


export const SeeEvents = () => {

    const credentialRdx = useSelector(userData);
    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const selected = (event) => {
        //Primero guardo en RDX los datos escogidos...
        // dispatch(addChoosen({ choosenObject: appointment }))
        deleteEventByAdmin(event.id, credentialRdx.credentials.token)
        console.log(credentialRdx.credentials.token, 'yuuuuuuuu')
        setTimeout(()=>{
            navigate("/");
        },500)
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
                                            <Button onClick={()=>selected(event)}>Cancel!</Button>
                                            <button className='btn btn-outline-success'type='submit' onClick={handleShow}>Update event</button>
                                        </Card.Body>
                                    </Card>
                            </Col>
                            ))}           
                    </Row>
                </Container>
            </div>
            <UpdateEventAdminM show={show} handleClose={handleClose}/>
        </>
    )
}