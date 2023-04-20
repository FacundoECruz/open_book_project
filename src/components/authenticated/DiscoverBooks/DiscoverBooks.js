import { useState, useRef } from "react";
import axios from "axios";

function DiscoverBooks() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const inputRef = useRef();

  const apiKey = process.env.REACT_APP_API_KEY;

  const searchBook = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="search-bar"></div>
      <div className="search-results"></div>
      <div>
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
    </>
  );
}

export default DiscoverBooks;
