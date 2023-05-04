import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../components/ui/Button";
import "../../stylesheets/Show.css";

function Show({ user }) {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        setBookData(data);
      })
      .catch((error) => console.error(error));
  }, [bookId]);

  if (!bookData) {
    return <div>Loading...</div>;
  }

  const {
    authors,
    categories,
    description,
    imageLinks,
    pageCount,
    previewLink,
    publishedDate,
    publisher,
    title,
    subtitle,
  } = bookData.volumeInfo;

  return (
    <div className="main-screen">
      <div className="header">
        <img src={imageLinks.thumbnail} alt="book-img" />
        <div className="info">
          <h1>{title}</h1>
          {authors
            ? authors.map((a) => {
                return <h3 key={a}>{a}</h3>;
              })
            : null}
          <br />
          <h4>
            {publisher}
            <span className="published-date">{publishedDate}</span>
          </h4>
          <br />
          <a href={previewLink}>
            <Button width="100px" height="30px" innerText="More" />
          </a>
        </div>
        <p className="description">{description}</p>
      </div>
      <div className="bookshelf-navigation">
        <a href="/">
        <Button
          width="100px"
          height="50px"
          innerText="Back to Explore"
          bgColor="grey"
        />
        </a>
        <form className="review">
          <div className="checkboxes">
            <input type="checkbox" value="1" />
            <input type="checkbox" value="2" />
            <input type="checkbox" value="3" />
            <input type="checkbox" value="4" />
            <input type="checkbox" value="5" />
          </div>
          <div className="textarea">
            <textarea />
          </div>
          <button type="sumbit">Submit</button>
        </form>
        <div className="bookshelf-buttons">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
}

export default Show;
