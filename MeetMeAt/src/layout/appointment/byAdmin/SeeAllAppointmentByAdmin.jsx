import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userSlice";
import { deleteAppointmentById, getAllAppointmentsAdmin } from "../../../service/apiCalls";
import { Row } from "react-bootstrap";

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
                        setAppointments(result.data.userAppointment)
                    }
                )
                .catch(error => console.log(error));
        }
    }, [appointments])

    const selected = (appointment) => {
        deleteAppointmentById(appointment.id, credentialRdx.credentials.token)
        setTimeout(() => {
            navigate("/");
        }, 500)
    };

    return (
        <div className='main-background'>
            {appointments.length > 0 ?
                (<Row className='card-center-appointProfessional'>
                    {
                        appointments.map(appointment => {
                            return (
                                <div key={appointment.id} className='appointment-box'>
                                    <ul>
                                        <div>{appointment.date}</div>
                                        <div><strong>{appointment.name}</strong></div>
                                        <div>
                                            {appointment.Appointments?.map((user) => {
                                                return (
                                                    <div key={user.id}>
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
                (<div className='loading-message'><p>The fun is on its way-stay tuned!!!</p></div>)
            }
        </div>
    )
}


