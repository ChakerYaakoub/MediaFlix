import React from 'react'
import './TrailaireFilm.css'

const TrailaireFilm = ({ movie }) => {
    return (
        <div className='trailaireDiv'>

            <hr />

            <p>Watch the movie trailer :</p>
           
           <div className='trailerFilm' dangerouslySetInnerHTML={{ __html: movie.trailer }} />

           


        </div>

    )
}

export default TrailaireFilm