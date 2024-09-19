import React, { useState } from 'react';
import '../styles/Moviecard.css'

const MovieCard = ({ movie }) => {
    // State to control the modal visibility
    const [showModal, setShowModal] = useState(false);

    // Function to toggle the modal visibility
    const handleCardClick = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div className='movie' onClick={handleCardClick}>
                <div>
                    <p>{movie.Year}</p>
                </div>
                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
                </div>
                <div>
                    <span>{movie.Type}</span>
                    <span>{movie.Title}</span>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={handleCardClick}>&times;</span>
                        <h2>{movie.Title}</h2>
                        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
                        <p>Year: {movie.Year}</p>
                        <p>Type: {movie.Type}</p>
                        <p>ImdbID: {movie.imdbID}</p>
                        <p>Plot: {movie.Plot || 'Plot details not available.'}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieCard;
