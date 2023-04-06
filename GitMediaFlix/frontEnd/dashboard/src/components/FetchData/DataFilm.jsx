import React, { useState, useEffect } from 'react';

const FetchDataComponent = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const abortCont = new AbortController() // for stop the fetch 
    fetch('http://localhost:3000/admin/AllFilms',{ signal: abortCont.signal })
      .then(res => res.json())
      .then(json => {
        setData(json);
      });
      return () => abortCont.abort();
  }, ['http://localhost:3000/admin/AllFilms']);

  return data;

};

export default FetchDataComponent;