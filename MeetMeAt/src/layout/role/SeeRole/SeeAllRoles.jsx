import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userSlice";
import { getAllRoles } from "../../../service/apiCalls";
import { Card, Col, Row } from "react-bootstrap";
import './Role.css'

export const SeeAllRoles = () => {

    const [roles, setRoles] = useState([]);
    const credentialRdx = useSelector(userData);

    const dispatch = useDispatch();

    useEffect(() => {
        if (roles.length === 0) {
            getAllRoles(credentialRdx.credentials.token)
                .then(
                    result => {
                        setRoles(result.data.role)
                    }
                )
                .catch(error => console.log(error));
        };
    }, [roles])

    return (
        <div className='event-background'>
            <Row>
                {roles.map((rol) => (
                    <Col key={rol.id} lg={12} sm={1}>
                        <Card className='card-event'>
                            <Card.Body>
                                <Card.Title>{rol.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}