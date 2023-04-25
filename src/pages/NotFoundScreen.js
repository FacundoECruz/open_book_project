import BackToExplore from "../components/BackToExplore";
import "./NotFoundScreen.css"

function NotFoundScreen() {
  return ( 
    <div className="not-found-container">
      <h2>Sorry... nothing here</h2>
      <BackToExplore />
    </div>
   );
}

export default NotFoundScreen;