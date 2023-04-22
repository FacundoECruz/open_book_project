const apiKey = process.env.REACT_APP_API_KEY;

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
