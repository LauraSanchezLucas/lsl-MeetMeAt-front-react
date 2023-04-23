import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { deleteAppointmentUser, seeAppointment } from '../../service/apiCalls';
import { addChoosen } from '../detailSlice';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const SeeAllAppointment = () => {

    const credentialRdx = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);

    
    useEffect(() => {
        if(appointments.length === 0){
            seeAppointment(credentialRdx.credentials.token)
            .then( result => {
                    // console.log(result.data.userAppointment, 'tttttttt')
                    setAppointments(result.data.userAppointment)
                }
            )
            .catch(error => console.log(error));
        }
    }, [appointments])

    const selected = (appointment) => {
        //Primero guardo en RDX los datos escogidos...
        // dispatch(addChoosen({ choosenObject: appointment }))
        deleteAppointmentUser(appointment.id, credentialRdx.credentials.token)
        console.log(appointment, 'yuuuuuuuu')
        setTimeout(()=>{
            navigate("/");
        },500)
    }

  return (
    <div>
    {  appointments.length > 0 ? 
        (<div>
            {
            appointments.map(
                appoint => {
                    return (
                        // console.log(appoint, 'cucu'),
                        <div
                            key={appoint.id}>
                            <ul>
                            <strong>Event name:</strong> &nbsp; {appoint.Event.name} &nbsp;
                            <strong>Date:</strong> &nbsp; {appoint.Event.date} &nbsp;
                            <strong>Hour:</strong> &nbsp; {appoint.Event.hour} &nbsp;
                                <Button onClick={()=>selected(appoint)}>Cancel!</Button>
                            </ul>
                        </div>
                    )
                }
            )
        }
        </div>)

        : 

        (<div>ESTAN VINIENDO</div>)

    }

 </div>
)
}

