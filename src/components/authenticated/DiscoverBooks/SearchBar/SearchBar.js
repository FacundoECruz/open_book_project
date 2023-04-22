import { useRef } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit, user, logout, status }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputRef.current.value);
  }

  return (
    <div className="search-bar">
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
      <div className="search-header">
        <h2>Find your book {user}</h2>
      </div>
      <div className="search">
        <form className="search-form-container" onSubmit={handleSubmit}>
          <input
            id="book-name"
            type="text"
            placeholder="Enter your book name"
            ref={inputRef}
          />
          {status === "loading" ? (
            <p>Loading...</p>
          ) : (
            <button>
              <i className="fa-solid fa-magnifying-glass" type="submit"></i>
            </button>
          )}
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
