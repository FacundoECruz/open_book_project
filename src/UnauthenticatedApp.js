import { useEffect } from 'react';

import Login from "./pages/Login/Login";
import "./stylesheets/UnauthenticatedApp.css";

function UnauthenticatedApp({ onSubmit }) {

  useEffect(() => {
    console.log("Rendering UnauthApp component")
  }, []);

  return(
    <Login onSubmit={onSubmit}/>
  )
}

export default UnauthenticatedApp;
