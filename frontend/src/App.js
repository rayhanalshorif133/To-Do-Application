import React from "react";
import { isExpired } from "react-jwt";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Routes from './Routes/Routes';
import Header from "./components/Header";
import CheckLoginContextProvider from "./contextProvider/CheckLoginContextProvider";
function App() {
  

  var token = sessionStorage.getItem('token');
  if (token) {
    const isMyTokenExpired = isExpired(token);
    if (isMyTokenExpired) {
      toast.info("Your session has expired. Please login again.", {
        position: toast.POSITION.TOP_CENTER
      });
      setTimeout(() => {
        sessionStorage.removeItem('token');
        window.location.href = '/user/login';
      }, 3000);
    }
  }


  return (
    <div className="main">
      <Header />
      <div className="content__body">
        <CheckLoginContextProvider>
            <Routes />
            <ToastContainer />
        </CheckLoginContextProvider>
      </div>
    </div>
  );
}

export default App;
