import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Routes from "./Routes";
import Header from "./components/Header";
import GlobalVariableContextProvider from "./contextProvider/GlobalVariableContextProvider";


function App() {
  return (
    <div className="main">
      <Header />
      <div className="content__body">
        <GlobalVariableContextProvider>
          <Routes />
        </GlobalVariableContextProvider>
      </div>
    </div>
  );
}

export default App;
