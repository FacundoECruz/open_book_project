import "./App.css";
import { useState } from 'react';

import AuthenticatedApp from "./components/authenticated/AuthenticatedApp";
import UnauthenticatedApp from "./components/unauthenticated/UnauthenticatedApp";

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <div>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </div>
  );
}

export default App;
