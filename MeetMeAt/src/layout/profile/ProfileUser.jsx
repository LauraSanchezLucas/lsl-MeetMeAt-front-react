import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { getUserProfile } from '../../service/apiCalls';
import { userData } from '../userSlice';
import './ProfileUser.css'


export const ProfileUser = () => {

    const credentialRdx = useSelector(userData);

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        if (user.name === "") {
            getUserProfile(credentialRdx?.credentials?.token)
                .then((result) => {
                    setUser({
                        name: result.data.user.name,
                        surname: result.data.user.surname,
                        email: result.data.user.email,
                        phone: result.data.user.phone
                    });
                })
                .catch((error) => console.log(error));
        }
    }, []);
    
    return (
        <>
            <div className='profile-background'>
                <Card className='profile-container'>
                    <Card.Body>
                        <Card.Title><strong>PROFILE:</strong></Card.Title>
                        <Card.Text><strong>Name:</strong> &nbsp;{user.name}</Card.Text>
                        <Card.Text><strong>Surname:</strong> &nbsp;{user.surname}  </Card.Text>
                        <Card.Text><strong>Email:</strong> &nbsp;{user.email} </Card.Text>
                        <Card.Text><strong>Phone:</strong> &nbsp; {user.phone}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
