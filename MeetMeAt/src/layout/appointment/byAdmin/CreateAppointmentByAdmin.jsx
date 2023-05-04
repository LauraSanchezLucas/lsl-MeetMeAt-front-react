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

  const [appointment, setappointment] = useState({
    user_id: "",
    event_id: "",
  });

  const inputHandler = (e) => {
    setappointment((prevState) => ({
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

    createAppointmentAdmin(appointment, credentialsRdx.credentials.token)

      .then(respuesta => {
        setappointment(respuesta.data)
        setTimeout(() => {
          navigate("/getappointment");
        }, 500);
      }).catch(error => {
        setappointment(error.message)
      })
  };

  return (
    <>
      <h5>Create Appointment!</h5>
      <div className='main-background create-background'>
        <Form>
          <Row className="card-main">
          <div className="card-style card-shadow card-role-shadow">
              <Form.Label>User</Form.Label>
              <Form.Select className='inputevent' name={"user_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                <option>Choose user</option>
                {users.map((user) => {
                  return (
                    <option key={user.name} value={user.id}>{user.name}</option>
                  )
                })}
              </Form.Select>
              <Form.Label>Event</Form.Label>
              <Form.Select className='inputevent' name={"event_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                <option>Choose event</option>
                {events.map((event) => {
                  return (
                    <option key={event.name} value={event.id}>{event.name}</option>
                  )
                })}
              </Form.Select>
            </div>
          </Row>
          <div className='button-action'>
            <Button className='buttonOk' onClick={createAppoint} variant="primary">Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
}