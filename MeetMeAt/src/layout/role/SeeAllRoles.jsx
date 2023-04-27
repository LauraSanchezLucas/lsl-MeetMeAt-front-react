import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { getAllRoles } from "../../service/apiCalls";


export const SeeAllRoles = () => {

    const [roles, setRoles] = useState([]);
    const credentialRdx = useSelector(userData);


    const dispatch = useDispatch();
    // const navigate = useNavigate();


    useEffect(() => {
        if (roles.length === 0) {
            getAllRoles(credentialRdx.credentials.token)
                .then(
                    result => {
                        console.log(result.data.role, 'tttttttt')
                        setRoles(result.data.role)
                    }
                )
                .catch(error => console.log(error));
        }
        console.log(roles)
    }, [roles])

    // const selected = (rol) => {
    //     //Primero guardo en RDX los datos escogidos...

    //     // dispatch(addChoosen({ choosenObject: rol }))
    //     console.log(rol, 'yuuuuuuuu')
    //     setTimeout(() => {
    //         navigate("/");
    //     }, 500)
    // }

   
    return (
        <>
        <div>
            {roles.length > 0 ?

                (<div>
                    {
                        roles.map(
                            rol => {
                                return (
                                    <div
                                        // onClick={() => selected(rol)}
                                        key={rol.id}>
                                        {rol.name}
                                        
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
            
    </>
    )
        }
       