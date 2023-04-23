import "./App.css";
import { useState } from 'react';
import AuthenticatedApp from "./components/authenticated/AuthenticatedApp";
import UnauthenticatedApp from "./components/unauthenticated/UnauthenticatedApp";

function App() {

  const initialState = window.localStorage.getItem("user") || null;

  const [user, setUser] = useState(initialState)

  function handleUser({username, password}) {
    //Vamos a necesitar un servicio de autenticacion de usuarios
    window.localStorage.setItem("user", username)
    setUser(username)
  }

  function logout() {
    window.localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <div className="App">
        {user ? <AuthenticatedApp user={user} logout={logout}/> : <UnauthenticatedApp onSubmit={handleUser}/>}
    </div>
  );
}

export default App;
