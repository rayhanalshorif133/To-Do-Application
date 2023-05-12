import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
         <Button onClick={() => { }} variant="outline-primary" size='sm'>
          <FontAwesomeIcon icon={faCheck} />
         </Button>
         <Button onClick={() => { }} variant="outline-info" size='sm'>
          <FontAwesomeIcon icon={faPen} />
         </Button>
         <Button onClick={() => { }} variant="outline-danger" size='sm'>
          <FontAwesomeIcon icon={faTrash} />
         </Button>
        </ButtonGroup>
       </div>
      </div>
     </Card.Title>
    </Card.Body>
   </Card>
  </div>
 )
}
