import React, { useState } from 'react'
import './VideoFilm.css'
import IncrementViews from './IncrementViews';

const VideoFilm = ({ movie }) => {
  const [isIncremented, setIsIncremented] = useState(false);

  const handleClick = () => {
    setIsIncremented(true);
  };

  return (
    <div className='VideoFilm'>
      <hr />
      <p>Watch the movie:</p>
      <div>
        <video onClick={handleClick} controls muted>
          <source
            src={`http://localhost:3000/${movie.video}`}
            poster={`http://localhost:3000/${movie.image}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {isIncremented && <IncrementViews filmId={movie._id} />}
    </div>
  );
};

export default VideoFilm;
