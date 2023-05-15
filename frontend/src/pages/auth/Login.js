import axios from 'axios';
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function Login() {

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setLoginInfo(
      {
        ...loginInfo,
        [name]: value
      });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/user/login', loginInfo)
      .then(res => {
        console.log(res.data);
      });
  }



  return (
    <div className='auth'>
      <Container>
        <h1 className='mt-2'>Login</h1>
        <hr />
        <MDBContainer className="my-5 gradient-form w-40 h-auto">
          <MDBRow>
            <MDBCol col='6' className="mb-5">
              <div className="d-flex flex-column m-5">
                <div className="text-center">
                  <img src="/assets/images/todo_logo.png"
                    style={{ width: '185px' }} alt="logo" />
                </div>
                <p>Please login to your account</p>
                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={handleLogin} name="email" />
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={handleLogin} name="password" />
                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleSubmit}>Sign in</MDBBtn>
                  <Link to="/user/forgot" className="forgotPass">
                    Forgot password?
                  </Link>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">Don't have an account?</p>
                  <MDBBtn outline className='mx-2 registerBtn'>
                    <Link to="/user/register" className="registerBtn">
                      Register
                    </Link>
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Container>
    </div>
  )
}
