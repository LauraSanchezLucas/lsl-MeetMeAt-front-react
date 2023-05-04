import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../../../userSlice';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../../../components/input/InputComponent';
import { createEventsByProfessional } from '../../../../service/apiCalls';
import './CreateEventByProfessional.css'

export const CreateEventByProfessional = () => {

  const navigate = useNavigate();

  const credentialsRdx = useSelector(userData);

  const [credential, setCredential] = useState({
    name: "",
    description: "",
    place: "",
    date: "",
    hour: "",
  });

  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => { };

  const createEvent = () => {

    createEventsByProfessional(credential, credentialsRdx.credentials.token)

      .then(respuesta => {
        setCredential(respuesta.data)
        setTimeout(() => {
          navigate("/all/events/professional");
        }, 500);
      }).catch(error => { setCredential(error.message) })
  };

  return (
    <>
      <div className='create-event-background'>
        <Form>
          <Row className="mb-3">
            <div className='create-event-card'>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label variant='white'>Url Image</Form.Label>
                <InputComponent
                  className={"input-style"}
                  required={true}
                  type={"text"}
                  name={"image"}
                  placeholder={"Enter URL image..."}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label variant='white'>Name</Form.Label>
                <InputComponent
                  className={"input-style"}
                  required={true}
                  maxLength={30}
                  type={"text"}
                  name={"name"}
                  placeholder={"Enter event name..."}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridSurname">
                <Form.Label>Description</Form.Label>
                <InputComponent
                  className={"input-style"}
                  type={"text"}
                  maxLength={200}
                  name={"description"}
                  placeholder={"Enter event description..."}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Place</Form.Label>
                <InputComponent
                  className={"input-style"}
                  type={"text"}
                  name={"place"}
                  maxLength={30}
                  placeholder={"Enter event place..."}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Date</Form.Label>
                <InputComponent
                  className={"input-style"}
                  type={"text"}
                  maxLength={10}
                  name={"date"}
                  placeholder={"Enter event date..."}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formPasswordZip">
                <Form.Label>Hour</Form.Label>
                <InputComponent
                  className={"input-style"}
                  type={"text"}
                  maxLength={10}
                  name={"hour"}
                  placeholder={"Enter event hour..."}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <div className='button-action button-action-eventPro'>
                <Button onClick={createEvent} variant="primary" className='buttonOk'>Create!</Button>
              </div>
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
}