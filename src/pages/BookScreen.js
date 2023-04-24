import { useParams } from "react-router-dom";

function BookScreen() {
  const { bookId } = useParams();

  return <h1>Book Screen {bookId}</h1>;
}

export default BookScreen;
