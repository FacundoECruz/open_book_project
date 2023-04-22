import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

function cliente(query) {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
    )
    .then((res) => {
      console.log(res)
      return res.data.items})
    .catch((err) => {return err});
}

function client(query, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  return window
    .fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`, config)
    .then(response => response.json())
}

export default client;
