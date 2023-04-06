import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import useFetch from "../../getUseFetch";
import ErrorDataFilm from '../ErrorDataFilm/ErrorDataFilm';
import LoadingFilm from '../LoadIngFilm/LoadingFilm';
import CastsDiv from './CastsDiv';

import './FilmCasts.css'

const FilmCasts = ({ movie }) => {
    const { data, loading, error } = useFetch(
        `http://localhost:3000/echoFilm/CastsFilm/${movie._id}`
    );

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 5 }
    ];

    return (
        <div className='ActorsFirstDiv'>
            <hr />
            <p className='TitleP'> CASTS : </p>
            {loading && <LoadingFilm />}
            {error && <ErrorDataFilm />}
            {data && (
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



                    {Object.values(data).map((casts) => (
                        (casts.kind) && (
                            <CastsDiv casts={casts} />
                        )
                    ))}


                    {data.actors.map((actor) => (
                        <CastsDiv casts={actor} />
                    ))}


                </Carousel>
            )}
        </div>
    );
};


export default FilmCasts 