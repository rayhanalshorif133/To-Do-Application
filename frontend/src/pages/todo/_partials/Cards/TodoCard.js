import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import './TodoCard.css'


export default function TodoCard({ index, id, title, description, fetchTodoData }) {



 const handleDeleteTodoBtn = (id) => {
  return () => {
   console.log(id);
   axios.delete(` http://localhost:3001/todo/${id}`)
    .then(res => {
     const { data, status } = res;
     if (status === 200) {
      fetchTodoData();
     }
    }).catch(err => {
     console.log(err);
    }
    );
  }
 };

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
         <Button onClick={handleDeleteTodoBtn(id)} variant="outline-danger" size='sm'>
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
