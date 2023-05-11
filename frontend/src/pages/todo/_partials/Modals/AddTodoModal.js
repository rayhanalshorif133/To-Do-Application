import React, { useEffect, useState } from 'react'
import { Form,Modal, Button } from 'react-bootstrap'
import axios from 'axios';

export default function AddTodoModal({ show, handleClose }) {

  const [todo, setTodo] = useState({
    title: '',
    description: ''
  });



  // UseEffect to handle input change
  useEffect(() => {
    // const data = fetch('/todo')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   });

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
      const { data,status } = res;
      if(status === 200){
        console.log(data);
        handleClose();
      }
    }).catch(err => {
      console.log(err);
    });
  };


  return (
    <>
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
              <Form.Control type="email" name="title" placeholder="name@example.com" onChange={handleSetTodo} value={todo.title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name='description' onChange={handleSetTodo} value={todo.description}/>
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
