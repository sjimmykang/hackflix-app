// modules
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// components
import Catalogue from './Catalogue';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import ErrorPage from './ErrorPage';
// assets
import './App.css';

function App() {
    /*
    Pseudo code

    on component mount (useEffect)
        fetch list of popular movie from a specific year from the moviedb API with Axios
        store api data in state
        map through the movies state to render jsx with the movie posters (movie component?)
    */

    return (
        <div className="wrapper">
            <header>
                <h1>Hackflix</h1>
            {/* <h1>Hackflix CodeAlong</h1> */}
            </header>
            {/* create paths allowing us to render different url depending on the movie */}
            <Routes>
                {/* show catalogue on default path */}
                <Route path='/' element={ <Catalogue />} />
                {/* <Route path='/game' element={<h2> just a test</h2>} /> */}
                {/* show the movie detail component on /movie/:movieID, passing it the movie ID */}
                <Route path='/movie/:movieID' element={ <MovieDetails />} />
                <Route path='*' element={ <ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;

// moviedb.org key: 1b96433f363fce7e123f6793ba9e3f52
