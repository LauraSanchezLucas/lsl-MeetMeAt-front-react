import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { InputComponent } from '../../input/InputComponent';
import { useNavigate } from 'react-router-dom';
import { registerMe } from '../../../service/apiCalls';
import { Helpers } from "../../../helpers/Helpers";
import './Register.css'

export const SingUpModal = () => {
  const [show, setShow] = useState(false);
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [showFirstModal, setShowFirstModal] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowBusinessModal = () => {
    setShowFirstModal(false);
    setShowBusinessModal(true);
    setShow(true);
  }

  const handleCloseBusinessModal = () => {
    setShowFirstModal(true);
    setShowBusinessModal(false);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uim9yke', 'template_i0091de', form.current, '84Qi_F-DIWGdD82Dt')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const navigate = useNavigate();

  const [credential, setCredential] = useState({
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
      if (credentialError[error] !== '') {
        setRegisterAct(false);
        return;
      }};
    for (let empty in credential) {
      if (credential[empty] === '') {
        setRegisterAct(false);
        return;
      }};
    for (let Helpers in validationCredential) {
      if (validationCredential[Helpers] === false) {
        setRegisterAct(false);
        return;
      }};

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

  const SubmitMe = () => {
    registerMe(credential)
      .then(() => {
        setRegisterSuccess(true);
        setTimeout(() => {
          handleClose();
          navigate("/");
        }, 1000);
      })
      .catch(error => console.log(error))
  };
  return (
    <>
    <Nav.Link onClick={handleShow}>Sing Up!</Nav.Link>
      {showFirstModal && (
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton />
          <Modal.Body>
          <div>
        <h1>Sing Up!</h1>
        {registerSuccess && (
          <div className="success-message">Registration Successful!</div>
        )}
        <Form>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label variant='white'>Name</Form.Label>
              <InputComponent
                className={'input-style'}
                type={'text'}
                name={'name'}
                required={true}
                maxLength={30}
                placeholder={'Enter your name...'}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.nameError}</div>
            </Form.Group>
            <Form.Group as={Col} controlId='formGridSurname'>
              <Form.Label>Surname</Form.Label>
              <InputComponent
                className={'input-style'}
                type={'text'}
                name={'surname'}
                required={true}
                maxLength={30}
                placeholder={'Enter your surname...'}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.surnameError}</div>
            </Form.Group>

          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>Email</Form.Label>
              <InputComponent
                className={'input-style'}
                type={'email'}
                name={'email'}
                required={true}
                placeholder={'Enter your email...'}
                maxLength={30}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.emailError}</div>
            </Form.Group>
            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Phone</Form.Label>
              <InputComponent
                className={'input-style'}
                type={'text'}
                name={'phone'}
                required={true}
                placeholder={'Enter your phone...'}
                maxLength={15}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.phoneError}</div>
            </Form.Group>
            <Form.Group as={Col} controlId="formPasswordZip">
              <Form.Label>Password</Form.Label>
              <InputComponent
                className={"input-style"}
                type={"password"}
                name={"password"}
                required={true}
                placeholder={"Enter password..."}
                maxLength={10}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div className='error-message'>{credentialError.passwordError}</div>
            </Form.Group>
          </Row>
          <div className="button-action">
            <Button onClick={SubmitMe} variant="primary" className="buttonOk">Sing Up!</Button>
          </div>
        </Form>
    </div>
          </Modal.Body>
          <Modal.Footer>
            <Nav.Link onClick={handleShowBusinessModal}>Please press here if you are business!!!</Nav.Link>
          </Modal.Footer>
        </Modal>
      )}
        <Modal show={showBusinessModal} onHide={handleCloseBusinessModal} size='lg'>
          <Modal.Header closeButton />
          <Modal.Body>
            <form ref={form} onSubmit={sendEmail} className='card-modal'>
            <label>Name</label>
            <input type="text" name="user_name" className='input-style'/>
            <label>Email</label>
            <input type="email" name="user_email" className='input-style'/>
          <label>Enter your business CIF</label>
          <textarea name="message" className='input-style'/>
    <input type="submit" value="Send" onClick={handleCloseBusinessModal} className='buttonOK input-modal-size'/>
        </form>
          </Modal.Body>
        </Modal>
    </>
  );
  };