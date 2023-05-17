import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'
import './TodoCard.css'
import { toast } from 'react-toastify'
import UpdateTodoModal from '../Modals/UpdateTodoModal'

export default function TodoCard(props) {

  const BASEURL  = process.env.REACT_APP_API_URL;

  const { index, id, title, fetchTodoData, setSelectedTodo } = props;

  const [showEditModel, setShowEditModel] = useState(false);
  const [editTodoFetch, setEditTodoFetch] = useState({});

  const handleClose = () => setShowEditModel(false);


  const handleCheckTodoBtn = (id) => {
    axios.put(BASEURL + 'todo/check/' + id)
      .then(res => {
        const { status } = res;
        if (status === 200) {
          toast.info("Todo is successfully done...!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
          fetchTodoData();
        }
      }).catch(err => {
        console.log(err);
      }
      );
    // check
  };
  const handleEditTodoBtn = async (id) => {
    await axios.get(`http://localhost:3001/todo/${id}`)
            .then(res => {
                if (res.status === 200) {
                    const data = res.data;
                    if (data) {
                      setEditTodoFetch({
                            id: data._id,
                            title: data.title,
                            description: data.description,
                        });
                        setShowEditModel(true);
                    }
                }
            });
  };

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
                toast.warning("Todo is successfully deleted...!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
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
              <Button onClick={() => { handleCheckTodoBtn(id) }} variant="outline-primary" size='sm'>
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              <Button onClick={() => { handleEditTodoBtn(id) }} variant="outline-info" size='sm'>
                <FontAwesomeIcon icon={faPen} />
              </Button>
              <Button onClick={handleDeleteTodoBtn(id)} variant="outline-danger" size='sm'>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>;
      <UpdateTodoModal 
        showEditModel={showEditModel} 
        editTodoFetch={editTodoFetch}
        handleClose={handleClose} 
        fetchTodoData={fetchTodoData}
        />
    </div>
  )
}
