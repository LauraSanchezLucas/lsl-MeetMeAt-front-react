import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { InputComponent } from '../../components/input/InputComponent';
import React, { useState, useEffect } from "react";
import { Helpers } from "../../helpers/Helpers";
import { logMe } from '../../service/apiCalls';
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../userSlice';
import './Login.css'

export const Login = () => {

    const navigate = useNavigate();

    //Instancio Redux en modo escritura
    const dispatch = useDispatch();

    // const [welcome, setWelcome] = useState("");

    //HOOK
    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });

    //HANDLERS

    const inputHandler = (e) => {
        setCredential((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }));
    };

    // Hook validation
    const [validationCredential, setValidationCredential] = useState({
        emailValidation: false,
        passwordValidation: false
    })
    // Hook error
    const [credentialError, setCredentialError] = useState({
        emailError: "",
        passwordError: "",
    });

    const [loginAct, setloginAct] = useState(false);


    //USEEFFECT

    //Este tipo de useEffect siempre se ejecuta cuando se actualice cualquier hook.....
    useEffect(() => {

        //Recorremos el primer for in para ver si hay errores en las credenciales....
        for (let error in credentialError) {
            if (credentialError[error] !== "") {
                setloginAct(false);
                return;
            }
        }
        //Recorremos las credenciales con otro for in para comprobar en este caso si algún campo se ha dejado por rellenar...
        for (let empty in credential) {
            if (credential[empty] === "") {
                setloginAct(false);
                return;
            }
        }

        //El último cortafuegos será un for in que recorrerá el hook validationCredential que mirará si todas las credential no sólo
        //están rellenas, sino que también han sido validadas
        for (let Helpers in validationCredential) {
            if (validationCredential[Helpers] === false) {
                setloginAct(false);
                return;
            }
        }
        //si llegamos a este punto es porque no hemos encontrado ningún error en el for in que recorre el hook de errores
        setloginAct(true);
    });

    //FUNCIONES
    //Funcion de validacion

    const checkError = (e) => {

        let error = "";

        let checked = Helpers(
            e.target.name,
            e.target.value,
            e.target.required
        );

        error = checked.message;

        setValidationCredential((prevState) => ({
            ...prevState,
            [e.target.name + "Validation"]: checked.Helpers,
        }));

        //Aqui seteamos el hook de los errores

        setCredentialError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };

    const logmee = () => {

        logMe(credential)
            .then(
                respuesta => {
                    let decoded = decodeToken(respuesta.data.token)
                    let dataBackend = {
                        token: respuesta.data.token,
                        user: decoded,
                        role: decoded.roleId
                    }
                    //Este es el momento en el que guardo en REDUX
                    dispatch(login({ credentials: dataBackend }));
                    // setWelcome(`Welcome back ${dataBackend.user.name}`)



                    setTimeout(() => {
                        navigate("/");
                    }, 800);
                }
            )
            .catch(error => console.log(error))
    };
    return (
        <>
                <div>
            <Container>
                <Form>
                    <h1>Login</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <InputComponent
                            className={"inputlogin"}
                            type={"email"}
                            name={'email'}
                            placeholder={"Enter your email"}
                            changeFunction={(e) => inputHandler(e)}
                            blurFunction={(e) => checkError(e)}
                        />
                        <div className='errorMessage'>{credentialError.emailError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <InputComponent
                            className={"inputlogin"}
                            type={"password"}
                            name={'password'}
                            placeholder={"Enter your password"}
                            changeFunction={(e) => inputHandler(e)}
                            blurFunction={(e) => checkError(e)}
                        />
                        <div className='errorMessage'>{credentialError.passwordError}</div>
                    </Form.Group>
                    <div className='loginOk'>
                    <Button onClick={loginAct ? () => { logmee(); } : () => { }} variant="primary" className='login-button' >Login</Button>
                    </div>
                </Form>
            </Container>
            </div>
        </>
                            
    );
    
}