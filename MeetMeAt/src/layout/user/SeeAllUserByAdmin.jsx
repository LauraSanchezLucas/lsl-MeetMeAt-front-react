import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { deleteUserByAdmin, getAllUsers } from "../../service/apiCalls";
import { Button } from "react-bootstrap";
import { UpdateUserAdminM } from "../../components/modal/UpdateUserAdminM";

export const SeeAllUserByAdmin = () => {

    const navigate = useNavigate();

    const credentialRdx = useSelector(userData);

    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();


    useEffect(() => {
        if (users.length === 0) {
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
        deleteUserByAdmin(user.id, credentialRdx.credentials.token)
        console.log(user.id, 'laura')
        window.location.reload(true);
    }

    return (
        <>
            <div>
                {users.length > 0 ?

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
                                                <Button onClick={() => selected(user)}>Cancel!</Button>
                                                <button className='btn btn-outline-success' type='submit' onClick={handleShow}>Update event</button>
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
                <UpdateUserAdminM show={show} handleClose={handleClose} />
            </div>
        </>
    )
}
