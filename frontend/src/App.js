import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Routes from './Routes/Routes';
import Header from "./components/Header";
import CheckLoginContextProvider from "./contextProvider/CheckLoginContextProvider";
import GlobalVariableContextProvider from "./contextProvider/GlobalVariableContextProvider";


function App() {


  return (
    <div className="main">
      <Header />
      <div className="content__body">
        <CheckLoginContextProvider>
          <GlobalVariableContextProvider>
            <Routes />
            <ToastContainer />
          </GlobalVariableContextProvider>
        </CheckLoginContextProvider>
      </div>
    </div>
  );
}

export default App;
