import "./BookResult.css"

function BookResult({data}) {

  const {title, author, year, description} = data

  return (
    <div className="book-container">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{year}</p>
      <p>{description}</p>
    </div>
  );
}

export default BookResult;
