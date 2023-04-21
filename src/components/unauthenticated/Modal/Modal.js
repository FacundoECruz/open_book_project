import LoginForm from "../LoginForm/LoginForm";
import "./Modal.css"

function Modal({btnText, close}) {
  return ( 
    <div className="modal-container">
      <h2>{btnText}</h2>
      <button onClick={close} className="close-modal-btn">X</button>
      <LoginForm btnText={btnText}/>
    </div>
   );
}

export default Modal;