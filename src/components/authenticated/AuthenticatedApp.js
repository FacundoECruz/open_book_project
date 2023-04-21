import DiscoverBooks from "./DiscoverBooks/DiscoverBooks";
import "./AuthenticatedApp.css"

function AuthenticatedApp({user, logout}) {
  return (
    <div className="authenticated-app">
      <DiscoverBooks user={user} logout={logout}/>
    </div>
  );
}

export default AuthenticatedApp;
