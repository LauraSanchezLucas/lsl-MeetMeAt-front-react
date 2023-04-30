import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../userSlice';
import { deleteAppointmentUser, seeAppointment } from '../../../service/apiCalls';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Appointment.css'

export const SeeAllAppointment = () => {

    const credentialRdx = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
        if (appointments.length === 0) {
            seeAppointment(credentialRdx.credentials.token)
                .then(result => {
                    setAppointments(result.data.userAppointment)
                }
                )
                .catch(error => console.log(error));
        }
    }, [appointments])

    const selected = (appointment) => {
        deleteAppointmentUser(appointment.id, credentialRdx.credentials.token)
        setTimeout(() => {
            window.location.reload();
        }, 500)
    }

    return (
        <Row className='appointmentUserBackground'>
        <div className='appointments-container'>
            {appointments.length > 0 ?
                (<div>
                    {
                        appointments.map(appoint => {
                                return (
                                    <div
                                        key={appoint.id} className='appointment-box'>
                                        <ul>
                                            <strong>Event name:</strong> &nbsp; {appoint.Event.name} &nbsp;
                                            <strong>Date:</strong> &nbsp; {appoint.Event.date} &nbsp;
                                            <strong>Hour:</strong> &nbsp; {appoint.Event.hour} &nbsp;
                                        </ul>
                                            <Button className='buttonOk' onClick={() => selected(appoint)}>Cancel!</Button>
                                    </div>
                                )
                            }
                        )
                    }
                </div>)

                :

                (<div className='loading-message'>The fun is on its way-stay tuned!!!</div>)

            }

        </div>
        </Row>
    )
}

