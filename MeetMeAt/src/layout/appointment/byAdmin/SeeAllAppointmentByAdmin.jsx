import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userSlice";
import { addChoosen } from '../../detailSlice';
import { deleteAppointmentById, getAllAppointmentsAdmin } from "../../../service/apiCalls";
import { Button, Card, Col, Row } from "react-bootstrap";
import { UpdateUserAdminM } from "../../../components/modal/UpdateUserAdminM";






export const SeeAllAppointmentByAdmin = () => {

    const [appointments, setAppointments] = useState([]);


    const credentialRdx = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (appointments.length === 0) {
            getAllAppointmentsAdmin(credentialRdx.credentials.token)
                .then(
                    result => {
                        console.log(result.data.userAppointment, 'tttttttt')
                        setAppointments(result.data.userAppointment)
                    }
                )
                .catch(error => console.log(error));
        }
        console.log(appointments, '9999')
    }, [appointments])

    const selected = (appointment) => {
        //Primero guardo en RDX los datos escogidos...
        // dispatch(addChoosen({ choosenObject: appointment }))
        deleteAppointmentById(appointment.id, credentialRdx.credentials.token)
        console.log(appointment.id, 'laura')
        setTimeout(() => {
            navigate("/");
        }, 500)
    }
    return (
        <div className='admin-background'>
            {appointments.length > 0 ?
                (<Row className='admin-card-main'>
                    {
                        appointments.map(appointment => {
                            return (
                                <div key={appointment.id} className='admin-card-event'>
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
                </Row>)

                :

                (<div className='iscoming'><p className='loading-message'>The fun is on its way-stay tuned!!!</p></div>)

            }
        </div>
    )
}


// return (
//     <div className='admin-background'>
//         <Row className='admin-card-main'>
//             {appointments.map((appointment) => (
//                 <Col key={appointment.id} lg={4} sm={4}>
//                     <Card className='admin-card-event'>
//                         <Card.Body>
//                             <Card.Title>{appointment.name}</Card.Title>
//                             <Card.Text><strong>Name:</strong> &nbsp; {appointment.User.name} &nbsp;</Card.Text>
//                             <Card.Text><strong>Event:</strong> &nbsp; {appointment.Event.name} &nbsp;</Card.Text>
//                             <Card.Text><strong>Date:</strong> &nbsp; {appointment.Event.date} &nbsp;</Card.Text>
//                       <Card.Text><strong>Business:</strong> &nbsp; {appointment.Event.business_id} &nbsp;</Card.Text>
//                             <Button className="buttonOk" onClick={() => selected(user)}>Cancel!</Button>
//                             <UpdateUserAdminM />
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             ))}
//         </Row>
//     </div>
// );
// }
