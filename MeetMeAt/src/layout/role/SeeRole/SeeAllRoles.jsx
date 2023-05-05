import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userSlice";
import { deleteRoleById, getAllRolesNotAdmin } from "../../../service/apiCalls";
import { Button, Card, Col, Row } from "react-bootstrap";
import './Role.css'

export const SeeAllRoles = () => {

    const [roles, setRoles] = useState([]);
    const credentialRdx = useSelector(userData);

    const dispatch = useDispatch();

    useEffect(() => {
        if (roles.length === 0) {
            getAllRolesNotAdmin(credentialRdx.credentials.token)
                .then(
                    result => {
                        setRoles(result.data.role)
                    }
                )
                .catch(error => console.log(error));
        };
    }, [roles])

    const selected = (rol) => {
        deleteRoleById(rol.id, credentialRdx.credentials.token);
        setTimeout(() => {
            getAllRolesNotAdmin(credentialRdx.credentials.token)
                .then(
                    result => {
                        setRoles(result.data.role)
                    }
                )
                .catch(error => console.log(error));
        }, 500);
    };


    return (
        <div className="main-background background-role">
            <Row className="card-main">
                {roles.map((rol) => (
                    <Col key={rol.id} lg={12} sm={12}>
                        <Card className='card-style'>
                            <Card.Body>
                                <Card.Title>{rol.name}</Card.Title>
                            </Card.Body>
                            <div className="buttonRegister">
                                <Button className="buttonOk" onClick={() => selected(rol)}>
                                    Cancel!
                                </Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}