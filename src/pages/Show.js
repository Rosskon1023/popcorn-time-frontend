import { useState, useEffect } from "react";

function Show(props) {

    const [ movie, setMovie ] = useState([]);

    const id = props.match.params.id;

    const URL = `http://localhost:3001/mytrailers/${id}`;

    const getMovie = async () => {
        
        const response = await fetch(URL, {
            method: 'GET',
        });
        const data = await response.json();
        setMovie(data);
    };

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
       getMovie();     
    }, []);

    return (
        <div className="show-container" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className="sub-show-container-1">
                <div>{movie.title}</div>
                <div className="video-responsive" >
                    <iframe
                        width="560"
                        height="340"
                        src={`https://www.youtube.com/embed/${movie.videoKey}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
                <button id="delete" onClick={handleClick}>
                    DELETE
                </button>
            </div>
            <div className="sub-show-container-2">
                <div className="show-card">
                    <div>{movie.runtime}</div>
                    <div>{movie.revenue}</div>
                    <div>{movie.overview}</div>
                </div>
            </div>
        </div>
    )
}

export default Show;