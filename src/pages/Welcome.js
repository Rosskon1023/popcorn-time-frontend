import { login } from '../services/firebase';

function Welcome(props) {

    const loaded = () => {
        return (
            <div className="welcome-text">
                <h2>Welcome to Popcorn Time, {props.user.displayName}!</h2>
                <p>Explore and save movie trailers</p>
                <p>Have an idea of what you want to watch? Customize your trailer search by date of release, actor, genre and rating!</p>
                <p>Used Popcorn Time before? View all of your saved trailers in My Trailers</p>
            </div>
        )
    }

    const loading = () => {
        return (
            <div className="welcome-text">
                <h2>Welcome to Popcorn Time!</h2>
                <h4>You must <button onClick={login}>Log In</button> to get started</h4>
                <p>Explore and save movie trailers </p>
                <p>Have an idea of what you want to watch? Customize your trailer search by date of release, actor, genre and rating!</p>
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