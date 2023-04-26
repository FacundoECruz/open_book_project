import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthenticatedApp from "./components/authenticated/AuthenticatedApp";
import UnauthenticatedApp from "./components/unauthenticated/UnauthenticatedApp";

function App() {
  const [user, setUser] = useState(
    () => window.localStorage.getItem("user") || null
  );

  function handleUser({ username, password }) {
    //Vamos a necesitar un servicio de autenticacion de usuarios
    window.localStorage.setItem("user", username);
    setUser(username);
  }

  function logout() {
    window.localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <div className="App">
      {user ? (
        <Router>
          <AuthenticatedApp user={user} logout={logout} />
        </Router>
      ) : (
        <UnauthenticatedApp onSubmit={handleUser} />
      )}
    </div>
  );
}

export default App;
