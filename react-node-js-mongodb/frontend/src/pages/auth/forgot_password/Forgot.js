import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../Auth.css';
import SendEmail from './SendEmail';
import NewPassword from './NewPassword';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Forgot() {

  const BASEURL = process.env.REACT_APP_API_URL;
  const [email, setEmail] = React.useState('');
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [newPassword, setNewPassword] = React.useState({
    password: '',
    password_confirm: ''
  });

  const handleEmail = (e) => {
    const { name, value } = e.target;
    setEmail({
      ...email,
      [name]: value
    });
  }

  const handlePassword = (event) => {
    const { name, value } = event.target;
    setNewPassword({
      ...newPassword,
      [name]: value
    });
  }

  const handleEmailSend = () => {
    var url = BASEURL + 'user/forgot/check-email/';
    axios.post(url, {email})
    .then(res => {
      const {message,status} = res.data;
      if(status){
        toast.success(message,{
          position: toast.POSITION.TOP_RIGHT
        });
        setTimeout(() => {
          toast.info("Set New Password 😊",{
            position: toast.POSITION.TOP_CENTER
          });
        }, 500);
        setTimeout(() => {
          setIsSendEmail(true);
        }, 1000);
      }else{
        toast.error(message,{
          position: toast.POSITION.TOP_RIGHT
        });
      }
    });
  }
  
  const handleSendNewPassword = () => {
    var url = BASEURL + 'user/forgot/new-password/';
    if(newPassword.password !== newPassword.password_confirm){
      toast.error("Password not match",{
        position: toast.POSITION.TOP_RIGHT
      });
    }else{
      axios.post(url, {email:email.email, password: newPassword.password})
      .then(res => {
        const {message,status} = res.data;
        console.log(res.data);
        if(status){
          toast.success(message,{
            position: toast.POSITION.TOP_RIGHT
          });
          setTimeout(() => {
            toast.info("Login Now 😊",{
              position: toast.POSITION.TOP_CENTER
            });
          }, 500);
          setTimeout(() => {
            window.location.href = '/user/login';
          }, 1000);
        }else{
          toast.error(message,{
            position: toast.POSITION.TOP_RIGHT
          });
        }
      });
    }
    setIsSendEmail(true);
  }

  const handleBackBtn = () => {
    setIsSendEmail(false);
  }


  return (
    <div className='auth'>
      <Container>
        <h1 className='mt-2'>Forgot Password</h1>
        <hr />
        {isSendEmail? <NewPassword handlePassword={handlePassword} handleSendNewPassword={handleSendNewPassword} handleBackBtn={handleBackBtn}/> : <SendEmail handleEmail={handleEmail} handleEmailSend={handleEmailSend}/>}
      </Container>
    </div>
  )
}
