import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userSlice";
import { deleteUserByAdmin, getAllUsers } from "../../../service/apiCalls";
import { Button, Card, Col, Row } from "react-bootstrap";
import { addChoosen } from "../../detailSlice";
import { UpdateUserAdminM } from '../../../components/modal/UpdateUserAdminM';
import './SeeAllUsersByAdmin.css';



export const SeeAllUserByAdmin = () => {

    const navigate = useNavigate();

    const credentialRdx = useSelector(userData);

    const [users, setUsers] = useState([]);
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
        console.log(users ,'9999')
    }, [users])

    const selected = (user) => {
        deleteUserByAdmin(user.id, credentialRdx.credentials.token)
        window.location.reload(true);
    }
    const unSelected = (user) => {
        dispatch( addChoosen ({ choosenObject: user }))
    
    }

//     return (
//         <>
//           <div className='admin-background'>
//                 {users.length > 0 ?

//                     (<Row className='admin-card-main'>
//                         {
//                             users.map(
//                                 user => {
//                                     return (
//                                         <div onClick={() => unSelected(user)} key={user.id}>
//                                             <Card className='admin-card-event'>
//                                                 <strong>Name:</strong> &nbsp; {user?.name} &nbsp;
//                                                 <strong>Surname:</strong> &nbsp; {user?.surname} &nbsp;
//                                                 <strong>Email:</strong> &nbsp; {user?.email} &nbsp;
//                                                 <strong>Phone:</strong> &nbsp; {user?.phone} &nbsp;
//                                                 <strong>Role:</strong> &nbsp; {user?.role_id} &nbsp;
//                                                 <Button onClick={() => selected(user)}>Cancel!</Button>
//                                                 {/* <button className='btn btn-outline-success' type='submit' onClick={UpdateUserAdminM}>Update event</button> */}
//                                                 <UpdateUserAdminM />
//                                                 </Card>
//                                         </div>
//                                     )
//                                 }
//                             )
//                         }
//                     </Row>)

//                     :

//                     (<div className='iscoming'><p className='loading-message'>The fun is on its way-stay tuned!!!</p></div>)

//                 }
//                 {/* <UpdateUserAdminM /> */}
//             </div>
//         </>
//     )
// }
return (
    <div className='admin-background'>
        <Row className='admin-card-main'>
            {users.map((user) => (
                <Col key={user.id} lg={4} sm={4}>
                    <Card className='admin-card-event'>
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text><strong>Surname:</strong> &nbsp; {user?.surname} &nbsp;</Card.Text>
                            <Card.Text><strong>Email:</strong> &nbsp; {user?.email} &nbsp;</Card.Text>
                            <Card.Text><strong>Phone:</strong> &nbsp; {user?.phone} &nbsp;</Card.Text>
                            <Card.Text><strong>Role:</strong> &nbsp; {user?.Role.name} &nbsp;</Card.Text>
                            <Button className="buttonOk" onClick={() => selected(user)}>Cancel!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
);
}