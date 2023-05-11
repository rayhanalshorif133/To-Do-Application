import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Routes from "./Routes";
import Header from "./components/Header";
function App() {
  return (
    <div className="main">
      <Header />
      <div className="content__body">
        <Routes />
      </div>
    </div>
  );
}

export default App;
