import { login } from '../services/firebase';

function Welcome(props) {

    const loaded = () => {
        return (
            <div className="welcome-text">
                <h2>Welcome to Popcorn Time, {props.user.displayName.substr(0,props.user.displayName.indexOf(' '))}!</h2>
                <p>Use "Discover" to explore and save movie trailers</p>
                <p>Have an idea of what you want to watch? Customize your trailer search by date of release, actor, genre and rating!</p>
                <p>Used Popcorn Time before? View all of your saved trailers in My Trailers</p>
            </div>
        )
    }

    const loading = () => {
        return (
            <div className="welcome-text">
                <h2>Welcome to Popcorn Time!</h2>
                <ul>
                    <li>You must <button onClick={login}>Log In</button> to get started</li>
                    <li>Explore and save movie trailers </li>
                    <li>Have an idea of what you want to watch? Customize your trailer search by date of release, actor, genre and rating!</li>
                    <li>Used Popcorn Time before? View all of your saved trailers in My Trailers</li>
                </ul>
            </div> 
        )
    }

    return (
        <div className="welcome-container">
            <div className="welcome-image">   
            </div>
            {props.user ? loaded() : loading()}
        </div>
    )
}

export default Welcome;