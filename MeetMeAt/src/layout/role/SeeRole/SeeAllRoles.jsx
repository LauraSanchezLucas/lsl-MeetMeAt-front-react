import { useNavigate } from "react-router-dom";
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
    // const navigate = useNavigate();


    useEffect(() => {
        if (roles.length === 0) {
            getAllRoles(credentialRdx.credentials.token)
                .then(
                    result => {
                        console.log(result.data.role, 'tttttttt')
                        setRoles(result.data.role)
                    }
                )
                .catch(error => console.log(error));
        }
        console.log(roles)
    }, [roles])

    // const selected = (rol) => {
    //     //Primero guardo en RDX los datos escogidos...

    //     // dispatch(addChoosen({ choosenObject: rol }))
    //     console.log(rol, 'yuuuuuuuu')
    //     setTimeout(() => {
    //         navigate("/");
    //     }, 500)
    // }

    return (
        <div className='event-background'>
            <Row className='card-main'>
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