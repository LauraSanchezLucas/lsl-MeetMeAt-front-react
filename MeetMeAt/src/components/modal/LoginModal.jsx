import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Login } from '../../layout/login/Login';
import Nav from 'react-bootstrap/Nav';


export const LoginModal = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Nav.Link onClick={handleShow}>
      <i className="bi bi-person-circle"></i>
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton/>
        <Modal.Body>
          <Login/>
        </Modal.Body>
      </Modal>
    </>
  );
}

