import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form'
import { userData } from '../../userSlice';
import { InputComponent } from '../../../components/input/InputComponent';
import { updateAllUserByAdmin } from '../../../service/apiCalls';
import { detailData } from '../../detailSlice';
import { Helpers } from "../../../helpers/Helpers";


export const UpdateUserByAdmin = () => {

    const credentialsRdx = useSelector(userData);
    const credentRdx = useSelector(detailData);
    const navigate = useNavigate();

    let params = credentRdx.choosenObject.id;

    const [credential, setCredential] = useState({
        id: params,
        name: "",
        surname: "",
        email: "",
        phone: "",
        role_id: ""
    });
    const inputHandler = (e) => {
        setCredential((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }));
    };

    const [validationCredential, setValidationCredential] = useState({
        nameValidation: false,
        surnameValidation: false,
        emailValidation: false,
        phoneValidation: false,
    });
    const [credentialError, setCredentialError] = useState({
        nameError: "",
        surnameError: "",
        emailError: "",
        phoneError: "",
    });

    const [registerAct, setRegisterAct] = useState(false);

    const [registerSuccess, setRegisterSuccess] = useState(false);

    useEffect(() => {
        for (let error in credentialError) {
            if (credentialError[error] !== '') {
                setRegisterAct(false);
                return;
            }
        };
        for (let empty in credential) {
            if (credential[empty] === '') {
                setRegisterAct(false);
                return;
            }
        };
        for (let Helpers in validationCredential) {
            if (validationCredential[Helpers] === false) {
                setRegisterAct(false);
                return;
            }
        };

        setRegisterAct(true);
    }, [credentialError, credential, validationCredential]);

    const checkError = (e) => {

        let error = '';

        let checked = Helpers(
            e.target.name,
            e.target.value,
            e.target.required
        );

        error = checked.message;

        setValidationCredential((prevState) => ({
            ...prevState,
            [e.target.name + "Validation"]: checked.Helpers,
        }));

        setCredentialError((prevState) => ({
            ...prevState,
            [e.target.name + 'Error']: error,
        }));
    };

    const updateUSerAdmin = () => {
        updateAllUserByAdmin(params, credential, credentialsRdx.credentials.token)
            .then(() => {
                setRegisterSuccess(true);
                setTimeout(() => {
                    navigate('/allusers');
                    window.location.reload();
                }, 2000);
            })
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
                    
                                type={"text"}
                                name={"name"}
                                placeholder={credentRdx.choosenObject.name}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                            <div className='error-message'>{credentialError.nameError}</div>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridSurname">
                            <Form.Label>Surname</Form.Label>
                            <InputComponent
                                className={"inputlogin"}
                                type={"text"}
                                name={"surname"}
                                placeholder={credentRdx.choosenObject.surname}
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
                                placeholder={credentRdx.choosenObject.email}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                            <div className='error-message'>{credentialError.nameError}</div>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Phone</Form.Label>
                            <InputComponent
                                className={"inputlogin"}
                                type={"text"}
                                name={"phone"}
                                placeholder={credentRdx.choosenObject.phone}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                            <div className='error-message'>{credentialError.nameError}</div>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPasswordZip">
                            <Form.Label>Role_id:</Form.Label>
                            <InputComponent
                                className={"inputlogin"}
                                type={"text"}
                                name={"role_id"}
                                placeholder={credentRdx.choosenObject.Role.name}
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