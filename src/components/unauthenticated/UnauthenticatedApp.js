import "./UnauthenticatedApp.css";
import Modal from "./Modal/Modal";

function UnauthenticatedApp() {
  return (
    <div className="unauthenticated-app">
      <div className="head">
        <h1>Open Book</h1>
      </div>
      <div className="buttons">
        <button>Login</button>
        <button>Register</button>
      </div> 
      <div className="modal"><Modal btnText="login"/></div> 
    </div>
  );
}

export default UnauthenticatedApp;
