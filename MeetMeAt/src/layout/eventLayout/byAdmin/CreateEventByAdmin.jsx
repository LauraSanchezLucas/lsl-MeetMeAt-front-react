import React, {useState, useEffect} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../../userSlice';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../../components/input/InputComponent';
import { createEvents } from '../../../service/apiCalls';

export const CreateEventByAdmin = () => {

    const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);

  const [credential, setCredential] = useState({
    name: "", 
    description: "", 
    place: "", 
    date:"",
    hour:"",
    business_id:""
  });
  console.log(credential,'siiiii')
  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  
  const checkError = (e) => {};

  const createEvent = () => {
    
    createEvents(credential, credentialsRdx.credentials.token)
    .then ( respuesta => { 
      console.log( 'hollllll')
        setCredential(respuesta.data)
        
        setTimeout(() => {
          navigate("/all/events");
        }, 500);
    }) .catch(error => {setCredential(error.message)})
}



  
  return (
    <>
    <div className='main_register'>
      <Container>
          <Form className='formularioRegistro'>
              <Row className="mb-3">
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
                  <Form.Label>Description</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    type={"text"} 
                    name={"description"} 
                    placeholder={"Enter description"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
              </Row>
              <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Place</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    type={"text"} 
                    name={"place"} 
                    placeholder={"Enter place"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Date</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    type={"text"} 
                    name={"date"} 
                    placeholder={"Enter date"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formPasswordZip">
                  <Form.Label>Hour</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    type={"text"} 
                    name={"hour"} 
                    placeholder={"Enter hour"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
              </Row>
              <Form.Group as={Col} controlId="formPasswordZip">
                  <Form.Label>Business</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    type={"text"} 
                    name={"business_id"} 
                    placeholder={"Enter business"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
              <div className="buttonRegister">
              <Button onClick={ createEvent } variant="primary">Submit</Button>
              </div>
          </Form>
      </Container>
      </div>
      </>
  );
}