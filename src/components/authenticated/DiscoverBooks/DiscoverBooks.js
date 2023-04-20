import { useState, useRef } from "react";
import client from "../../../utils/api-client";
import PagePresentation from "./PagePresentation/PagePresentation";
import SearchBar from "./SearchBar/SearchBar";
import BookResult from "../BookResult/BookResult";
import "./DiscoverBooks.css"
import {books} from "../../../utils/fake-search-results"

function DiscoverBooks() {
  const [data, setData] = useState(books);

  const searchBook = (formData) => {
    client(formData).then((data) => setData(data));
  };

  return (
    <>
      <PagePresentation />
      <SearchBar onSubmit={searchBook}/>
      <div className="results">
        {/* Here we need map to call a component for each book */}
        <BookResult />
      </div>
    </>
  );
}

export default DiscoverBooks;
