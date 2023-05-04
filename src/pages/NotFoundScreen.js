import "../stylesheets/NotFoundScreen.css"
import Button from "../components/ui/Button";

function NotFoundScreen() {
  return ( 
    <div className="not-found-container">
      <h2>Sorry... nothing here</h2>
      <a href="/">
        <Button width="100px" height="50px" bgColor="green" innerText="Back to Explore"/> 
      </a>
    </div>
   );
}

export default NotFoundScreen;