import { login } from '../services/firebase';

function Welcome(props) {

    const loaded = () => {
        return (
            <div className="welcome-text">
                <h2>Welcome to Popcorn Time, {props.user.displayName.substr(0,props.user.displayName.indexOf(' '))}!</h2>
                <ul>
                    <li>Use "Discover" to explore and save movie trailers</li>
                    <li>Have an idea of what you want to watch? Customize your trailer search by date of release, actor, genre and rating!</li>
                    <li>Used Popcorn Time before? View all of your saved trailers in My Trailers</li>
                </ul>
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