import React, { useState, useEffect } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../../userSlice';
import { useNavigate } from 'react-router-dom';
import { createAppointmentAdmin, getAllEvents, getAllUsers } from '../../../service/apiCalls';

export const CreateAppointmentByAdmin = () => {

  const navigate = useNavigate();
  const credentialsRdx = useSelector(userData);

  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);

  const [credential, setCredential] = useState({
    user_id: "",
    event_id: "",
  });

  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const checkError = (e) => { };

  useEffect(() => {
    if (users.length === 0) {
      getAllUsers(credentialsRdx.credentials.token)
        .then(
          result => {
            setUsers(result.data.user)
          }
        )
        .catch(error => console.log(error));
    }
  }, [users])

  useEffect(() => {
    if (events.length === 0) {
      getAllEvents()
        .then(
          result => {
            setEvents(result.data.event)
          })
        .catch(error => console.log(error));
    }
  }, [events])

  const createAppoint = () => {

    createAppointmentAdmin(credential, credentialsRdx.credentials.token)

      .then(respuesta => {
        setCredential(respuesta.data)
        setTimeout(() => {
          navigate("/getappointment");
        }, 500);
      }).catch(error => {
        setCredential(error.message)
      })
  };

  return (
    <>
      <h5 className='role-h5'>Create Appointment!</h5>
      <div className='admin-main-create-business'>
        <Form>
          <Row className="mb-3">
            <div className='admin-create-business-card'>
              <Form.Label>User:</Form.Label>
              <Form.Select className='inputevent' name={"user_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                <option>Choose user:</option>
                {users.map((user) => {
                  return (
                    <option key={user.name} value={user.id}>{user.name}</option>
                  )
                })}
              </Form.Select>

              <Form.Label>Event:</Form.Label>
              <Form.Select className='inputevent' name={"event_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                <option>Choose event:</option>
                {events.map((event) => {
                  return (
                    <option key={event.name} value={event.id}>{event.name}</option>
                  )
                })}
              </Form.Select>
            </div>
          </Row>
          <div className='buton-position-event'>
            <Button className='buttonOk' onClick={createAppoint} variant="primary">Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
}