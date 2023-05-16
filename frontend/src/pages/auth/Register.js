import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import './Auth.css';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';


export default function Register() {

  const errorToast = (title) => {
    toast.error(title, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleInputFields = (event) => {
    const { name, value } = event.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirm_password) {
      errorToast('Password does not match!');
      return;
    }

    if (registerData.password.length < 5) {
      errorToast('Password must be at least 5 characters long!');
      return;
    }

    const newRegisterData = {
      username: registerData.username,
      email: registerData.email,
      password: registerData.password
    }


    axios.post('/user/create', newRegisterData)
      .then(res => {
        if(res.status === 200) {
          toast.success('Successfully registered!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          setTimeout(() => {
            window.location.href = '/user/login';
          }, 2000);
        }else{
          errorToast(res.data.message);
        }
      }).catch(err => {
        const response = err.response;
        errorToast(response.data.message);
      });


    

  }


  return (
    <div className='auth'>
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
                <MDBInput wrapperClass='mb-4' className='text-white' onChange={handleInputFields} label='Username' id='form1' type='text' name='username' />
                <MDBInput wrapperClass='mb-4' className='text-white' onChange={handleInputFields} label='Email address' id='form2' type='email' name='email' />
                <MDBInput wrapperClass='mb-4' className='text-white' onChange={handleInputFields} label='Password' id='form3' type='password' name='password' />
                <MDBInput wrapperClass='mb-4' className='text-white' onChange={handleInputFields} label='Confirm Password' id='form4' type='password' name='confirm_password' />
                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleSubmit}>Sign up</MDBBtn>
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
