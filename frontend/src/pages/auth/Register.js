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

export default function Register() {
  return (
    <div className='login'>
      <Container>
        <h1 className='mt-2'>
          Register
        </h1>
        <hr />
        <MDBContainer className="my-5 gradient-form w-40 h-auto">
          <MDBRow>
            <MDBCol col='6' className="mb-5">
              <div className="d-flex flex-column m-5 text-white">
                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{ width: '185px' }} alt="logo" />
                </div>
                <h4 className="text-center mb-4 text-white">
                Welcome!
                </h4>
                <p>
                  Please register to your account
                </p>
                {/* username */}
                <MDBInput wrapperClass='mb-4' className='text-white' label='Username' id='form1' type='text' name='username'/>
                <MDBInput wrapperClass='mb-4' className='text-white' label='Email address' id='form1' type='email' name='email'/>
                <MDBInput wrapperClass='mb-4' className='text-white' label='Password' id='form2' type='password' name='password'/>
                <MDBInput wrapperClass='mb-4' className='text-white' label='Confirm Password' id='form2' type='password' name='confirm_password'/>
                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign up</MDBBtn>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">
                  Already have an account?</p>
                  <MDBBtn outline className='mx-2 registerBtn'>
                    <Link to="/user/login" className="registerBtn">
                      Login
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
