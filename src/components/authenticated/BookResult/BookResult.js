import "./BookResult.css";
import {Routes, Route, Link} from "react-router-dom"

function BookResult({ data }) {

  console.log(data.id)

  const {
    authors,
    categories,
    description,
    imageLinks,
    publishedDate,
    publisher,
    subtitle,
    title,
  } = data.volumeInfo;

  const thumbnailUrl = imageLinks.smallThumbnail;

  return (
    //this div should be a Link
    <div className="book-container">
      <img src={thumbnailUrl} alt="thumbnail" />
      {authors ? authors.map(a => {
        return <p key={a}>{a}</p>
      }): null}
      <p>{publishedDate}</p>
    </div>
  );
}

export default BookResult;
