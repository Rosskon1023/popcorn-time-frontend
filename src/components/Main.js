import { Route, Switch } from "react-router-dom";
 import Index from "../pages/Index";
 import Show from "../pages/Show";
 import Trailers from "../pages/Trailers";
 import Welcome from "../pages/Welcome";

function Main(props) {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route>
                <Route path="/discover">
                    <Trailers />
                </Route>
                <Route path="/mytrailers">
                    <Index />
                </Route>
                <Route path="/trailers/:id">
                    <Show />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;