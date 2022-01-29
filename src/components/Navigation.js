import {login, logout} from '../services/firebase';
import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <Link to ="/">
                <div>Welcome</div> 
            </Link>
            <Link to ="/discover">
                <div>Discover</div> 
            </Link>
            <Link to ="/trailers">
                <div>My Trailers</div> 
            </Link>
            <div>
            {
                props.user ?
                <div className="nav-image">
                <button onClick={logout}>Logout</button>
                </div>
                :
                <button onClick={login}>Login</button>
            }
            </div>
        </div>
    )
}

export default Navigation;