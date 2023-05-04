import "../../stylesheets/BookResult.css";
import { Link } from "react-router-dom";

function BookResult({ data }) {
  return data.map((item) => {
    let thumbnail =
      item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
    if (thumbnail !== undefined && amount !== undefined) {
      return (
        <Link to={`/book/${item.id}`} className="book-container" key={item.id}>
          <img src={thumbnail} alt="thumbnail" />
          <div className="bottom">
            <h3 className="title">{item.volumeInfo.title}</h3>
            <p className="amount">&#8377;{amount}</p>
          </div>
        </Link>
      );
    }
  });
}

export default BookResult;
