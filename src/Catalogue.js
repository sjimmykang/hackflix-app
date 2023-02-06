import axios from 'axios';
import { useState, useEffect } from 'react';
// import the Link component to allow us to build out new Links
import { Link } from 'react-router-dom';

const Catalogue = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '1b96433f363fce7e123f6793ba9e3f52',
                language: 'en-US',
                sort_by: 'popularity.desc',
                include_adult: 'false',
                include_video: 'false',
                page: 1,
                primary_release_year: 1989,
            }
        }).then(res => {
            // console.log(res.data.results);
            setMovies(res.data.results);
        })
    }, []);


    return (
        < ul className = 'catalogue' >
            {/* for scalability turn it into a component */ }
            {
                movies.map(movie =>
                    /* implicit return if its just one block */
                    <li key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.original_title}`} />
                        </Link>
                        
                    </li>

                )
            }
        </ul >
    )
}

export default Catalogue;