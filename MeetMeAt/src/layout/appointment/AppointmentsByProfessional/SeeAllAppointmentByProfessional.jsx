import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userSlice";
import { addChoosen } from '../../detailSlice';
import { getAllAppointmentsProfessional } from "../../../service/apiCalls";
import './SeeAllAppointmentByProfessional.css'
import { Row } from "react-bootstrap";




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
    <Row className='appointment-background'>
    <div className='appointments-container'>
    {appointments.length > 0 ? 

        (<div>
            {appointments.map(appointment => {
                return (
                    <div onClick={()=>selected(appointment)} key={appointment.id} className='appointment-box'>
                        <ul>
                            <div>{appointment.date}</div>
                            <div><strong>{appointment.name}</strong></div>
                            <div> 
                                {appointment.Appointments?.map((user) =>{
                                            return(
                                                <div key= {user.id}>
                                                    <ul>
                                                        <div>{user.name}</div>
                                                        <div>
                                                        <strong>Name:</strong> {user.User.name} &nbsp;
                                                        <strong>Surname:</strong> {user.User.surname}&nbsp;
                                                        <strong>Email:</strong> {user.User.email}&nbsp;
                                                        <strong>Phone:</strong> {user.User.phone}&nbsp;
                                                        </div>
                                                    </ul>
                                                    </div>
                                            )
                                        })}</div>
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
</Row>
)
}