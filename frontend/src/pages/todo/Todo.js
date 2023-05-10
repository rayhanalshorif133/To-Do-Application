import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Todo.css';
import TodoDetails from './_partials/TodoDetails';
import TodoList from './_partials/TodoList';

export default function Todo() {
 return (
  <>
   <Container>
    <h1 className='mt-2 todo_title'>Todo</h1>
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
  </>
 )
}
