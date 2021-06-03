import React from 'react';
import propTypes from 'prop-types';
import './Movies.css';

function Movie({name, poster, summary, rating, year, genres}){
    return <div className="movie">
        <img className="movie__poster" src={poster} alt={name} title={name}></img>
        <div className="movie__data">
            <h3  className="movie__title">{name} ({rating})</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres_genre">{genre}</li>
                    ))}
                </ul>
            <p className="movie__summary">{summary.slice(0,150)}...</p>
            
        </div>
        
        </div>
}

Movie.propTypes = {
    name : propTypes.string.isRequired,
    rating : propTypes.number.isRequired,
    summary: propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    year : propTypes.number.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;