import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userData } from '../../layout/userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllRolesNotAdmin, getUserProfile, updateAllUserByAdmin } from '../../service/apiCalls';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { InputComponent } from '../input/InputComponent';
import { detailData } from '../../layout/detailSlice';




export const UpdateUserAdminM = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const credentialsRdx = useSelector(userData);
  const credentRdx = useSelector(detailData);
  const navigate = useNavigate();

  let params = credentRdx.choosenObject.id;

  const [credential, setCredential] = useState({
      id: params,
      name: credentRdx?.choosenObject?.name,
      surname: credentRdx?.choosenObject?.surname,
      email: credentRdx?.choosenObject?.email,
      phone: credentRdx?.choosenObject?.phone,
      role_id: "",
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
  const [roles, setRoles] = useState([]);

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
  useEffect(() => {
      if (credential.name === "") {
          getUserProfile(credentialsRdx.credential.token)
              .then((result) => {
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

  useEffect(() => {
      if (roles.length === 0) {
          getAllRolesNotAdmin(credentialsRdx.credentials.token)
              .then(
                  result => {
                      setRoles(result.data.role)
                  }
              )
              .catch(error => console.log(error));
      };
  }, [roles])

  const updateUSerAdmin = () => {
      updateAllUserByAdmin(params, credential, credentialsRdx.credentials.token)
          .then(() => {
              setRegisterAct(true);
              setTimeout(() => {
                handleClose();
                  navigate('/allusers');
              }, 1000);
          })
          .catch(error => console.log(error))
  };
  return (
    <>
      <Button className='buttonOk' variant="primary" onClick={handleShow}>
        Update User!
      </Button>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='main_register'>
            <Container>
                <Form className='formularioRegistro'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label variant='white'>Name</Form.Label>
                            <InputComponent
                                className={"inputlogin"}
                                maxLength={30}
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
                                maxLength={30}
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
                                maxLength={30}
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
                                maxLength={15}
                                type={"text"}
                                name={"phone"}
                                placeholder={credentRdx.choosenObject.phone}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                            <div className='error-message'>{credentialError.nameError}</div>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGripZip">
                            <Form.Label>Role:</Form.Label>
                            <Form.Select className='inputrole' name={"role_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                <option>Choose role:</option>
                                {roles.map((role) => {
                                    return (
                                        <option key={role.name} value={role.id}>{role.name}</option>
                                    )
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <div className="button-action">
                        <Button onClick={updateUSerAdmin} variant="primary" className='buttonOk'>Update Now!</Button>
                    </div>
                </Form>
            </Container>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


