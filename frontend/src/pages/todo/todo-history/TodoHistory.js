import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './TodoHistory.css';

export default function TodoHistory() {


  const [todoData, setTodoData] = useState([]);

  const BASEAPIURL = process.env.REACT_APP_API_URL;

  const headers = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
  }


  const fetchTodoHistoryData = async () => {
    console.log(todoData.length);
    await axios.get(`${BASEAPIURL}/todo/history`, headers)
      .then(res => {
        const { status, data } = res;
        console.log(res);
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
                        <tr key={index}>
                          <td>{index + 1}</td>
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
