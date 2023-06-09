import { useState } from "react";
import Modal from "./Modal"
import Button from "../../components/ui/Button";
import "../../stylesheets/Login.css"

function Login({onSubmit}) {
  const [status, setStatus] = useState("idle");

  function closeModal() {
    setStatus("idle");
  }

  return (
    <div className="unauthenticated-app">
      {status === "idle" ? (
        <div className="card">
          <div className="head">
            <h1>Open Book</h1>
          </div>
          <div className="buttons">
            <button onClick={() => setStatus("Login")}>Login</button>
            <button onClick={() => setStatus("Register")}>Register</button>
          </div>
          {/* El boton no agarra ni width, height, ni bgColor */}
          <Button width="150px" height="80px" bgColor="#ffeecc" innerText="Submit" type="submit"/>
        </div>
      ) : null}
      {status === "idle" ? null : <Modal btnText={status} close={closeModal} onSubmit={onSubmit}/>}
    </div>
  );
}

export default Login;