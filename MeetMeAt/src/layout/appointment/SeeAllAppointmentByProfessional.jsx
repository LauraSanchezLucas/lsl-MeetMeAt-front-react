import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import { getAllAppointmentsProfessional } from "../../service/apiCalls";





export const SeeAllAppointmentByProfessional = () => {
    
    const [appointments, setAppointments] = useState([]);

    const credentialRdx = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(appointments.length === 0){
            getAllAppointmentsProfessional(credentialRdx.credentials.token)
            .then(
                result => {
                    console.log(result, 'tttttttt')
                    setAppointments(result.data.events)
                    console.log(result.data.events, 'rrrrrrrr')
                }
            )
            .catch(error => console.log(error));
        }
        
    }, [appointments])
console.log(appointments, 'jjjjjjjj')
    const selected = (appointment) => {
        //Primero guardo en RDX los datos escogidos...

        dispatch(addChoosen({ choosenObject: appointment }))
        console.log(appointment, 'yuuuuuuuu')
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
                            <div 
                                onClick={()=>selected(appointment)} 
                                key={appointment.id}>
                                    <ul>
                                        <div>{appointment.date}</div>
                                        <div>Client name: {appointment.User.map((user) =>{
                                            return(
                                                <div key= {user.id}>
                                                    <ul>
                                                        <div>Name:{user.name}</div>
                                                    </ul>
                                                    </div>
                                            )
                                        })}</div>
                            {/* <strong>Event:</strong> &nbsp; {appointment.name} &nbsp; */}
                            {/* <strong>Date:</strong> &nbsp; {appointment.date} &nbsp;
                            <strong>User name:</strong> &nbsp; {appointment.Appointments.User.name} &nbsp; */}
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