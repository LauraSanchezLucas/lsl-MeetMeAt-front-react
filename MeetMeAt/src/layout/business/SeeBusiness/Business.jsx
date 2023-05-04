import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import { useEffect, useState } from 'react';
import { deleteBusinessById, getAllBusinesses } from '../../../service/apiCalls';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../../userSlice';
import { useNavigate } from 'react-router-dom';


export const Business = () => {

    const navigate = useNavigate();

    const credentialRdx = useSelector(userData);

    const [businesses, setBusinesses] = useState([]);


    useEffect(() => {
        if (businesses.length === 0) {
            getAllBusinesses()
                .then((result) => {
                    setBusinesses(result.data.business)
                }).catch((error) => console.log(error));
        }
    }, [businesses]);

    const selected = (business) => {
        deleteBusinessById(business.id, credentialRdx.credentials.token)
        setTimeout(() => {
            navigate("/business");
        }, 500)
    };
    
    return (
        <>
            <h5>Business</h5>
            <div className='main-background'>
                <Row className='card-main'>
                    {businesses.map((business) => (
                        <Col key={business.id} lg={5} sm={5}>
                            <Card className='card-style'>
                                <Card.Body>
                                    <Card.Title><strong>{business.name}</strong></Card.Title>
                                    <Card.Text><strong>Name:</strong> {business.User.name}</Card.Text>
                                    <Card.Text><strong>Specialty:</strong> {business.Specialty.type}</Card.Text>
                                    <Card.Text><strong>Email:</strong> {business.User.email}</Card.Text>
                                    <Card.Text><strong>Phone:</strong> {business.User.phone}</Card.Text>
                                    <Card.Text><strong>Notes:</strong> {business.notes}</Card.Text>
                                    <Button className='buttonOk' onClick={() => selected(business)}>Delete!</Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}