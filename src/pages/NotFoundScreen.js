import BackToExplore from "../components/ui/BackToExplore";
import "../stylesheets/NotFoundScreen.css"

function NotFoundScreen() {
  return ( 
    <div className="not-found-container">
      <h2>Sorry... nothing here</h2>
      <BackToExplore />
    </div>
   );
}

export default NotFoundScreen;