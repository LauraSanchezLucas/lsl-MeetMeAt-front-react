import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helpers } from '../../../helpers/Helpers'
import Button from 'react-bootstrap/Button'
import { InputComponent } from '../../../components/input/InputComponent';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllRolesNotAdmin, registerByAdmin } from '../../../service/apiCalls'
import { useSelector } from 'react-redux'
import { userData } from '../../userSlice'


export const CreateUserByAdmin = () => {

  const navigate = useNavigate();
  const credentialsRdx = useSelector(userData);

  const [roles, setRoles] = useState([]);
  const [credential, setCredential] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
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
    passwordValidation: false,
  });
  const [credentialError, setCredentialError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    role_idError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);

  useEffect(() => {
    for (let error in credentialError) {
      if (credentialError[error] !== "") {
        setRegisterAct(false);
        return;
      }
    };
    for (let empty in credential) {
      if (credential[empty] === "") {
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
 
  const checkError = (e) => {

    let error = "";

    let checked = Helpers(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.Helpers;

    setValidationCredential((prevState) => ({
      ...prevState,
      [e.target.name + "Validation"]: checked.Helpers,
    }));

    setCredentialError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };
  
  const SubmitMe = () => {
    registerByAdmin(credential, credentialsRdx.credentials.token)
      .then(
        navigate('/allusers')
      )
      .catch(error => console.log(error))
  };

  return (
    <>
      <h5 className='role-h5'>Create User!</h5>
      <div className='admin-create-role'>
        <Form>
          <div className="mb-3 admin-create-role-card">
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label variant='white'>Name</Form.Label>
                <InputComponent
                  className={"inputrole"}
                  required={true}
                  type={"text"}
                  name={"name"}
                  placeholder={"Enter name"}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div className='red'>{credentialError.nameError}</div>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridSurname">
                <Form.Label>Surname</Form.Label>
                <InputComponent
                  className={"inputrole"}
                  type={"text"}
                  name={"surname"}
                  placeholder={"Enter surname"}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div className='red'>{credentialError.surnameError}</div>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Email</Form.Label>
                <InputComponent
                  className={"inputrole"}
                  type={"email"}
                  name={"email"}
                  placeholder={"Enter emil"}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div className='red'>{credentialError.emailError}</div>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Phone</Form.Label>
                <InputComponent
                  className={"inputrole"}
                  type={"text"}
                  name={"phone"}
                  placeholder={"Enter phone"}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div className='red'>{credentialError.phoneError}</div>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formPasswordZip">
                <Form.Label>Password</Form.Label>
                <InputComponent
                  className={"inputrole"}
                  type={"text"}
                  name={"password"}
                  placeholder={"Enter password"}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div className='red'>{credentialError.passwordError}</div>
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
          </div>
          <div className='buton-position-event'>
            <Button className='buttonOk' onClick={SubmitMe} variant="primary">Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
}


