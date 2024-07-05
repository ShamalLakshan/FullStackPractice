import React from "react";
import { useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=c032e2d7'

const movie_1 = {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
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

            <div className="container">
                <div className="movie">
                    <div>
                        <p>
                            {movie_1.Year}
                        </p>
                    </div>

                    <div>
                        <img src={movie_1.Poster} />
                    </div>

                    <div>
                        <span>{movie_1.Type}</span>
                        <h3>{movie_1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default App;
