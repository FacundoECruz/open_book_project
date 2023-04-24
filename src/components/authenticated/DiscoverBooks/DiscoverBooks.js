import SearchBar from "./SearchBar/SearchBar";
import BookResult from "../BookResult/BookResult";
import "./DiscoverBooks.css";
import useQuery from "../../../hooks/useQuery";

function DiscoverBooks({ user, logout }) {
  
  const {data, status, searchBook} = useQuery()

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
          ? data.map((b, i) => {
              return <BookResult data={data[i]} key={i} />;
            })
          : null}
      </div>
    </>
  );
}

export default DiscoverBooks;
