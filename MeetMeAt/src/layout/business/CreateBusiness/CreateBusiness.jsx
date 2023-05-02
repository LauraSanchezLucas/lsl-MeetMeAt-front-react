import React, {useState, useEffect} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../../userSlice';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../../components/input/InputComponent';
import { createBusinesses } from '../../../service/apiCalls';
import './CreateBusiness.css'


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
    <h5 className='role-h5'>Create Business!</h5>
    <div className='admin-main-create-business'>
          <Form> 
            <Row className="mb-3">
            <div className='admin-create-business-card'>
                  <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Notes</Form.Label>
                  <InputComponent
                    className={"inputevent"}
                    type={"text"} 
                    name={"notes"} 
                    placeholder={"Enter place"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label variant='white'>User</Form.Label>
                  <InputComponent
                    className={"inputevent"}
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
                    className={"inputevent"}
                    type={"text"} 
                    name={"specialty_id"} 
                    placeholder={"Enter description"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
                  </div>
              </Row>
             
              <div className='buton-position-event'>
              <Button className='buttonOk' onClick={ createBusiness } variant="primary">Submit</Button>
              </div>
          </Form>
      </div>
      </>
  );
}