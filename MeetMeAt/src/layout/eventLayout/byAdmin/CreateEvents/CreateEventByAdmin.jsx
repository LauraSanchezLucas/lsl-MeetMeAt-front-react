import React, {useState, useEffect} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../../../userSlice';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../../../components/input/InputComponent';
import { createEvents, getAllBusinesses } from '../../../../service/apiCalls';
import './CreateEventByAdmin.css'

export const CreateEventByAdmin = () => {

    const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);
    const [businesses, setBusinesses] = useState([]);

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
   

    useEffect(() => {
        console.log(businesses, 'si')

        if (businesses.length === 0) {
            getAllBusinesses()
                .then((result) => {
                    console.log(result.data.business, 'yuhiu')
                    setBusinesses(result.data.business)
                }).catch((error) => console.log(error));
        }
    }, [businesses]);

  
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
    <div className='admin-main-create-event'>
          <Form>
              <Row className="mb-3">
              <div className='admin-create-event-card'>
              <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label variant='white'>Url Image</Form.Label>
                  <InputComponent
                    className={"inputevent"}
                    required={true}
                    type={"text"} 
                    name={"image"}
                    placeholder={"Enter URL image"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                    </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label variant='white'>Name</Form.Label>
                  <InputComponent
                    className={"inputevent"}
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
                    className={"inputevent"}
                    type={"text"} 
                    name={"description"} 
                    placeholder={"Enter description"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Place</Form.Label>
                  <InputComponent
                    className={"inputevent"}
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
                    className={"inputevent"}
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
                    className={"inputevent"}
                    type={"text"} 
                    name={"hour"} 
                    placeholder={"Enter hour"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
                  <Form.Label>Business:</Form.Label>
      <Form.Select name={"business_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose business:</option>
                                    {businesses.map((business) => {
                                        return (
                                            <option key={business.User.name} value={business.id}>{business.User.name}</option>
                                        )
                                    })}
                                </Form.Select>
               <div className='buton-position-event'>
              <Button onClick={ createEvent } variant="primary"  className='buttonOk'>Create!</Button>
              </div>
              </div>
              </Row>
          </Form>
      </div>
      </>
  );
}