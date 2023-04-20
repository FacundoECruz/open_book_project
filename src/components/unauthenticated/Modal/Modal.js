import LoginForm from "../LoginForm/LoginForm";
import "./Modal.css"

function Modal({btnText}) {
  return ( 
    <div className="modal-container">
      <h2>{btnText}</h2>
      <button className="close-modal-btn">X</button>
      <LoginForm btnText={btnText}/>
    </div>
   );
}

export default Modal;