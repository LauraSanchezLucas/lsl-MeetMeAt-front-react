import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Register } from '../../layout/register/Register';
import Nav from 'react-bootstrap/Nav';

export const SingUpModal = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Nav.Link onClick={handleShow}>Sing Up!</Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton/>
        <Modal.Body>
          <Register/>
        </Modal.Body>
      </Modal>
    </>
  );
}