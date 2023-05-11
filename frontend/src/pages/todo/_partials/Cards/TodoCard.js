import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './TodoCard.css'

export default function TodoCard() {
 return (
  <div className='todo_card'>
   <Card className='m-2 card'>
    <Card.Body>
     <Card.Title>
      <div className='d-flex justify-content-between'>
       <div>
        <h6>Todo Title</h6>
       </div>
       <div>
        <Button onClick={() => { }} variant='success' size='sm' className='me-2'>Done</Button>
       </div>
      </div>
     </Card.Title>
    </Card.Body>
   </Card>
  </div>
 )
}
