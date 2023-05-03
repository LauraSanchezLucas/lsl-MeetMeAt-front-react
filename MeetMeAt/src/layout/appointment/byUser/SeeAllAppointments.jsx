import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../userSlice';
import { deleteAppointmentUser, seeAppointment } from '../../../service/apiCalls';
import { Button, Row } from 'react-bootstrap';
import './Appointment.css'

export const SeeAllAppointment = () => {

    const credentialRdx = useSelector(userData);


    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (appointments.length === 0) {
            seeAppointment(credentialRdx.credentials.token)
                .then(result => {
                    setAppointments(result.data.userAppointment)
                })
                .catch(error => console.log(error));
        }
    }, [appointments])

    const selected = (appointment) => {
        deleteAppointmentUser(appointment.id, credentialRdx.credentials.token)
        setTimeout(() => {
            window.location.reload();
        }, 500)
    };

    return (
        <div className='appointments-background'>
            <Row>
                {appointments.length > 0 ?
                    (<div className='card-center'>
                        {
                            appointments.map(appoint => {
                                return (
                                    <div key={appoint.id} className='appointment-box'>
                                        <ul>
                                            <strong>Event name:</strong> &nbsp; {appoint.Event.name} &nbsp;<br />
                                            <strong>Date:</strong> &nbsp; {appoint.Event.date} &nbsp;<br />
                                            <strong>Hour:</strong> &nbsp; {appoint.Event.hour} &nbsp;<br />
                                        </ul>
                                        <Button className='buttonOk' onClick={() => selected(appoint)}>Cancel!</Button>
                                    </div>
                                )
                            })
                        }
                    </div>)
                    :
                    (<div className='loading-message'><p>The fun is on its way-stay tuned!!!</p></div>)
                }
            </Row>
        </div>
    )
}

