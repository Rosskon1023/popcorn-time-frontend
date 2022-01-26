
function Trailers(props) {
    return (
        <div className="trailers-container">
            <div className="trailers-now-playing">
                <form>
                    <input
                        type="submit" 
                        value="Now Playing"
                    />
                </form>
            </div>
            <div className="trailers-search">
                <form>
                    <div className="date-search">
                        <p>Find trailers by date of release</p>
                        <label for="datemin">Enter a start date:</label>
                        <input 
                            type="date" 
                            id="datemin" 
                            name="datemin" 
                            min="1900-01-01"
                            max="2024-01-01"
                        />
                        <label for="datemax">Enter an end date:</label>
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
            </div>
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