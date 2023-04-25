import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { InputComponent } from '../input/InputComponent';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helpers } from '../../helpers/Helpers'
import { useSelector } from 'react-redux'
import { updateRoleByAdmin } from '../../service/apiCalls'
import { userData } from '../../layout/userSlice';


function UpdateRoleAdminModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const credentialsRdx = useSelector(userData);
    const navigate = useNavigate();

  //HOOK
  const [credential, setCredential] = useState({
    name: ""
});
const [validationCredential, setValidationCredential] = useState({
  nameValidation: false,
})
const [credentialError, setCredentialError] = useState({
  nameError: "",
});

const [registerAct, setRegisterAct] = useState(false);

  // HANDLERS

  const inputHandler = (e) => {
    setCredential((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }));
  };
  
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

          setCredentialError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
          }));
          };

          const updateRole = () => {
              updateRoleByAdmin (credential, credentialsRdx.credentials.token)
              console.log(credentialsRdx.credentials.token, 'ttttttt')
              .then(
                  navigate('/role')
              )
              .catch(error => console.log(error))
            };


  useEffect(() => {

for(let error in credentialError){
  if(credentialError[error] !== ""){
    setRegisterAct(false);
    return;
  }
}
for(let empty in credential){
  if(credential[empty] === ""){
    setRegisterAct(false);
    return;
  }
}
    for(let Helpers in validationCredential){

      if(validationCredential[Helpers] === false){
        setRegisterAct(false);
        return;
      }
    }
setRegisterAct(true);
  });

    



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
                  <InputComponent
                    className={"inputlogin"}
                    required={true}
                    type={"text"} 
                    name={"name"}
                    placeholder={'hola'} 
                    changeFunction ={(e)=>inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                    />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateRole}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<UpdateRoleAdminModal />);