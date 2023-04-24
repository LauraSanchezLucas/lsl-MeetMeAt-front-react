import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import { getAllEventsProfessional } from "../../service/apiCalls";






export const SeeAllEventsByProfessional = () => {
    
    const [events, setEvents] = useState([]);

    const credentialRdx = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(events.length === 0){
            getAllEventsProfessional(credentialRdx.credentials.token)
            .then(
                result => {
                    console.log(result, 'tttttttt')
                    setEvents(result.data.event)
                    console.log(result.data.event, 'rrrrrrrr')
                }
            )
            .catch(error => console.log(error));
        }
        
    }, [events])
console.log(events, 'jjjjjjjj')
    const selected = (event) => {
        //Primero guardo en RDX los datos escogidos...

        dispatch(addChoosen({ choosenObject: event }))
        console.log(event, 'yuuuuuuuu')
        setTimeout(()=>{
            navigate("/");
        },500)
    }


    // const selected = (appointment) => {
    //     //Primero guardo en RDX los datos escogidos...
    //     // dispatch(addChoosen({ choosenObject: appointment }))
    //     deleteAppointmentUser(appointment.id, credentialRdx.credentials.token)
    //     console.log(appointment, 'yuuuuuuuu')
    //     setTimeout(()=>{
    //         navigate("/");
    //     },500)
    // }
  return (
    <div>
    {events.length > 0 ? 

        (<div>
            {events.map(event => {
                return (
                    <div onClick={()=>selected(event)} key={event.id}>
                        <ul>
                            <div><strong>{event.name}</strong></div>
                            <div>{event.description}</div>
                            <div><strong>Date:</strong>{event.date}</div>
                            <div><strong>Hour:</strong>{event.hour}</div>
                            <div><strong>Place:</strong>{event.place}</div>
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