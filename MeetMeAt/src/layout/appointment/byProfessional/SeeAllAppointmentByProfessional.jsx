import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../userSlice";
import { addChoosen } from "../../detailSlice";
import { getAllAppointmentsProfessional } from "../../../service/apiCalls";
import "./SeeAllAppointmentByProfessional.css";


export const SeeAllAppointmentByProfessional = () => {

    const [appointments, setAppointments] = useState([]);

    const credentialRdx = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (appointments.length === 0) {
            getAllAppointmentsProfessional(credentialRdx.credentials.token)
                .then((result) => {
                    setAppointments(result.data.events);
                })
                .catch((error) => console.log(error));
        }
    }, [appointments]);

    const selected = (appointment) => {
        dispatch(addChoosen({ choosenObject: appointment }));
        setTimeout(() => {
            navigate("/");
        }, 500);
    };

    return (
        <div className="appointments-background">
            {appointments.length > 0 ? (
                <div className="card-center-appointProfessional">
                    {appointments.map((appointment) => {
                        return (
                            <div onClick={() => selected(appointment)}
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
