import { Route, Switch, Redirect} from "react-router-dom";
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
                <Route path="/discover" render={() => (
                    props.user ?
                    <Trailers />
                    :
                    <Redirect to ="/" />
                )} />
                <Route path="/trailers" render={() => (
                    props.user ?
                    <Index />
                    :
                    <Redirect to ="/" /> 
                )} />
                <Route path="/mytrailers/:id" render={(rp) => (
                    props.user ?
                    <Show
                        {...rp}
                    />
                    :
                    <Redirect to ="/" />
                )} /> 
            </Switch>
        </div>
    )
}

export default Main;