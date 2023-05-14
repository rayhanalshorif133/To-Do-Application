import React, { useEffect, useState } from 'react'
import { Button, Modal ,Form} from 'react-bootstrap'
import axios from 'axios';

export default function UpdateTodoModal(props) {

    const { showEditModel, handleClose,editTodoFetch,fetchTodoData } = props;

    const [todo, setTodo] = useState({
        id: "",
        updateTitle: "",
        updateDescription: "",
    });

    const handleSetTodo = (e) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/todo/update', todo)
            .then(res => {
                console.log(res);
                fetchTodoData();
            }).catch(err => {
                console.log(err);
            });
        handleClose();
    }

    useEffect(() => {
        // is editTodoFetch is not empty
        if(Object.keys(editTodoFetch).length > 0) {
            setTodo({
                id: editTodoFetch.id,
                updateTitle: editTodoFetch.title,
                updateDescription: editTodoFetch.description,
            });
        }
    }, [Object.keys(editTodoFetch).length > 0]);


  return (
    <>
        <Modal show={showEditModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update Todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="email" name="updateTitle" placeholder="Todo's Title" onChange={handleSetTodo} value={todo.updateTitle} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="updateDescription" placeholder="Todo's Description" onChange={handleSetTodo} value={todo.updateDescription} />
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
