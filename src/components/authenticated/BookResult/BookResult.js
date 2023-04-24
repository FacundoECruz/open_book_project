import "./BookResult.css";
import { Link } from "react-router-dom";

function BookResult({ data }) {
  console.log(data.id);

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
    <Link to={`/book/${data.id}`} className="book-container">
      <img src={thumbnailUrl} alt="thumbnail" />
      {authors
        ? authors.map((a) => {
            return <p key={a}>{a}</p>;
          })
        : null}
      <p>{publishedDate}</p>
    </Link>
  );
}

export default BookResult;
