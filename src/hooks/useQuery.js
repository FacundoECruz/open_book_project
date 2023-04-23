import { useState, useEffect } from 'react';
import client from '../utils/api-client';

function useQuery() {

  const [data, setData] = useState(null);
  const [query, setQuery] = useState(null);
  const [queried, setQueried] = useState(false);
  const [status, setStatus] = useState("idle");

  const searchBook = (formData) => {
    setQuery(formData);
    setQueried(true);
  };

  useEffect(() => {
    if (!queried) {
      return;
    }
    setStatus("loading");
    client(query).then(res => {
      setData(res.items)
      setStatus("success")
    })
  }, [query, queried]);


  return {data, status, searchBook}
}

export default useQuery;