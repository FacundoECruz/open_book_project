import { useParams } from "react-router-dom";
import BackToExplore from "../../components/BackToExplore";
import "../../stylesheets/Show.css";
import library from "../assets/library.jpg";

function Show({ user }) {
  const { bookId } = useParams();

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
  } = book.volumeInfo;

  return (
    <div className="main-screen">
      <div className="header">
        <img src={library} alt="" />
        <div className="info">
          <h1>{book.title}</h1>
          <h3>{book.authors}</h3>
          <br />
          <h4>
            {publisher}
            <span>{publishedDate}</span>
          </h4>
          <br />
          <a href="https://www.google.com/">
            <button>More</button>
          </a>
        </div>
        <h4 className="description">{book.description}</h4>
      </div>
      <div className="bookshelf-navigation">
        <BackToExplore />
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
