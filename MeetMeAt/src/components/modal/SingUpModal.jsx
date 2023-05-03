import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Register } from '../../layout/register/Register';
import Nav from 'react-bootstrap/Nav';
import { BusinessModal } from '../modal/BusinessModal';
import { Email } from '../../layout/email/email';



export const SingUpModal = () =>{
  const [show, setShow] = useState(false);
  const [ showBusinessModal, setShowBusinessModal] = useState (false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowBusinessModal = () => setShowBusinessModal (true);
  const handleCloseBusinessModal = () => setShowBusinessModal (false);
  return (
    <>
      <Nav.Link onClick={handleShow}>Sing Up!</Nav.Link>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton/>
        <Modal.Body>
          <Register/>
        </Modal.Body>
      <Modal.Footer>
      {/* <Nav.Link onClick={handleShow}><BusinessModal/></Nav.Link> */}
      <Nav.Link onClick={handleShowBusinessModal}>Please press here if you are business!!!</Nav.Link>
      </Modal.Footer>
      </Modal>
      <Modal show={showBusinessModal} onHide={handleCloseBusinessModal} size='lg'>
      <Modal.Header closeButton/>
      <Modal.Body>
          <Email/>
        </Modal.Body>
      </Modal>
    </>
  );
}