import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputComponent } from "../../components/input/InputComponent";
import React, { useState, useEffect } from "react";
import { Helpers } from "../../helpers/Helpers";
import { logMe } from "../../service/apiCalls";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import "./Login.css";

export const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });

    const inputHandler = (e) => {
        setCredential((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const [validationCredential, setValidationCredential] = useState({
        emailValidation: false,
        passwordValidation: false,
    });
    const [credentialError, setCredentialError] = useState({
        emailError: "",
        passwordError: "",
    });

    const [loginAct, setloginAct] = useState(false);

    useEffect(() => {
        for (let error in credentialError) {
            if (credentialError[error] !== "") {
                setloginAct(false);
                return;
            }
        }
        for (let empty in credential) {
            if (credential[empty] === "") {
                setloginAct(false);
                return;
            }
        }
        for (let Helpers in validationCredential) {
            if (validationCredential[Helpers] === false) {
                setloginAct(false);
                return;
            }
        }

        setloginAct(true);
    });

    const checkError = (e) => {
        let error = "";

        let checked = Helpers(e.target.name, e.target.value, e.target.required);

        error = checked.message;

        setValidationCredential((prevState) => ({
            ...prevState,
            [e.target.name + "Validation"]: checked.Helpers,
        }));

        setCredentialError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };

    const logmee = () => {
        logMe(credential)
            .then((respuesta) => {
                let decoded = decodeToken(respuesta.data.token);
                let dataBackend = {
                    token: respuesta.data.token,
                    user: decoded,
                    role: decoded.roleId,
                };
                dispatch(login({ credentials: dataBackend }));
                setTimeout(() => {
                    navigate("/");
                }, 800);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <div>
                <Form>
                    <h1>Login!</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <InputComponent
                            className={"input-style"}
                            type={"email"}
                            name={"email"}
                            maxLength={30}
                            placeholder={"Enter your email"}
                            changeFunction={(e) => inputHandler(e)}
                            blurFunction={(e) => checkError(e)}
                        />
                        <div className="errorMessage">{credentialError.emailError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <InputComponent
                            className={"input-style"}
                            type={"password"}
                            name={"password"}
                            maxLength={10}
                            placeholder={"Enter your password"}
                            changeFunction={(e) => inputHandler(e)}
                            blurFunction={(e) => checkError(e)}
                        />
                        <div className="error-message">{credentialError.passwordError}</div>
                    </Form.Group>
                    <div className="button-action">
                        <Button onClick={loginAct ? () => {logmee()}: () => {}}variant="primary" className="buttonOk"> Login</Button>
                    </div>
                </Form>
            </div>
        </>
    );
};
