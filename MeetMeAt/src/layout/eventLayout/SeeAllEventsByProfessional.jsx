import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import { deleteEventByProfessional, getAllEventsProfessional } from "../../service/apiCalls";
import { Button } from "react-bootstrap";


export const SeeAllEventsByProfessional = () => {

    const credentialRdx = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [events, setEvents] = useState([]);

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


    const selected = (event) => {
        //Primero guardo en RDX los datos escogidos...
        // dispatch(addChoosen({ choosenObject: appointment }))
        deleteEventByProfessional(event.id, credentialRdx.credentials.token)
        console.log(credentialRdx.credentials.token, 'yuuuuuuuu')
        setTimeout(()=>{
            navigate("/");
        },500)
    }
  return (
    <div>
    {events.length > 0 ? 

        (<div>
            {events.map(event => {
                return (
                    <div 
                    key={event.id}>
                        <ul>
                            <div><strong>{event.name}</strong></div>
                            <div>{event.description}</div>
                            <div><strong>Date:</strong>{event.date}</div>
                            <div><strong>Hour:</strong>{event.hour}</div>
                            <div><strong>Place:</strong>{event.place}</div>
                            <Button onClick={()=>selected(event)}>Cancel!</Button>
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