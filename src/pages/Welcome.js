import { login } from '../services/firebase';

function Welcome(props) {

    const loaded = () => {
        return (
            <div className="welcome-text">
                <h2>welcome to popcorn time, {props.user.displayName.substr(0,props.user.displayName.indexOf(' '))}!</h2>
                <p>use "discover" to explore and save movie trailers</p>
                <p>have an idea of what you want to watch? customize your trailer search by date of release, actor, genre and rating!</p>
                <p>used popcorn time before? view all of your saved trailers in my trailers</p>
            </div>
        )
    }

    const loading = () => {
        return (
            <div className="welcome-text">
                <h2>welcome to popcorn time!</h2>
                <ul>
                    <li>you must <button onClick={login}>log In</button> to get started</li>
                    <li>explore and save movie trailers </li>
                    <li>have an idea of what you want to watch? customize your trailer search by date of release, actor, genre and rating!</li>
                    <li>used popcorn time before? view all of your saved trailers in my trailers</li>
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