import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../../userSlice';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../../components/input/InputComponent';
import { createBusinesses, findAllSpecialty, getAllUsers } from '../../../service/apiCalls';
import './CreateBusiness.css'


export const CreateBusiness = () => {

  const navigate = useNavigate();
  const credentialRdx = useSelector(userData);

  const [users, setUsers] = useState([]);
  const [specialties, setSpecialties] = useState([]);

  const [credential, setCredential] = useState({
    notes: "",
    user_id: "",
    specialty_id: ""
  });

  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (users.length === 0) {
      getAllUsers(credentialRdx.credentials.token)
        .then(
          result => {
            setUsers(result.data.user)
          }
        )
        .catch(error => console.log(error));
    }
  }, [users])

  useEffect(() => {
    if (specialties.length === 0) {
      findAllSpecialty(credentialRdx.credentials.token)
        .then((result) => {
          setSpecialties(result.data.specialty)
        }).catch((error) => console.log(error));
    }
  }, [specialties]);

  const checkError = (e) => { };

  const createBusiness = () => {

    createBusinesses(credential, credentialRdx.credentials.token)
      .then(respuesta => {
        setCredential(respuesta.data)
        setTimeout(() => {
          navigate("/");
        }, 500);
      }).catch(error => { setCredential(error.message) })
  };
  
  return (
    <>
      <h5 className='role-h5'>Create Business!</h5>
      <div className='admin-main-create-business'>
        <Form>
          <Row className="mb-3">
            <div className='admin-create-business-card'>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Notes</Form.Label>
                <InputComponent
                  className={"inputevent"}
                  type={"text"}
                  name={"notes"}
                  placeholder={"Enter place"}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Label>User:</Form.Label>
              <Form.Select className='inputevent' name={"user_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                <option>Choose user:</option>
                {users.map((user) => {
                  return (
                    <option key={user.name} value={user.id}>{user.name}</option>
                  )
                })}
              </Form.Select>
              <Form.Label>Specialty:</Form.Label>
              <Form.Select className='inputevent' name={"specialty_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                <option>Choose specialty:</option>
                {specialties.map((specialty) => {
                  return (
                    <option key={specialty.type} value={specialty.id}>{specialty.type}</option>
                  )
                })}
              </Form.Select>
            </div>
          </Row>
          <div className='buton-position-event'>
            <Button className='buttonOk' onClick={createBusiness} variant="primary">Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
}