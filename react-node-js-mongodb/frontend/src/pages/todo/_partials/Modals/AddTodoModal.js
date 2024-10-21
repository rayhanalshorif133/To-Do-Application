import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


import { ToastContainer } from 'react-toastify';


export default function AddTodoModal({ show, handleClose, handleSetTodo, handleSubmit, todo }) {


  return (
    <>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add New Todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="email" name="title" placeholder="Todo's Title" onChange={handleSetTodo} value={todo.title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" placeholder="Todo's Description" onChange={handleSetTodo} value={todo.description} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
