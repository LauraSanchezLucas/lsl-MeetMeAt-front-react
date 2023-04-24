import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import { deleteUserByAdmin, getAllUsers } from "../../service/apiCalls";
import { Button } from "react-bootstrap";

export const SeeAllUserByAdmin = () => {
    
    const [users, setUsers] = useState([]);

    const credentialRdx = useSelector(userData);
    const navigate = useNavigate();

    const dispatch = useDispatch();


    useEffect(()=>{
        if(users.length === 0){
            getAllUsers(credentialRdx.credentials.token)
            .then(
                result => {
                    console.log(result.data.user, 'tttttttt')
                    setUsers(result.data.user)
                }
            )
            .catch(error => console.log(error));
        }
        console.log(users)
    }, [users])

    const selected = (user) => {
        //Primero guardo en RDX los datos escogidos...
        // dispatch(addChoosen({ choosenObject: appointment }))
        deleteUserByAdmin(user.id, credentialRdx.credentials.token)
        console.log(user.id,'laura')
        setTimeout(()=>{
            navigate("/");
        },500)
    }
  return (
    <div>
    {  users.length > 0 ? 

        (<div>
            {
                users.map(
                    user => {
                        return (
                            <div key={user.id}>
                                    <ul>
                            <strong>Name:</strong> &nbsp; {user.name} &nbsp;
                            <strong>Surname:</strong> &nbsp; {user.surname} &nbsp;
                            <strong>Email:</strong> &nbsp; {user.email} &nbsp;
                            <strong>Phone:</strong> &nbsp; {user.phone} &nbsp;
                            <strong>Role:</strong> &nbsp; {user.role_id} &nbsp;
                            <Button onClick={()=>selected(user)}>Cancel!</Button>
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