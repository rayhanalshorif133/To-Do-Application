import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function TodoCard() {
 return (
  <>
   <Card className='m-2'>
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
  </>
 )
}
