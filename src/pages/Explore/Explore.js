import SearchBar from "./SearchBar/SearchBar";
import BookResult from "../BookResult/BookResult";
import "../../stylesheets/Explore.css"

function Explore({ user, logout }) {
  
  return (
    <>
      <div className="header">
        <div className="page-presentation">
          <h1>Find your favorites books and keep track of them.</h1>
        </div>
        <SearchBar
          onSubmit={searchBook}
          user={user}
          logout={logout}
          status={status}
        />
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
