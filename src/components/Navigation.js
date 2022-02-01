import {login, logout} from '../services/firebase';
import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <h1>popcorn time</h1>
            <ul>
                <Link to ="/" style={{textDecoration:"none"}}>
                    <li className="nav-item">welcome</li> 
                </Link>
                <Link to ="/discover" style={{textDecoration:"none"}}>
                    <li className="nav-item">discover</li> 
                </Link>
                <Link to ="/trailers" style={{textDecoration:"none"}}>
                    <li className="nav-item">my trailers</li> 
                </Link>
                {
                    props.user ?
                    <li>
                        <button className="nav-item" onClick={logout}>logout</button>
                    </li>
                    :
                    <li>
                        <button className="nav-item" onClick={login}>login</button>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Navigation;