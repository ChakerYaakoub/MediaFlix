import React, { useEffect } from 'react';
import axios from 'axios';

 const IncrementViews = ({ filmId }) => {
  useEffect(() => {
    // Increment the view count on mount
    axios.put(`http://localhost:3000/echoFilm/IncrementViews/${filmId}`, {
      views: { $inc: 1 }
    })
      .then(res => {
        console.log(res.data.message);
      })
      .catch(err => {
        console.error("Error incrementing view count:", err);
      });
  }, []);

  return null;
};

export default IncrementViews;
