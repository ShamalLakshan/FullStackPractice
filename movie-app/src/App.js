import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import searchIcon from './search.svg';

import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com?apikey=c032e2d7'

const movie_1 = {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    return (
        <div className="app">
            <h1>Movie App</h1>
            <div className="search">
                <input 
                    placeholder="Search for movies: "
                    value = "Superman"
                    onChange={() => {}}
                /> 
                <img 
                    src={searchIcon}
                    alt="Search"
                    onClick = {() => {}}
                />
            </div>

            {
                movies?.length > 0 
                    ? (
                        <div className="container">
                            <MovieCard movie_1={movies[0]}/>
                        </div>
                    ) : (
                        <div>
                            
                        </div>
                    )
            }

            
        </div>
    );
};
export default App;
