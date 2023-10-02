import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormUpdate from './FormUpdate';

const ModalUpdate = ({show, handleClose, datoCurso, getCourses}) => {
  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Curso</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormUpdate datoCurso={datoCurso} getCourses={getCourses} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>    
  </>
  )
}

export default ModalUpdate