import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UpdateUserByAdmin } from '../../layout/user/UpdateUserByAdmin/UpdateUserByAdmin';



export const UpdateUserAdminM = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className='buttonOk' variant="primary" onClick={handleShow}>
        Update User!
      </Button>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateUserByAdmin/>
        </Modal.Body>
      </Modal>
    </>
  );
}


