import React, { useState, useEffect } from 'react';

const DataDashHome = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const abortCont = new AbortController() // for stop the fetch 
    fetch('http://localhost:3000/admin/dashboard',{ signal: abortCont.signal })
      .then(res => res.json())
      .then(json => {
        setData(json);
      });
      return () => abortCont.abort();
  }, ['http://localhost:3000/admin/dashboard']);

  return data ? data:{
    "data": {
        "visiteur": 0,
        "useresCount": 0,
        "filmCount": 0,
        "seriesCount": 0,
        "views": 0
    }
}

};

export default DataDashHome;