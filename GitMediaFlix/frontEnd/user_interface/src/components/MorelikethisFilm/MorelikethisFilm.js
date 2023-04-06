import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import useFetch from "../../getUseFetch";
import ErrorDataFilm from '../ErrorDataFilm/ErrorDataFilm';
import LoadingFilm from '../LoadIngFilm/LoadingFilm';

import './MorelikethisFilm.css'

const MorelikethisFilm = ({ movie }) => {
    const { data, loading, error } = useFetch(
        `http://localhost:3000/echoFilm/GetSimilarFilms/${movie._id}`
    );

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <div className='LikeThis'>
        <hr />

        <p className='TitleP'>YOU MAY ALSO LIKE :</p>

            {loading && <LoadingFilm />}
            {error && <ErrorDataFilm />}
            {data && data.message && <> <p> not fund </p></>}

            {data && data.length > 0 && (
                <Carousel
                    breakPoints={breakPoints}
                    itemsToShow={1}
                    enableAutoPlay={true}
                    autoPlaySpeed={3000}
                    showArrows={true}
                    pagination={false}
                    isRTL={false}
                    tiltEasing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    easing="ease"
                    disableArrowsOnEnd= {false}
                    focusOnSelect={true}
                >

                    {Object.values(data).map((films) => (
                        (films._id) && (
                            <div className='SimilaireFilm' key={films._id} style={{ height: "23rem",   position: 'relative' }}>
                            <a href={`http://localhost:5000/movieDetails/${films._id}`} > <img src={`http://localhost:3000/${films.image}`} alt={`Slide ${films._id}`} style={{ height: "100%" }} /> </a>
                            <p style={{fontWeight:"bold" ,fontSize: "1rem", position: "absolute", bottom: "5px", left: "5px", color: "#ffffff", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "5px",width:"95%", borderRadius: "5px", display: "none" , height:"3.5rem"}}> {films.title} {films.dateYear}</p>
                         </div>
                        )
                    ))}
                </Carousel>
            )}
        </div>
    );
};

export default MorelikethisFilm;
