import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./BookScreen.css";

function BookScreen({ data }) {
  const { bookId } = useParams();
  // Encontrar el libro que necesitamos con el bookId
  // El siguiente objeto es para probar los estilos
  const book = {
    title: "Asesinato en el Orient Express",
    author: ["Agatha Christie"],
    publishedAt: "25/06/1934", //Guarda que por ahi esto es la fecha de publicacion en la api de google
    categories: ["mystery", "detective"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore pariatur voluptatum dolore. Cumque provident doloremque cum consequuntur, alias omnis autem consectetur sed voluptatibus quibusdam reprehenderit obcaecati beatae magni excepturi?",
    image: "urlDeLaImagen",
  };

  return (
    <>
      <div className="main-screen">
        <div className="book-header">
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </div>
        <div className="book-info">
          <p>{book.publishedAt}</p>
          <div className="book-categories">
            {book.categories.map((c) => {
              return <p>{c}</p>;
            })}
          </div>
        </div>
        <div className="book-description">
          <p>{book.description}</p>
        </div>
        {/* <div className="book-image">
            <img src="../assets/library.jpg" alt="library" />
          </div> */}
      </div>
      <div className="bookshelf-navigation">
        <div className="back-to-explore-container">
          <Link to={'/'}>Back to explore</Link>
        </div>
        <form className="review">
          <div className="checkboxes">
            <input type="checkbox" value="1"/>
            <input type="checkbox" value="2"/>
            <input type="checkbox" value="3"/>
            <input type="checkbox" value="4"/>
            <input type="checkbox" value="5"/>
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
    </>
  );
}

export default BookScreen;
