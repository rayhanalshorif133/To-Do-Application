import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Header from "./components/Header";
import GlobalVariableContextProvider from "./contextProvider/GlobalVariableContextProvider";
import { ToastContainer } from 'react-toastify';
import Routes from './Routes/Routes';


function App() {


  return (
    <div className="main">
      <Header />
      <div className="content__body">
        <GlobalVariableContextProvider>
          <Routes />
          <ToastContainer />
        </GlobalVariableContextProvider>
      </div>
    </div>
  );
}

export default App;
