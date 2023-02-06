/* allow the component to access the param it was passed
store the param in a variable
put the moviID on the page
*/
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = () => {
    const { movieID } = useParams();
    const [movie, setMovie] = useState({});

    useEffect( () => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID}`,
            params: {
                api_key: '1b96433f363fce7e123f6793ba9e3f52'
            }
        }).then ( res => {
            // console.log(res.data);
            setMovie(res.data);
        })
    }, [])

    const  { original_title, tagline, overview, poster_path } = movie;

    return (
        <>
            <div className='poster'>
                <div className='description'>
                    <h2>{original_title}</h2>
                    <h3>{tagline}</h3>
                    <p>{overview}</p>
                </div>
                <div className='poster-image'>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`poster for ${original_title}`} />
                </div>
            </div>
            <Link to='/'>
                <h2>BACK</h2>
            </Link>
        </>
    )
}

export default MovieDetails;