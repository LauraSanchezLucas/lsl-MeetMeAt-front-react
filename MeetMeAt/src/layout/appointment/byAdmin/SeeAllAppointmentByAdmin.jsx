import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userSlice";
import { addChoosen } from '../../detailSlice';
import { deleteAppointmentById, getAllAppointmentsAdmin } from "../../../service/apiCalls";
import { Button } from "react-bootstrap";






export const SeeAllAppointmentByAdmin = () => {
    
    const [appointments, setAppointments] = useState([]);
  

    const credentialRdx = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(()=>{
        if(appointments.length === 0){
            getAllAppointmentsAdmin(credentialRdx.credentials.token)
            .then(
                result => {
                    console.log(result.data.userAppointment, 'tttttttt')
                    setAppointments(result.data.userAppointment)
                }
            )
            .catch(error => console.log(error));
        }
        console.log(appointments)
    }, [appointments])

    const selected = (appointment) => {
        //Primero guardo en RDX los datos escogidos...
        // dispatch(addChoosen({ choosenObject: appointment }))
        deleteAppointmentById(appointment.id, credentialRdx.credentials.token)
        console.log(appointment.id,'laura')
        setTimeout(()=>{
            navigate("/");
        },500)
    }
  return (
    <div>
    {appointments.length > 0 ? 

        (<div>
            {
                appointments.map(
                    appointment => {
                        return (
                            <div key={appointment.id}>
                                    <ul>
                            <strong>Name:</strong> &nbsp; {appointment.User.name} &nbsp;
                            <strong>Event:</strong> &nbsp; {appointment.Event.name} &nbsp;
                            <strong>Date:</strong> &nbsp; {appointment.Event.date} &nbsp;
                            <strong>Business:</strong> &nbsp; {appointment.Event.business_id} &nbsp;
                            <Button onClick={()=>selected(appointment)}>Cancel!</Button>
                            </ul>
                            </div>
                        )
                    }
                )
            }
        </div>)

        : 

        (<div className='iscoming'><p className='loading-message'>The fun is on its way-stay tuned!!!</p></div>)

    }
 </div>
)
}