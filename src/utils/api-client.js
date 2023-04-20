import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

function client(query) {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
    )
    .then((res) => {return res.data.items})
    .catch((err) => {return err});
}

export default client;
