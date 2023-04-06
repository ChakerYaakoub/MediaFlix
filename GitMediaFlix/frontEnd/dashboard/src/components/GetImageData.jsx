import React, { useState, useEffect } from 'react';

const GetImageData = ({ path }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch(path)
      .then(res => res.blob())
      .then(blob => {
        setImageData(blob);
      });
  }, [path]);

  return imageData;
};

export default GetImageData;
