import "./BookResult.css";

function BookResult({ data }) {
  console.log(data);

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
    <div className="book-container">
      <img src={thumbnailUrl} alt="thumbnail" />
      {authors.map(a => {
        return <p>{a}</p>
      })}
      <p>{publishedDate}</p>
    </div>
  );
}

export default BookResult;
