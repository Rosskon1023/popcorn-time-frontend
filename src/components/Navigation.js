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
                    <img 
                        style={{
                            height: '2.5rem',
                            width: '2.5rem',
                            borderRadius: '50%'
                        }}
                        src={props.user.photoURL}
                        alt={props.user.displayName}
                    />
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