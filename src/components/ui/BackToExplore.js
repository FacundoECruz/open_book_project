import { Link } from "react-router-dom";
import "../../stylesheets/BackToExplore.css"

function BackToExplore() {
  return (
    <div className="back-to-explore-container">
      <Link to={"/"}>Back to explore</Link>
    </div>
  );
}

export default BackToExplore;
