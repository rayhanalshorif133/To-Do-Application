import React from "react";
import Routes from "./Routes";
import Header from "./components/Header";
import "./App.css";
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
