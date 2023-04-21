import DiscoverBooks from "./DiscoverBooks/DiscoverBooks";
import "./AuthenticatedApp.css"

function AuthenticatedApp({user}) {
  return (
    <div className="authenticated-app">
      <DiscoverBooks user={user}/>
    </div>
  );
}

export default AuthenticatedApp;
