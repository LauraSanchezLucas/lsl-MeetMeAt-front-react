import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, useNavigate } from 'react-router-dom';
import { updateUserByAdmin } from '../../service/apiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../../layout/userSlice';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { InputComponent } from '../input/InputComponent';
import Col from 'react-bootstrap/esm/Col';


export const UpdateUserAdminM = ({show, handleClose}) => {

  const credentialsRdx = useSelector(userData);
  const navigate = useNavigate();

 const [credential, setCredential] = useState({
  id: credentialsRdx.credentials.user.userId,
  name: "",
  surname: "",
  email: "",
  phone: "",
  password: "",
  role_id:""
});

const updateUSerAdmin = () => {
  updateUserByAdmin (credential, credentialsRdx.credentials.token)
  .then(
      navigate('/login')
  )
  .catch(error => console.log(error))
};
    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                  <div>
                    <label>Name:</label>
                    <InputComponent
                    className={"inputlogin"}
                    type={"text"} 
                    name={"name"} 
                    placeholder={"enter new name"} 
                    // changeFunction ={(e)=>inputHandler(e)}
                    // blurFunction={(e) => checkError(e)}
                    />
                  </div>
                </Form>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={updateUSerAdmin}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }