import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../../userSlice';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../../components/input/InputComponent';
import { createRole } from '../../../service/apiCalls';
import './CreateRole.css'

export const CreateRole = () => {

    const navigate = useNavigate();
    const credentialsRdx = useSelector(userData);

    const [credential, setCredential] = useState({
        name: ""
    });
    const [welcome, setWelcome] = useState("");
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
                setWelcome('role created')
                setTimeout(() => {
                    navigate("/role");
                }, 500);
            }).catch(error => { 
                setCredential(error.message),
                setWelcome('role already exist');
                setTimeout(()=>{
                    navigate("/role");
                }, 1000)
    })
    };
    
    return (
        <>
        {welcome !== "" ? (
            <Card>
                <Card.Header>{welcome}</Card.Header>
            </Card>
        ) : (
            <>
            <h5>Create Role!</h5>
            <div className='create-background main-background'>
                <Form>
                    <Row className="card-main" >
                    <div className="card-style card-shadow card-role-shadow">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label variant='white'>Name</Form.Label>
                            <InputComponent
                                className={"input-style"}
                                required={true}
                                type={"text"}
                                name={"name"}
                                placeholder={"Enter role name..."}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        </div>
                    </Row>
                    <div className='button-action'>
                        <Button className='buttonOk' onClick={createRoles} variant="primary">Submit</Button>
                    </div>
                </Form>
            </div>
            </>
        )}
        </>
    );
}