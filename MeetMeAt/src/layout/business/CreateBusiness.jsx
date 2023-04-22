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
    notes: "",
    user_id: "", 
    specialty_id: ""
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
          navigate("/");
        }, 500);
    }) .catch(error => {setCredential(error.message)})
}



  
  return (
    <>
    <div>
      <Container>
          <Form> 
            <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>notes</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    type={"text"} 
                    name={"notes"} 
                    placeholder={"Enter place"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
              </Row>
              <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label variant='white'>User</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    required={true}
                    type={"text"} 
                    name={"user_id"}
                    placeholder={"Enter user"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Specialty</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    type={"text"} 
                    name={"specialty_id"} 
                    placeholder={"Enter description"} 
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