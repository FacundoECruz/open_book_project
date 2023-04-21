import "./App.css";
import { useState } from 'react';

import AuthenticatedApp from "./components/authenticated/AuthenticatedApp";
import UnauthenticatedApp from "./components/unauthenticated/UnauthenticatedApp";

function App() {

  const [user, setUser] = useState(null)

  function handleUser({username, password}) {
    //Hay que ver como hacemos para autenticar y autorizar los 
    //usuarios. Buscar lo del alcance de Google
    window.localStorage.setItem('user', username)
  }

  return (
    <div className="App">
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp onSubmit={handleUser}/>}
    </div>
  );
}

export default App;
