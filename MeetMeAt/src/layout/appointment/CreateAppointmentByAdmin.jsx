// import React, {useState, useEffect} from 'react'
// import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { userData } from '../userSlice';
// import { useNavigate } from 'react-router-dom';
// import { InputComponent } from '../../components/input/InputComponent';
// import { createAppointmentAdmin } from '../../service/apiCalls';


// export const CreateAppointmentByAdmin = () => {

//     const navigate = useNavigate();

//     const credentialsRdx = useSelector(userData);

//   const [credential, setCredential] = useState({
//     user_id: "", 
//     event_id: ""
//   });
//   console.log(credential,'siiiii')
//   const inputHandler = (e) => {
//     setCredential((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

  
//   const checkError = (e) => {};

//   const createAppointAdmin = (userId, eventId) => {
    
    
//         const appointmentData = {
//             user_id: userId,
//             event_id: eventId,
//         }
        
//         createAppointmentAdmin(appointmentData, credentialsRdx.credentials.token)
//         .then ( respuesta => { 
//             setCredential({
//                 ...credential,
//                 user_id: userId,
//                 event_id: eventId
//             })
//             setTimeout(() => {
//               navigate("/appointment");
//             }, 500);
//         }) .catch(error =>{
//             console.log(error)
//         })
    
//     }


  
//   return (
//     <>
//     <div className='main_register'>
//       <Container>
//           <Form className='formularioRegistro'>
//               <Row className="mb-3">
//                   <Form.Group as={Col} controlId="formGridEmail">
//                   <Form.Label variant='white'>User_id</Form.Label>
//                   <InputComponent
//                     className={"inputlogin"}
//                     required={true}
//                     type={"text"} 
//                     name={"user_id"}
//                     placeholder={"Enter name"} 
//                     changeFunction ={(e)=>inputHandler(e)}
//                     blurFunction={(e) => checkError(e)}
//                     />
//                   </Form.Group>
//                   <Form.Group as={Col} controlId="formGridSurname">
//                   <Form.Label>Event_id</Form.Label>
//                   <InputComponent
//                     className={"inputlogin"}
//                     type={"text"} 
//                     name={"event_id"} 
//                     placeholder={"Enter description"} 
//                     changeFunction ={(e)=>inputHandler(e)}
//                     blurFunction={(e) => checkError(e)}
//                     />
//                   </Form.Group>
//               </Row>
//               <div className="buttonRegister">
//               <Button
//         onClick={()=> createAppointmentAdmin(credential.user_id,credential.event_id)} variant="primary">
//       Book!
//       </Button>
//               </div>
//           </Form>
//       </Container>
//       </div>
//       </>
//   );
// }

import React, {useState, useEffect} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../../components/input/InputComponent';
import { createAppointmentAdmin } from '../../service/apiCalls';

export const CreateAppointmentByAdmin = () => {

    const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);

  const [credential, setCredential] = useState({
    user_id: "", 
    event_id: "",
   
  });
 
  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }; 
  
  console.log(credential,'siiiii')

  const checkError = (e) => {};


  const createAppoint = () => {
  
    createAppointmentAdmin(credential, credentialsRdx.credentials.token)
      
    .then ( respuesta => { 
      console.log(respuesta, 'hollllll')
        setCredential(respuesta.data)
        
        setTimeout(() => {
          navigate("/");
        }, 500);
    }) .catch(error => {
        setCredential(error.message)})
}



  
  return (
    <>
    <div className='main_register'>
      <Container>
          <Form className='formularioRegistro'>
              <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label variant='white'>User_id:</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    required={true}
                    type={"text"} 
                    name={"user_id"}
                    placeholder={"Enter name"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Event_id:</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    required={true}
                    type={"text"} 
                    name={"event_id"} 
                    placeholder={"Enter description"} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
                  </Form.Group>
              </Row>
              <div className="buttonRegister">
              <Button onClick={ createAppoint } variant="primary">Submit</Button>
              </div>
          </Form>
      </Container>
      </div>
      </>
  );
}