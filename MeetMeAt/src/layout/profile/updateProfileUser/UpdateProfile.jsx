import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helpers } from '../../../helpers/Helpers';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { InputComponent } from '../../../components/input/InputComponent';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { userData } from '../../userSlice';
import { updateProfileUser } from '../../../service/apiCalls';
import './UpdateProfile.css';

export const UpdateProfile = () => {

  const credentialsRdx = useSelector(userData);

  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    id: credentialsRdx.credentials.user.userId,
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: ""
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
    passwordValidation: false,
  });
  const [credentialError, setCredentialError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  useEffect(() => {
    for (let error in credentialError) {
      if (credentialError[error] !== "") {
        setRegisterAct(false);
        return;
      }};
    for (let empty in credential) {
      if (credential[empty] === "") {
        setRegisterAct(false);
        return;
      }};
    for (let Helpers in validationCredential) {
      if (validationCredential[Helpers] === false) {
        setRegisterAct(false);
        return;
      }};
  
    setRegisterAct(true);
  });

  const checkError = (e) => {

    let error = "";

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
      [e.target.name + "Error"]: error,
    }));
  };

  const updateUSer = () => {
    updateProfileUser(credential, credentialsRdx.credentials.token)
      .then(() => {
        setRegisterSuccess(true);
        setTimeout(() => {
          navigate('/profile');
          window.location.reload();
        }, 2000);
      })
      .catch(error => console.log(error))
  };

  return (
    <div className='updateProfile-background'>
      <Container className='button-action'>
        {registerSuccess && (
          <div className="success-message">Update Profile Successful!</div>
        )}
        <Form className='update-form'>
          <h1>Update Profile</h1>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label variant='white'>Name</Form.Label>
              <InputComponent
                className={"input-style"}
                required={true}
                type={"text"}
                name={"name"}
                placeholder={credentialsRdx.credentials.user.name}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.nameError}</div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSurname">
              <Form.Label>Surname</Form.Label>
              <InputComponent
                className={"input-style"}
                type={"text"}
                name={"surname"}
                placeholder={credentialsRdx.credentials.user.surname}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.surnameError}</div>
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Email</Form.Label>
              <InputComponent
                className={"input-style"}
                type={"email"}
                name={"email"}
                placeholder={credentialsRdx.credentials.user.email}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.emailError}</div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Phone</Form.Label>
              <InputComponent
                className={"input-style"}
                type={"text"}
                name={"phone"}
                placeholder={credentialsRdx.credentials.user.phone}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.phoneError}</div>
            </Form.Group>
            <Form.Group as={Col} controlId="formPasswordZip">
              <Form.Label>Password</Form.Label>
              <InputComponent
                className={"input-style"}
                type={"text"}
                name={"password"}
                placeholder={"enter new password"}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.passwordError}</div>
            </Form.Group>
          </Row>
          <div className="button-action">
            <Button onClick={updateUSer} variant="primary" className='buttonOk' >Update Now!</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}