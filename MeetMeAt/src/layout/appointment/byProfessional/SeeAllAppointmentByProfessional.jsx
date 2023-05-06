import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../userSlice";
import { getAllAppointmentsProfessional } from "../../../service/apiCalls";
import "./SeeAllAppointmentByProfessional.css";


export const SeeAllAppointmentByProfessional = () => {

    const [appointments, setAppointments] = useState([]);

    const credentialRdx = useSelector(userData);


    useEffect(() => {
        if (appointments.length === 0) {
            getAllAppointmentsProfessional(credentialRdx.credentials.token)
                .then((result) => {
                    setAppointments(result.data.events);
                })
                .catch((error) => console.log(error));
        }
    }, [appointments]);


    return (
        <div className="appointments-background">
            {appointments.length > 0 ? (
                <div className="card-center-appointProfessional">
                    {appointments.map((appointment) => {
                        return (
                            <div
                                key={appointment.id}
                                className="appointment-box">
                                <ul>
                                    <div>{appointment.date}</div>
                                    <div>
                                        <strong>{appointment.name}</strong>
                                    </div>
                                    <div>
                                        {appointment.Appointments?.map((user) => {
                                            return (
                                                <div key={user.id}>
                                                    <ul>
                                                        <div>{user.name}</div>
                                                        <div>
                                                            <strong>Name:</strong> {user.User.name} &nbsp;
                                                            <strong>Surname:</strong> {user.User.surname}
                                                            &nbsp;
                                                            <strong>Email:</strong> {user.User.email}&nbsp;
                                                            <strong>Phone:</strong> {user.User.phone}&nbsp;
                                                        </div>
                                                    </ul>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            ) : (
                (<div className='loading-message'><p>The fun is on its way-stay tuned!!!</p></div>)
            )}
        </div>
    );
};
