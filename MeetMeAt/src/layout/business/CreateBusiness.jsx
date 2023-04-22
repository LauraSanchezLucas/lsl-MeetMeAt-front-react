import React, {useState, useEffect} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../components/input/InputComponent';
import { createBusinesses, getAllUsers } from '../../service/apiCalls';

export const CreateBusiness = () => {

    const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);

    const [users, setUsers] = useState([]);
    console.log(users, 'sii')
  const [credential, setCredential] = useState({
    user_id: "",
    specialty_id: "", 
    notes:"",
  });

  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const checkError = (e) => {};

  const createBusiness = () => {
    
    createBusinesses(credential, credentialsRdx.credentials.token)
    .then ( respuesta => { 
        setCredential(respuesta.data)
        setTimeout(() => {
          navigate("/business");
        }, 500);
    }) .catch(error => {setCredential(error.message)})
}


useEffect(() => {

        getAllUsers()
            .then((result) => { 
                console.log(users, 'nooo')
                setUsers(result.data)
            }).catch((error) => console.log(error));
    }, [users]);

  return (
    <>
    <div >
      <Container>
          <Form>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                  {/* <Form.Label variant='white'>User</Form.Label> */}
                  {/* <InputComponent
                    className={"inputlogin"}
                    required={true}
                    type={"text"} 
                    name={"name"}
                    placeholder={"Enter name"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    /> */}
                    <Form.Select name={"user_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose your User:</option>
                                    {users.map((user) => {
                                        return (
                                            <option key={user.id} value={user.id}>{user.name}</option>
                                        )
                                    })}
                                </Form.Select>
                  </Form.Group>
              </Row>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label variant='white'>Specialty</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    required={true}
                    type={"text"} 
                    name={"specialty"}
                    placeholder={"Enter name"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
              </Row>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label variant='white'>Notes:</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    required={true}
                    type={"text"} 
                    name={"notes"}
                    placeholder={"Enter name"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
              </Row>
              <div className="buttonRegister">
              <Button onClick={ createBusiness } variant="primary">Submit</Button>
              </div>
          </Form>
      </Container>
      </div>
      </>
  );
}