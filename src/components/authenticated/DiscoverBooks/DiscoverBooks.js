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
      <img src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg" alt="books"/>
      <div className="results">
        {data ? data.map((b, i) => {
          return <BookResult data={data[i]} key={i}/>
        }) : null}
        
      </div>
    </>
  );
}

export default DiscoverBooks;
