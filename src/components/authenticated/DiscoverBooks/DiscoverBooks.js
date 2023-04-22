import { useState, useEffect } from "react";
import client from "../../../utils/api-client";
import SearchBar from "./SearchBar/SearchBar";
import BookResult from "../BookResult/BookResult";
import "./DiscoverBooks.css";
import { books } from "../../../utils/fake-search-results";

function DiscoverBooks({ user, logout }) {
  const [data, setData] = useState(books);
  const [query, setQuery] = useState(null);
  const [queried, setQueried] = useState(false);
  const [status, setStatus] = useState("idle");

  const searchBook = (formData) => {
    setQuery(formData);
    setQueried(true);
  };

  useEffect(() => {
    if (!queried) {
      return;
    }
    setStatus("loading");
    client(query).then(res => {
      console.log(res.items)
      setData(res.items)
      setStatus("success")
    })
  }, [query, queried]);

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
