import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  const searchBook = (e) => {
    e.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDnNOVRgJC2tsZKx45ZAdCKzd-_6zcmA7U`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  return (
    <div className="App">
      <div>
        <h1>Open Book</h1>
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
    </div>
  );
}

export default App;
