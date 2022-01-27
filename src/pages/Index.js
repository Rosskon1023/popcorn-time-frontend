import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Index(props) {

    const [ movies, setMovies ] = useState([]);

    const URL = "http://localhost:3001/trailers/";

    const getTrailers = async () => {
        
        const response = await fetch(URL, {
            method: 'GET',
        });
        const data = await response.json();
        setMovies(data);
    };

    useEffect(() => {
       getTrailers();     
    }, []);

    return (
        <div className="index-container">
            {movies.map((movie) => {
                return (
                    <div key={movie._id} className="index-movie">
                        <h2 className="index-item-title">{movie.title}</h2>
                        <Link to={`/mytrailers/${movie._id}`} >
                            <img className="index-item-image" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                        </Link>
                    </div>
                )
            })}
        </div> 
    )       
}

export default Index;