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
        console.log(businesses, 'si')

        if (businesses.length === 0) {
            getAllBusinesses()
                .then((result) => {
                    console.log(result.data.business, 'yuhiu')
                    setBusinesses(result.data.business)
                }).catch((error) => console.log(error));
        }
    }, [businesses]);

    console.log(credentialRdx, 'yuuuuuuuu')
    const selected = (business) => {
        //Primero guardo en RDX los datos escogidos...
        // dispatch(addChoosen({ choosenObject: appointment }))
        deleteBusinessById(business.id, credentialRdx.credentials.token)
        setTimeout(()=>{
            navigate("/business");
        },500)
    }
    return (
        <>
            <h5 className='role-h5'>Business:</h5>
            <div className='admin-background'>
                    <Row className='admin-card-main'>
                        {businesses.map((business)=>(
                            <Col key={business.id} lg={5} sm={5}>
                                    <Card className='admin-card-event'>
                                        <Card.Body>
                                            <Card.Title>{business.name}</Card.Title>
                                            <Card.Text>Name: {business.User.name}</Card.Text>
                                            <Card.Text>Specialty: {business.Specialty.type}</Card.Text>
                                            <Card.Text>Email: {business.User.email}</Card.Text>
                                            <Card.Text>Phone: {business.User.phone}</Card.Text>
                                            <Card.Text>Notes: {business.notes}</Card.Text>
                                            <Button onClick={()=>selected(business)}>Cancel!</Button>

                                        </Card.Body>
                                    </Card>
                            </Col>
                            ))}           
                    </Row>
            </div>
        </>
    )
}