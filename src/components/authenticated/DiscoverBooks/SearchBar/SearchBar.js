import { useRef } from "react";

function SearchBar(onSubmit) {

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputRef.current.value)
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
      </div>
    </div>
  );
}

export default SearchBar;
