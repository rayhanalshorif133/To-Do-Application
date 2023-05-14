import React, { useEffect, useState } from 'react'
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TodoHistory.css';
import axios from 'axios';
import moment from 'moment';

export default function TodoHistory() {


  const [todoData, setTodoData] = useState([]);


  const fetchTodoHistoryData = async () => {
    await axios.get('http://localhost:3001/todo/history')
      .then(res => {
        const { status, data } = res;
        if (status === 200) {
          setTodoData(data.data);
          console.log(data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchTodoHistoryData();
  }, []);

  return (
    <>
      <div className='todo'>
        <Container>
          <h1 className='mt-2'>Todo History</h1>
          <hr />
          <Table striped bordered hover size="sm" className='bg-white text-center'>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
            {
                todoData.length === 0 ? <>
                  <tr>
                    <td colSpan='5'>No Todo Found</td>
                  </tr>
                </> :
                <>
                {todoData.map((todo, index) => {
                  return (
                    <tr>
                      <td>{index+1}</td>
                      <td>{todo.title}</td>
                      <td>{todo.description}</td>
                      <td>{todo.status}</td>
                      <td>
                        {moment(todo.date).format('LLL')}
                      </td>
                    </tr>
                  );
                })}
                </>
            }
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  )
}
