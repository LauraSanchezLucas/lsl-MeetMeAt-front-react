import Modal from 'react-bootstrap/Modal';
import { Register } from '../../layout/register/Register';
import Nav from 'react-bootstrap/Nav';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export const SingUpModal = () =>{
  const [show, setShow] = useState(false);
  const [ showBusinessModal, setShowBusinessModal] = useState (false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowBusinessModal = () => setShowBusinessModal (true);
  const handleCloseBusinessModal = () => setShowBusinessModal (false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uim9yke', 'template_i0091de', form.current, '84Qi_F-DIWGdD82Dt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <>
      <Nav.Link onClick={handleShow}>Sing Up!</Nav.Link>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton/>
        <Modal.Body>
          <Register/>
        </Modal.Body>
      <Modal.Footer>
      <Nav.Link onClick={handleShowBusinessModal}>Please press here if you are business!!!</Nav.Link>
      </Modal.Footer>
      </Modal>
      <Modal show={showBusinessModal} onHide={handleCloseBusinessModal} size='lg'>
      <Modal.Header closeButton/>
      <Modal.Body>
      <form ref={form} onSubmit={sendEmail} className='card-modal'>
        <label>Name</label>
        <input type="text" name="user_name" className='input-style'/>
        <label>Email</label>
        <input type="email" name="user_email" className='input-style'/>
        <label>Enter your business CIF</label>
        <textarea name="message" className='input-style'/>
        <input type="submit" value="Send" onClick={handleCloseBusinessModal} className='buttonOK input-modal-size'/>
      </form>
        </Modal.Body>
      </Modal>
    </>
  );
}