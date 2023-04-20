import { useState, useRef } from "react";
import client from "../../../utils/api-client";
import BookResult from "../BookResult/BookResult";

function DiscoverBooks() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const inputRef = useRef();

  const searchBook = (e) => {
    e.preventDefault();
    client(search).then((data) => setData(data));
  };

  return (
    <>
      <div className="page-presentation">
        <h1>Open Book</h1>
      </div>
      <div className="search-bar">
        <h2>Find your book</h2>
        <div className="search">
          <form onSubmit={searchBook}>
            <input
              id="book-name"
              type="text"
              placeholder="Enter your book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              ref={inputRef}
            />
            <button>
              <i className="fa-solid fa-magnifying-glass" type="submit"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="results">
        <BookResult />
      </div>
    </>
  );
}

export default DiscoverBooks;
