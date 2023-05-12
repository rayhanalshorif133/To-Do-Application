import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'
import './TodoCard.css'

export default function TodoCard(props) {

  const { index, id, title, fetchTodoData, setSelectedTodo } = props;


  const handleDeleteTodoBtn = (id) => {
    return () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(` http://localhost:3001/todo/${id}`)
            .then(res => {
              const { status } = res;
              if (status === 200) {
                fetchTodoData();
              }
            }).catch(err => {
              console.log(err);
            }
            );
        }
      })
    }
  };


  return (
    <div className='todo_card'>
      <Card body className='card_body' onClick={() => { setSelectedTodo(id) }}>
        <div className='d-flex justify-content-between'>
          <div className='mt-2'>
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
      </Card>;
      {/* <Card className='m-2 card'>
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
      </Card> */}
    </div>
  )
}
