import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { seeAppointment } from '../../service/apiCalls';

export const SeeAllAppointment = () => {

    const credentialRdx = useSelector(userData)

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
                            onClick={()=>selected(appoint)}
                            key={appoint.id}>
                            <ul>
                            <strong>Event name:</strong> &nbsp; {appoint.Event.name} &nbsp;
                            <strong>Date:</strong> &nbsp; {appoint.Event.date} &nbsp;
                            <strong>Hour:</strong> &nbsp; {appoint.Event.hour} &nbsp;
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

