import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


import { toast, ToastContainer } from 'react-toastify';


export default function AddTodoModal({ show, handleClose }) {


  const [todo, setTodo] = useState({
    title: '',
    description: ''
  });



  // Method to handle input change
  const handleSetTodo = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value
    });
  };

  // Method to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: todo.title,
      description: todo.description
    }
    axios.post('/todo/create', newTodo)
      .then(res => {
        const { data, status } = res;
        if (status === 200) {
          handleClose();
          toast.success("Todo task has been successfully added !", {
            position: toast.POSITION.TOP_CENTER
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }).catch(err => {
        console.log(err);
      });
  };


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
              <Form.Control type="email" name="title" placeholder="name@example.com" onChange={handleSetTodo} value={todo.title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name='description' onChange={handleSetTodo} value={todo.description} />
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
