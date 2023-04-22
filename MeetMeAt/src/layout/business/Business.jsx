import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import { useEffect, useState } from 'react';
import { getAllBusinesses } from '../../service/apiCalls';
import Card from 'react-bootstrap/Card';


export const Business = () => {

    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        console.log(businesses, 'si')

        if (businesses.length === 0) {
            getAllBusinesses()
                .then((result) => {
                    console.log(result.data.business, 'yuhiu')
                    setBusinesses(result.data.business)
                }).catch((error) => console.log(error));
        }
    }, [businesses]);
    return (
        <>
            <div>
                <Container>
                    <h1>Business:</h1>
                    <Row>
                        {businesses.map((business)=>(
                            <Col key={business.id} lg={5} sm={5}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{business.name}</Card.Title>
                                            <Card.Text>Name: {business.User.name}</Card.Text>
                                            <Card.Text>Specialty: {business.Specialty.type}</Card.Text>
                                            <Card.Text>Email: {business.User.email}</Card.Text>
                                            <Card.Text>Phone: {business.User.phone}</Card.Text>
                                            <Card.Text>Notes: {business.notes}</Card.Text>
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