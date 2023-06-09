import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userSlice";
import { deleteUserByAdmin, getUser } from "../../../service/apiCalls";
import { Button, Card, Col, Row } from "react-bootstrap";
import { addChoosen } from "../../detailSlice";
import { UpdateUserAdminM } from '../../../components/modal/UpdateUserAdminM';
import './SeeAllUserByAdmin.css'
export const SeeAllUserByAdmin = () => {
    const credentialRdx = useSelector(userData);
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [searchName, setSearchName] = useState('');
    useEffect(() => {
        if (users.length === 0) {
            getUser(credentialRdx?.credentials?.token)
                .then((result) => {
                    setUsers(result.data.user);
                })
                .catch((error) => console.log(error));
        }
    }, [users]);
    const handleUserUpdate = () => {
        getUser(credentialRdx?.credentials?.token)
            .then((result) => {
                setUsers(result.data.user);
            })
            .catch((error) => console.log(error));
    };
    const findUsers = users.filter((usuario) => {
        return usuario.name.toLowerCase().includes(searchName.toLowerCase())
    });
    const selected = (user) => {
        deleteUserByAdmin(user.id, credentialRdx.credentials.token)
        setTimeout(() => {
            getUser(credentialRdx?.credentials?.token)
                .then(
                    result => {
                        setTimeout(() => {
                            setUsers(result.data.user)
                        }, 500)
                    }
                )
                .catch(error => console.log(error));
        }, 500);
    };
    const unSelected = (user) => {
        dispatch(addChoosen({ choosenObject: user }))
        console.log(user, "hopla soy user redux")
    }
    return (
        <div className='main-background'>
            <div className="search-bar">
                <input type="text" placeholder="Search By Name" onChange={(e) => setSearchName(e.target.value)} />
            </div>
            <Row className='card-main'>
                {findUsers.map((user) => (
                    <Col key={user.id} lg={4} sm={4}>
                        <div onClick={() => unSelected(user)} key={user.id}>
                            <Card className='card-style'>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text><strong>Email:</strong> &nbsp; {user?.email} &nbsp;</Card.Text>
                                    <Card.Text><strong>Phone:</strong> &nbsp; {user?.phone} &nbsp;</Card.Text>
                                    <Card.Text><strong>Role:</strong> &nbsp; {user?.Role?.name} &nbsp;</Card.Text>
                                    <Button className="buttonOk button-active-admin" onClick={() => selected(user)}>Cancel!</Button>
                                    <UpdateUserAdminM onUsersUpdate={handleUserUpdate} />
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}