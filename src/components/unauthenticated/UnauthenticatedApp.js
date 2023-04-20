import Modal from "./Modal/Modal";
import { useState } from "react";
import "./UnauthenticatedApp.css";

function UnauthenticatedApp() {

  const [status, setStatus] = useState("idle")

  console.log(status)

  return (
    <div className="unauthenticated-app">
      <div className="head">
        <h1>Open Book</h1>
      </div>
      <div className="buttons">
        <button onClick={() => setStatus("login")}>Login</button>
        <button onClick={() => setStatus("register")}>Register</button>
      </div> 
      <div className="modal"><Modal btnText={status}/></div> 
    </div>
  );
}

export default UnauthenticatedApp;
