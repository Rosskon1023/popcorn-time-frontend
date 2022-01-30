import {login, logout} from '../services/firebase';
import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <h1>Popcorn Time</h1>
            <ul>
                <Link to ="/" style={{textDecoration:"none"}}>
                    <li className="nav-item">Welcome</li> 
                </Link>
                <Link to ="/discover" style={{textDecoration:"none"}}>
                    <li className="nav-item">Discover</li> 
                </Link>
                <Link to ="/trailers" style={{textDecoration:"none"}}>
                    <li className="nav-item">My Trailers</li> 
                </Link>
                {
                    props.user ?
                    <li>
                        <button className="nav-item" onClick={logout}>Logout</button>
                    </li>
                    :
                    <li>
                        <button className="nav-item" onClick={login}>Login</button>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Navigation;