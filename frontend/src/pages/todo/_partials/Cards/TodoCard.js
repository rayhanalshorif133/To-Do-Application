import React from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import './TodoCard.css'

export default function TodoCard({ index, title, description }) {
 return (
  <div className='todo_card'>
   <Card className='m-2 card'>
    <Card.Body>
     <Card.Title>
      <div className='d-flex justify-content-between'>
       <div>
        <h6>{index + 1}. {title}</h6>
       </div>
       <div>
        <ButtonGroup size="sm">
         <Button>Left</Button>
         <Button>Middle</Button>
         <Button>Right</Button>
        </ButtonGroup>
        <Button onClick={() => { }} variant='success' size='sm' className='me-2'>Done</Button>
       </div>
      </div>
     </Card.Title>
    </Card.Body>
   </Card>
  </div>
 )
}
