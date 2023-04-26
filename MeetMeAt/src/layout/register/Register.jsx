import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerMe } from "../../service/apiCalls";
import { Helpers } from "../../helpers/Helpers";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { InputComponent } from "../../components/input/InputComponent";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Register.css";


export const Register = () => {

  const navigate = useNavigate();
  //HOOK
  const [credential, setCredential] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: ""
  });

  // HANDLERS
  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,

    }));
  };
  // HOOK VALIDATION
  const [validationCredential, setValidationCredential] = useState({
    nameValidation: false,
    surnameValidation: false,
    emailValidation: false,
    phoneValidation: false,
    passwordValidation: false,
  })
  // HOOK ERROR
  const [credentialError, setCredentialError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);

  //USEEFFECT
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
  });

  //FUNCIONES
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

  const SubmitMe = () => {
    registerMe(credential)
      .then(
        navigate('/login')
      )
      .catch(error => console.log(error))
  };

  return (
    <div>
      <Container>
        <Form className='formularioRegistro'>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label variant='white'>Name</Form.Label>
              <InputComponent
                className={'inputlogin'}
                required={true}
                type={'text'}
                name={'name'}
                maxLength={10}
                placeholder={'Enter name'}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='errorMessage'>{credentialError.nameError}</div>
            </Form.Group>
            <Form.Group as={Col} controlId='formGridSurname'>
              <Form.Label>Surname</Form.Label>
              <InputComponent
                className={'inputlogin'}
                required={true}
                type={'text'}
                name={'surname'}
                maxLength={20}
                placeholder={'Enter surname'}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='errorMessage'>{credentialError.surnameError}</div>
            </Form.Group>

          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>Email</Form.Label>
              <InputComponent
                className={'inputlogin'}
                required={true}
                type={'email'}
                name={'email'}
                placeholder={'Enter your email'}
                maxLength={30}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='errorMessage'>{credentialError.emailError}</div>
            </Form.Group>
            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Phone</Form.Label>
              <InputComponent
                className={'inputlogin'}
                required={true}
                type={'text'}
                name={'phone'}
                placeholder={'Enter your phone'}
                maxLength={10}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='errorMessage'>{credentialError.phoneError}</div>
            </Form.Group>
            <Form.Group as={Col} controlId="formPasswordZip">
              <Form.Label>Password</Form.Label>
              <InputComponent
                className={"inputlogin"}
                required={true}
                type={"text"}
                name={"password"}
                placeholder={"Enter password"}
                maxLength={10}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='errorMessage'>{credentialError.passwordError}</div>
            </Form.Group>
          </Row>
          <div className="buttonRegister">
            <Button onClick={SubmitMe} variant="primary">Submit</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
