import { useState, useEffect } from 'react';

function Trailers(props) {

    const [ movies, setMovies ] = useState(null);
    const [ currentMovie, setCurrentMovie ] = useState(null);
    const [ newForm, setNewForm] = useState({
        datemin: "",
        datemax: "",
        actor: "",
        genre: "",
        ratingmin: "",
        ratingmax: "",
    })

    const genres = {
        Thriller: '53',
        Animation: '16',
        Sci_Fi: '878',
        Action: '28',
        Comedy: '35',
        Drama: '18',
        Horror: '27',
        Crime: '80',
        Romance: '10749',
        War: '10752',
        Documentary: '99'
    }

    const apiKey = "2fb1621e84afba4ed275fabe3e910758";
    const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    
    // const URL = "http://localhost:3001/trailers/";
    const URL = "https://its-popcorn-time.herokuapp.com/trailers/";

    const handleChange = (event) => {
        setMovies()
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    async function getSearchForm(event) {
        event.preventDefault()
        let actor = newForm.actor;
        let genre = genres[newForm.genre];
        const datemin = newForm.datemin;
        const datemax = newForm.datemax;
        const ratingmin = newForm.ratingmin;
        const ratingmax = newForm.ratingmax;
        
        if (actor === "") {
            const searchResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&region=US&sort_by=revenue.desc&certification_country=US&certification.lte=${ratingmax}&certification.gte=${ratingmin}&include_adult=false&include_video=false&page=1&primary_release_date.gte=${datemin}&primary_release_date.lte=${datemax}&with_genres=${genre}&with_original_language=en&with_watch_monetization_types=flatrate`)
            const searchResponseData = await searchResponse.json()
            let searchMovies = [];
            searchResponseData.results.forEach(movie => (
                searchMovies.push(movie.id)
            ))
            let stateArray = [];
            for (const movieId of searchMovies) {
                const movieIdResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`)
                const movieIdData = await movieIdResponse.json()
                const movieIdVideo = movieIdData.videos.results;
                let array = [];
                for (let i=0; i<movieIdVideo.length; i++) {
                    if(movieIdVideo[i].name.includes("Official") && movieIdVideo[i].type.includes("Trailer")) {
                        let videoKey = movieIdVideo[i].key;
                        array.push({movieIdData,videoKey})
                        break;
                    } else if (movieIdVideo[i].type.includes("Trailer")) {
                        let videoKey = movieIdVideo[i].key;
                        array.push({movieIdData,videoKey})
                        break;
                    }
                }
                stateArray.push(array);
            }
            setMovies(stateArray);
        } else {
            const actorResponse = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${actor}&page=1&include_adult=false`);
            const actorData = await actorResponse.json()
            actor = actorData.results[0].id;
            const searchResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&region=US&sort_by=revenue.desc&certification_country=US&certification.lte=${ratingmax}&certification.gte=${ratingmin}&include_adult=false&include_video=false&page=1&primary_release_date.gte=${datemin}&primary_release_date.lte=${datemax}&with_cast=${actor}&with_genres=${genre}&with_original_language=en&with_watch_monetization_types=flatrate`)
            const searchResponseData = await searchResponse.json()
            let searchMovies = [];
            searchResponseData.results.forEach(movie => (
                searchMovies.push(movie.id)
            ))
            let stateArray = [];
            for (const movieId of searchMovies) {
                const movieIdResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`)
                const movieIdData = await movieIdResponse.json()
                const movieIdVideo = movieIdData.videos.results;
                let array = [];
                for (let i=0; i<movieIdVideo.length; i++) {
                    if(movieIdVideo[i].name.includes("Official") && movieIdVideo[i].type.includes("Trailer")) {
                        let videoKey = movieIdVideo[i].key;
                        array.push({movieIdData,videoKey})
                        break;
                    } else if (movieIdVideo[i].type.includes("Trailer")) {
                        let videoKey = movieIdVideo[i].key;
                        array.push({movieIdData,videoKey})
                        break;
                    }
                }
                stateArray.push(array);
            }
            setMovies(stateArray);
        }
    }

    const createPeople = async (currentMovie) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(currentMovie)
        })
    }

    function getRandomMovie() {
        const movie = movies[Math.floor((Math.random()*movies.length))];
        setCurrentMovie(movie);
    }

    async function getNowPlaying(event) {
        event.preventDefault()
        const nowPlayingResponse = await fetch(urlNowPlaying);
        const nowPlayingData = await nowPlayingResponse.json()
        let nowPlayingMovies = [];
        nowPlayingData.results.forEach(movie => (
            nowPlayingMovies.push(movie.id)
        ))
        let stateArray = [];
        for (const movieId of nowPlayingMovies) {
            const movieIdResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`)
            const movieIdData = await movieIdResponse.json()
            const movieIdVideo = movieIdData.videos.results;
            let array = [];
            for (let i=0; i<movieIdVideo.length; i++) {
                if(movieIdVideo[i].name.includes("Official") && movieIdVideo[i].type.includes("Trailer")) {
                    let videoKey = movieIdVideo[i].key;
                    array.push({movieIdData,videoKey})
                    break;
                } else if (movieIdVideo[i].type.includes("Trailer")) {
                    let videoKey = movieIdVideo[i].key;
                    array.push({movieIdData,videoKey})
                    break;
                }
            }
            stateArray.push(array);
        }
        setMovies(stateArray);
    }

    const handleTrashIt = (event) => {
        event.preventDefault();
        const new_array = movies.map((movie) => movie); 
       
        const index = new_array.findIndex(item => item === currentMovie);
        
        new_array.splice(index, 1);
        
        setMovies(new_array);
    }

    const handleSaveIt = (event) => {
        event.preventDefault();
        createPeople(currentMovie);
        const new_array = movies.map((movie) => movie); 
        
        const index = new_array.findIndex(item => item === currentMovie);
    
        new_array.splice(index, 1);
        
        setMovies(new_array);
    }


    useEffect(() => {
        if (movies) getRandomMovie();
    });

    const loaded = () => {
        return (
            <div className="trailer-view" >
                <div className="trash-it" >
                    <input type="submit" value="Trash It!" onClick={handleTrashIt} />
                </div>
                <div className="video-responsive" >
                    <iframe
                        width="560"
                        height="340"
                        src={`https://www.youtube.com/embed/${currentMovie[0].videoKey}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
                <div className="save-it">
                    <input type="submit" value="Save It!" onClick={handleSaveIt} />
                </div>
            </div>
        )
    }
    
    const loading = () => {
        return (
            <div className="trailer-loading">
                <h1>Select Now Playing to view Trailers</h1>
            </div>
        )
    }

    return (
        <div className="trailers-container" currentMovie={currentMovie}>
            <div className="trailers-now-playing">
                <form onSubmit={getNowPlaying}>
                    <input
                        type="submit" 
                        value="Now Playing"
                    />
                </form>
            </div>
            <div className="trailers-search">
                <form className="trailers-search-form" onSubmit={getSearchForm}>
                    <div className="date-search">
                        <label for="datemin">Release Date Range:    </label>
                        <input 
                            type="date" 
                            id="datemin" 
                            name="datemin" 
                            min="1900-01-01"
                            max="2024-01-01"
                            onChange={handleChange}
                        />
                        <label for="datemax">   to   </label>
                        <input 
                            type="date" 
                            id="datemax" 
                            name="datemax" 
                            min="1900-01-01"
                            max="2024-01-01"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="actor-search">
                        <label for="actor">Featured Actor:    </label>
                        <input
                            type="text"
                            id="actor"
                            value={newForm.actor}
                            name="actor"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="genre-search">
                        <label for="genre">Select Genre:    </label>
                        <select id="genre" name="genre" onChange={handleChange}>
                            <option value="">Genres</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Animation">Animation</option>
                            <option value="Sci_Fi">Sci Fi</option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                            <option value="Crime">Crime</option>
                            <option value="Romance">Romance</option>
                            <option value="War">War</option>
                            <option value="Documentary">Documentary</option>
                        </select>
                    </div>
                    <div className="rating-search-minimum">
                        <label for="ratingmin">Min:  </label>
                        <select id="ratingmin" name="ratingmin" onChange={handleChange}>
                            <option value="">Rating</option>
                            <option value="G">G</option>
                            <option value="PG">PG</option>
                            <option value="PG-13">PG-13</option>
                            <option value="R">R</option>
                        </select>
                    </div>
                    <div className="rating-search-maximum">
                        <label for="ratingmax">Max:  </label>
                        <select id="ratingmax" name="ratingmax" onChange={handleChange}>
                            <option value="">Rating</option>
                            <option value="G">G</option>
                            <option value="PG">PG</option>
                            <option value="PG-13">PG-13</option>
                            <option value="R">R</option>
                        </select>
                    </div>
                    <div className="trailers-search-submit">
                        <input type="submit" value="Search Trailers" />
                    </div>
                </form>
            </div>
            {currentMovie ? loaded() : loading()}
        </div>
    )
}

export default Trailers;


            // <div className="trailers-search">
            //     <form>
            //         <div className="date-search">
            //             <p>Find trailers by date of release</p>
            //             <label for="datemin">Start date:</label>
            //             <input 
            //                 type="date" 
            //                 id="datemin" 
            //                 name="datemin" 
            //                 min="1900-01-01"
            //                 max="2024-01-01"
            //             />
            //             <label for="datemax">End date:</label>
            //             <input 
            //                 type="date" 
            //                 id="datemax" 
            //                 name="datemax" 
            //                 min="1900-01-01"
            //                 max="2024-01-01"
            //             />
            //         </div>
            //         <div className="actor-search">
            //             <p>Find trailers by featured actors</p>
            //             <label for="actor">Actor</label>
            //             <input
            //                 type="text"
            //                 id="actor"
            //                 value=""
            //                 name="radio-buttons"
            //                 placeholder="actor"
            //             />
            //         </div>
            //         <div className="genre-search">
            //             <p>Find trailers by genre</p>
            //             <input
            //                 type="radio"
            //                 id="Thriller"
            //                 name="radio-buttons"
            //                 value="Thriller"
            //             />
            //             <label for="Thriller">Thriller</label>
            //             <input
            //                 type="radio"
            //                 id="Animation"
            //                 name="radio-buttons"
            //                 value="Animation"
            //             />
            //             <label for="Animation">Animation</label>
            //             <input
            //                 type="radio"
            //                 id="Sci Fi"
            //                 name="radio-buttons"
            //                 value="Sci Fi"
            //             />
            //             <label for="Sci Fi">Sci Fi</label>
            //             <input
            //                 type="radio"
            //                 id="Action"
            //                 name="radio-buttons"
            //                 value="Action"
            //             />
            //             <label for="Action">Action</label>
            //             <input
            //                 type="radio"
            //                 id="Comedy"
            //                 name="radio-buttons"
            //                 value="Comedy"
            //             />
            //             <label for="Comedy">Comedy</label>
            //             <input
            //                 type="radio"
            //                 id="Drama"
            //                 name="radio-buttons"
            //                 value="Drama"
            //             />
            //             <label for="Drama">Drama</label>
            //             <input
            //                 type="radio"
            //                 id="Horror"
            //                 name="radio-buttons"
            //                 value="Horror"
            //             />
            //             <label for="Horror">Horror</label>
            //             <input
            //                 type="radio"
            //                 id="Crime"
            //                 name="radio-buttons"
            //                 value="Crime"
            //             />
            //             <label for="Crime">Crime</label>
            //             <input
            //                 type="radio"
            //                 id="Romance"
            //                 name="radio-buttons"
            //                 value="Romance"
            //             />
            //             <label for="Romance">Romance</label>
            //         </div>
            //         <div className="trailers-search-submit">
            //             <input type="submit" value="Search Trailers" />
            //         </div>
            //     </form>
            // </div>