import { useState, useEffect } from "react";

function Show(props) {

    const [ movie, setMovie ] = useState([]);

    const id = props.match.params.id;

    // const URL = `http://localhost:3001/mytrailers/${id}`;
    const URL = `https://its-popcorn-time.herokuapp.com/mytrailers/${id}`;

    const deleteTrailer = async (id) => {
        await fetch(URL, {
            method: "DELETE",
        })
    }

    const handleClick = () => {
        deleteTrailer(id);
        props.history.push('/trailers');
    }

    useEffect(() => {
        const getMovie = async () => {
        
            const response = await fetch(URL, {
                method: 'GET',
            });
            const data = await response.json();
            setMovie(data);
        };
        getMovie();     
    }, [props.user, URL]);

    return (
        <div className="show-container" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className="sub-show-container-1">
                <div className="video-responsive-show" >
                    <iframe className="video-responsive-show-iframe"
                        width="560"
                        height="340"
                        src={`https://www.youtube.com/embed/${movie.videoKey}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            </div>
            <div className="sub-show-container-2">
                <div className="show-card">
                    <div className="show-card-title">{movie.title}</div>
                    <div><span>Runtime:</span> {movie.runtime} minutes</div>
                    <div><span>Plot:</span> {movie.overview}</div>
                    <div><span>Box Office:</span> ${movie.revenue}</div>
                    
                    <button id="delete" onClick={handleClick}>
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Show;