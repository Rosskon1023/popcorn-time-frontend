import { useState } from 'react';

function Trailers(props) {

    const [ movies, setMovies ] = useState(null)

    const apiKey = "2fb1621e84afba4ed275fabe3e910758";
    const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    

    // async function getNowPlaying(event) {
    //     event.preventDefault()
    //     const nowPlayingResponse = await fetch(urlNowPlaying);
    //     const nowPlayingData = await nowPlayingResponse.json()
    //     let nowPlayingMovies = [];
    //     nowPlayingData.results.forEach(movie => (
    //         nowPlayingMovies.push(movie.id)
    //     ))
    //     const movieId = nowPlayingMovies[Math.floor(Math.random()*nowPlayingMovies.length)];
    //     const movieIdResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`);
    //     const movieIdData = await movieIdResponse.json()
    //     const movieIdVideo = movieIdData.videos.results;
    //     for (let i=0; i<movieIdVideo.length; i++) {
    //         if(movieIdVideo[i].name.includes("Official") && movieIdVideo[i].type.includes("Trailer")) {
    //             let videoKey = movieIdVideo[i].key;
    //             setMovies ({
    //                 movieId,
    //                 videoKey,
    //             })
    //             break;
    //         }
    //     }
    // }

    async function getNowPlaying(event) {
        event.preventDefault()
        const nowPlayingResponse = await fetch(urlNowPlaying);
        const nowPlayingData = await nowPlayingResponse.json()
        let nowPlayingMovies = [];
        nowPlayingData.results.forEach(movie => (
            nowPlayingMovies.push(movie.id)
        ))
        for (const movieId of nowPlayingMovies) {
            const movieIdResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`)
            const movieIdData = await movieIdResponse.json()
            const movieIdVideo = movieIdData.videos.results;
            for (let i=0; i<movieIdVideo.length; i++) {
                if(movieIdVideo[i].name.includes("Official") && movieIdVideo[i].type.includes("Trailer")) {
                    let videoKey = movieIdVideo[i].key;
                    setMovies((prevState) => ({
                        ...prevState,
                        movieIdData,
                        videoKey,
                    }))
                    break;
                }
            }
        }
    }

    console.log(movies);


    return (
        <div className="trailers-container">
            <div className="trailers-now-playing">
                <form onSubmit={getNowPlaying}>
                    <input
                        type="submit" 
                        value="Now Playing"
                    />
                </form>
            </div>
            {/* <div className="trailers-search">
                <form>
                    <div className="date-search">
                        <p>Find trailers by date of release</p>
                        <label for="datemin">Start date:</label>
                        <input 
                            type="date" 
                            id="datemin" 
                            name="datemin" 
                            min="1900-01-01"
                            max="2024-01-01"
                        />
                        <label for="datemax">End date:</label>
                        <input 
                            type="date" 
                            id="datemax" 
                            name="datemax" 
                            min="1900-01-01"
                            max="2024-01-01"
                        />
                    </div>
                    <div className="actor-search">
                        <p>Find trailers by featured actors</p>
                        <label for="actor">Actor</label>
                        <input
                            type="text"
                            id="actor"
                            value=""
                            name="radio-buttons"
                            placeholder="actor"
                        />
                    </div>
                    <div className="genre-search">
                        <p>Find trailers by genre</p>
                        <input
                            type="radio"
                            id="Thriller"
                            name="radio-buttons"
                            value="Thriller"
                        />
                        <label for="Thriller">Thriller</label>
                        <input
                            type="radio"
                            id="Animation"
                            name="radio-buttons"
                            value="Animation"
                        />
                        <label for="Animation">Animation</label>
                        <input
                            type="radio"
                            id="Sci Fi"
                            name="radio-buttons"
                            value="Sci Fi"
                        />
                        <label for="Sci Fi">Sci Fi</label>
                        <input
                            type="radio"
                            id="Action"
                            name="radio-buttons"
                            value="Action"
                        />
                        <label for="Action">Action</label>
                        <input
                            type="radio"
                            id="Comedy"
                            name="radio-buttons"
                            value="Comedy"
                        />
                        <label for="Comedy">Comedy</label>
                        <input
                            type="radio"
                            id="Drama"
                            name="radio-buttons"
                            value="Drama"
                        />
                        <label for="Drama">Drama</label>
                        <input
                            type="radio"
                            id="Horror"
                            name="radio-buttons"
                            value="Horror"
                        />
                        <label for="Horror">Horror</label>
                        <input
                            type="radio"
                            id="Crime"
                            name="radio-buttons"
                            value="Crime"
                        />
                        <label for="Crime">Crime</label>
                        <input
                            type="radio"
                            id="Romance"
                            name="radio-buttons"
                            value="Romance"
                        />
                        <label for="Romance">Romance</label>
                    </div>
                    <div className="trailers-search-submit">
                        <input type="submit" value="Search Trailers" />
                    </div>
                </form>
            </div> */}
            <div className="trailer-view">
                <div className="trash-it">
                    <input type="submit" value="Trash It!" />
                </div>
                <div className="video-responsive">
                    <iframe
                        width="853"
                        height="480"
                        src={"https://www.youtube.com/embed/JfVOs4VSpmA"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
                <div className="save-it">
                    <input type="submit" value="Save It!" />
                </div>
            </div>
        </div>
    )
}

export default Trailers;