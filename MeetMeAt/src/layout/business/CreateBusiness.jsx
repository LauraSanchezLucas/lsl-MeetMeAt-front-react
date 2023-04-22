import React, {useState, useEffect} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../components/input/InputComponent';
import { createBusinesses } from '../../service/apiCalls';

export const CreateBusiness = () => {

    const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);

  const [credential, setCredential] = useState({
    user_id: "",
    specialty_id: "",
    name: "", 
    email: "", 
    phone: "", 
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



  
  return (
    <>
    <div >
      <Container>
          <Form>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label variant='white'>User</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    required={true}
                    type={"text"} 
                    name={"name"}
                    placeholder={"Enter name"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label variant='white'>Name</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    required={true}
                    type={"text"} 
                    name={"name"}
                    placeholder={"Enter name"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Email</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    type={"email"} 
                    name={"email"} 
                    placeholder={"Enter description"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
              </Row>
              <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Phone</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    type={"text"} 
                    name={"phone"} 
                    placeholder={"Enter place"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>notes</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    type={"text"} 
                    name={"notes"} 
                    placeholder={"Enter date"} 
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