import { useState, useEffect } from 'react';
import React from 'react';
import './styles/App.css';
import SearchIcon from './search.svg';
import MovieCard from './components/Moviecard';
import config from './config';


const ENDPOINT_PATH = 'movieservice/getMovieByName?movieTitle=';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {

        try
        {
            console.log('baseUrl', config.MOVIE_BASE_URL)
            const response = await fetch(`${config.MOVIE_BASE_URL}${ENDPOINT_PATH}${title}`); 
            const data = await response.json();
    
            setMovies(data.value.Search);
        }
        catch(error)
        {
            console.log(error)
            return null
        }
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return (
        <div className='app'>
            <h1>MOVIES FOR YOU</h1>

            <div className='search'>
                <input
                    placeholder='Enter movie title to search'
                    value={searchTerm}
                    onChange={(previous) => setSearchTerm(previous.target.value)}
                />
                <img 
                    src={SearchIcon} 
                    alt='search'
                    onClick={() => searchMovies(searchTerm)} 
                />
            </div>

            {
                movies.length > 0 ?
                (
                    <div className='container'>
                       {movies.map((movie) => {
                        return (
                            <MovieCard
                                movie={movie}
                            />
                        )
                       })}
                    </div>
                ) :
                (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;