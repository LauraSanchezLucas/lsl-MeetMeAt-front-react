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
import { getUserProfile, updateProfileUser } from '../../../service/apiCalls';
import './UpdateProfile.css';
import { Card } from 'react-bootstrap';

export const UpdateProfile = () => {

  const credentialsRdx = useSelector(userData);

  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    id: credentialsRdx?.credentials?.user?.userId,
    name: credentialsRdx?.credentials?.user?.name,
    surname: credentialsRdx?.credentials?.user?.surname,
    email: credentialsRdx?.credentials?.user?.email,
    phone: credentialsRdx?.credentials?.user?.phone,
  });

  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [validationCredential, setValidationCredential] = useState({
    nameValidation: true,
    surnameValidation: true,
    emailValidation: true,
    phoneValidation: true,
  });
  const [credentialError, setCredentialError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
    phoneError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);
  const [welcome, setWelcome] = useState("");

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
  useEffect(() => {
    if (credential.name === "") {
      getUserProfile(credentialsRdx.credential.token)
        .then((result) => {
          console.log(result);
          setCredential({
            name: result.data.name,
            surname: result.data.surname,
            email: result.data.email,
            phone: result.data.phone,
          });
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const updateUSer = () => {
    try{
    updateProfileUser(credential, credentialsRdx.credentials.token);
    setWelcome('Profile update Successful!');
        setTimeout(() => {
          navigate('/profile');
        }, 2000);
      }catch(error) {
        setWelcome('Update Profile Error');
        setTimeout(()=>{
          window.location.reload(true);
        }, 500);
      }
  };

  return (
    <div className='updateProfile-background'>
      {welcome !=="" ? (
        <Card>
          <Card.Header>{welcome}</Card.Header>
        </Card>
      ):(
      <Container className='button-action'>
        <Form className='update-form'>
          <h1>Update Profile</h1>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label variant='white'>Name</Form.Label>
              <InputComponent
                className={"input-style"}
                type={"text"}
                name={"name"}
                maxLength={10}
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
                maxLength={20}
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
                required={true}
                type={"email"}
                name={"email"}
                maxLength={40}
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
                required={true}
                type={"text"}
                name={"phone"}
                maxLength={20}
                placeholder={credentialsRdx.credentials.user.phone}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.phoneError}</div>
            </Form.Group>
          </Row>
          <div className="button-action">
            <Button onClick={updateUSer} variant="primary" className='buttonOk' >Update Now!</Button>
          </div>
        </Form>
      </Container>
      )}
    </div>
  );
}