import { useRef } from "react";
import "./SearchBar.css";

function SearchBar(onSubmit) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputRef.current.value);
  }

  return (
    <div className="search-bar">
      <h2>Find your book</h2>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            id="book-name"
            type="text"
            placeholder="Enter your book name"
            ref={inputRef}
          />
          <button>
            <i className="fa-solid fa-magnifying-glass" type="submit"></i>
          </button>
        </form>
        <img
          src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg"
          alt="books"
        />
      </div>
    </div>
  );
}

export default SearchBar;
