import BookResult from "../../components/ui/BookResult";
import "../../stylesheets/Explore.css"

function Explore({ user, logout }) {
  
  

  return (
    <>
      <div className="header">
        <div className="page-presentation">
          <h1>Find your favorites books and keep track of them.</h1>
        </div>
      </div>
      <div className="results">
        {data
          ? <BookResult data={data} />
          : null}
      </div>
    </>
  );
}

export default Explore;
