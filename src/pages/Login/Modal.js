import LoginForm from "./LoginForm";
import "../../stylesheets/Modal.css";

function Modal({ btnText, close, onSubmit }) {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>{btnText}</h2>
        <button onClick={close} className="close-modal-btn">
          X
        </button>
      </div>
      <LoginForm btnText={btnText} onSubmit={onSubmit} />
    </div>
  );
}

export default Modal;
