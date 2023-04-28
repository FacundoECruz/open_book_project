import Login from "./pages/Login/Login";
import "./stylesheets/UnauthenticatedApp.css";

function UnauthenticatedApp({ onSubmit }) {

  return(
    <Login onSubmit={onSubmit}/>
  )
}

export default UnauthenticatedApp;
