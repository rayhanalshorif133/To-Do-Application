import React from 'react'
import { Container } from 'react-bootstrap';
import './Register_Login.css';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';

export default function Login() {
  return (
    <div className='login'>
      <Container>
        <h1 className='mt-2'>Login</h1>
        <hr />
        <MDBContainer className="my-5 gradient-form w-40 h-auto">
          <MDBRow>
            <MDBCol col='6' className="mb-5">
              <div className="d-flex flex-column m-5">
                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{ width: '185px' }} alt="logo" />
                </div>
                <p>Please login to your account</p>
                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />
                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
                  <a className="forgotPass" href="#!">Forgot password?</a>
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
