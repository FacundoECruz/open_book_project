import { useState, useRef } from "react";
import client from "../../../utils/api-client";
import SearchBar from "./SearchBar/SearchBar";
import BookResult from "../BookResult/BookResult";
import "./DiscoverBooks.css";
import { books } from "../../../utils/fake-search-results";

function DiscoverBooks({user, logout}) {
  const [data, setData] = useState(books);

  const searchBook = (formData) => {
    client(formData).then((data) => setData(data));
  };

  return (
    <>
      <div className="header">
        <div className="page-presentation">
          <h1>Find your favorites books and keep track of them.</h1>
        </div>
          <SearchBar onSubmit={searchBook} user={user} logout={logout}/>
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
