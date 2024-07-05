import React from "react";
import { useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=c032e2d7'

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
                />
            </div>
        </div>
    );
};
export default App;
