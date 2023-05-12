import React from 'react';
import { Badge, Card } from 'react-bootstrap';

export default function TodoDetails({ todo }) {
  console.log(todo.id);
  return (
    <>
      {todo.id ? <>
        <Card>
          <Card.Header>
            <Card.Title>{todo.title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <b>Description:</b> {todo.description} <br />
              <b>Status:</b> <Badge variant="primary" className='text-capitalize mt-2'>{todo.status}</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </> :
        <>
          <Card>
            <Card.Body>
              No todo has been selected !
            </Card.Body>
          </Card>
        </>
      }
    </>
  )
}
