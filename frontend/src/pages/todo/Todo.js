import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './Todo.css';
import LoadingTodoList from './_partials/LoadingTodoList';
import AddTodoModal from './_partials/Modals/AddTodoModal';
import TodoDetails from './_partials/TodoDetails';
import TodoList from './_partials/TodoList';

export default function Todo() {

    const [show, setShow] = useState(false);
    const [todoData, setTodoData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState({});
    const [timerFlag, setTimerFlag] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const BASEURL = process.env.REACT_APP_API_URL;

    const [todo, setTodo] = useState({
        title: '',
        description: ''
    });

    useEffect(() => {
        setTimeout(() => {
            setTimerFlag(true);
        }, 5000);
    }, []);


    // Method to handle input change
    const handleSetTodo = (event) => {
        const { name, value } = event.target;
        setTodo({
            ...todo,
            [name]: value
        });
    };


    // Method to handle form submit

    /*
    
    {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            }
    */

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            title: todo.title,
            description: todo.description
        }
        axios.post(`${BASEURL}/todo/create`, newTodo, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                const { status } = res;
                if (status === 200) {
                    const data = res.data;
                    handleClose();
                    const newMessage = res.data.message ? res.data.message : "Todo task has been successfully added !";
                    if (data.status) {
                        toast.success(newMessage, {
                            position: toast.POSITION.TOP_CENTER
                        });
                    } else {
                        toast.error(newMessage, {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }

                    fetchTodoData();
                }
            }).catch(err => {
                console.log(err);
            });
    };


    const fetchTodoData = async () => {
        await axios.get(`${BASEURL}/todo`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        }
        )
            .then(res => {
                if (res.status === 200) {
                    const { data } = res.data;
                    if (data.length > 0) {
                        setTodoData(data);
                    } else {
                        setTodoData([]);
                    }
                }
                setFlag(true);
            });
    };

    const fetchTodoDataById = async (id) => {
        await axios.get(`${BASEURL}/todo/${id}`)
            .then(res => {
                if (res.status === 200) {
                    const data = res.data;
                    if (data) {
                        setSelectedTodo({
                            id: data._id,
                            title: data.title,
                            description: data.description,
                            status: data.status,
                            date: data.date
                        });
                    }
                }
            });
    };


    useEffect(() => {
        fetchTodoData();
    }, [flag]);

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
                        {
                            todoData.length === 0 ? <>
                                {
                                    timerFlag ?
                                        <>
                                            <Alert variant="danger" className='text-center'>
                                                No Todo Found !
                                            </Alert>
                                        </>
                                        :
                                        <LoadingTodoList />
                                }
                            </>
                                :

                                <TodoList todoData={todoData} fetchTodoData={fetchTodoData}
                                    setSelectedTodo={fetchTodoDataById} />
                        }
                    </Col>
                    <Col></Col>
                    <Col>
                        <h4>Todo Details</h4>
                        <TodoDetails todo={selectedTodo} />
                    </Col>
                </Row>
            </Container>
            <AddTodoModal
                show={show}
                todo={todo}
                handleClose={handleClose}
                handleSetTodo={handleSetTodo}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}
