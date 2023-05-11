import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Todo.css';
import AddTodoModal from './_partials/Modals/AddTodoModal';
import TodoDetails from './_partials/TodoDetails';
import TodoList from './_partials/TodoList';

export default function Todo() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <div className='todo'>
            <Container>
                <h1 className='mt-2'>Todo</h1>
                <div className='m-auto text-center'>
                    <Button onClick={handleShow} variant='success' className='mt-2 addBtn'>
                        Add Todo
                    </Button>
                </div>
                <hr />
                <Row>
                    <Col>
                        <h4>Todo List</h4>
                        <TodoList />
                    </Col>
                    <Col></Col>
                    <Col>
                        <h4>Todo Details</h4>
                        <TodoDetails />
                    </Col>
                </Row>
            </Container>
            <AddTodoModal show={show} handleClose={handleClose} />
        </div>
    )
}
