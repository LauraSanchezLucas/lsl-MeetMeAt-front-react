import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../components/input/InputComponent';
import { createRole } from '../../service/apiCalls';

export const CreateRole = () => {

    const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);

    const [credential, setCredential] = useState({
        name: ""
    });

    const inputHandler = (e) => {
        setCredential((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };


    const checkError = (e) => { };

    const createRoles = () => {

    createRole(credential, credentialsRdx.credentials.token)
            .then(respuesta => {
                setCredential(respuesta.data)
                setTimeout(() => {
                    // ToDo redireccionar a ver todos los roles
                    navigate("/role");
                }, 500);
            }).catch(error => { setCredential(error.message) })
    }
    return (
        <>
            <div >
                <Container>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label variant='white'>Name</Form.Label>
                                <InputComponent
                                    className={"inputlogin"}
                                    required={true}
                                    type={"text"}
                                    name={"name"}
                                    placeholder={"Enter name"}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                />
                            </Form.Group>
                        </Row>
                        <div>
                            <Button onClick={createRoles} variant="primary">Submit</Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </>
    );
}