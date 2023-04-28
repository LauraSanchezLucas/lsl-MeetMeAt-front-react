import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form'
import { userData } from '../userSlice';
import { InputComponent } from '../../components/input/InputComponent';
import { updateAllUserByAdmin } from '../../service/apiCalls';
import { detailData } from '../detailSlice';


export const UpdateUserByAdmin = () => {

    const credentialsRdx = useSelector(userData);
    const credentRdx = useSelector(detailData);

    const navigate = useNavigate();

    let params = credentRdx.choosenObject.id;
    console.log(credentRdx, 'turururuurur');

    const [credential, setCredential] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        role_id: ""
    });

    const updateUSerAdmin = () => {
        updateAllUserByAdmin(params, credential, credentialsRdx.credentials.token)
            .then(
                navigate('/login')
            )
            .catch(error => console.log(error))
    };
    return (
        
        <div className='main_register'>
            <Container>
                <Form className='formularioRegistro'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label variant='white'>Name</Form.Label>
                            <InputComponent
                                className={"inputlogin"}
                                required={true}
                                type={"text"}
                                name={"name"}
                                placeholder={credentialsRdx?.credentials?.user?.name}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridSurname">
                            <Form.Label>Surname</Form.Label>
                            <InputComponent
                                className={"inputlogin"}
                                type={"text"}
                                name={"surname"}
                                placeholder={credentialsRdx?.credentials?.user?.surname}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Email</Form.Label>
                            <InputComponent
                                className={"inputlogin"}
                                type={"email"}
                                name={"email"}
                                placeholder={credentialsRdx.credentials.user.email}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Phone</Form.Label>
                            <InputComponent
                                className={"inputlogin"}
                                type={"text"}
                                name={"phone"}
                                placeholder={credentialsRdx.credentials.user.phone}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPasswordZip">
                            <Form.Label>Password</Form.Label>
                            <InputComponent
                                className={"inputlogin"}
                                type={"text"}
                                name={"password"}
                                placeholder={"enter new password"}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPasswordZip">
                            <Form.Label>Role_id:</Form.Label>
                            <InputComponent
                                className={"inputlogin"}
                                type={"text"}
                                name={"role_id"}
                                placeholder={"enter new role"}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                    </Row>
                    <div className="buttonRegister">
                        <Button onClick={updateUSerAdmin} variant="primary">Submit</Button>
                    </div>
                </Form>
            </Container>
        </div>
     );
}