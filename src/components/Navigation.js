import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <Link to ="/discover">
                <div>Popcorn Time</div> 
            </Link>
            <Link to ="/mytrailers">
                <div>My Trailers</div> 
            </Link>
            <div>Login</div>
            <div>Logout</div>
        </div>
    )
}

export default Navigation;