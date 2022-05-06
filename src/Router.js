import React from "react";
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import HomeView from "./view/HomeView";
import LoginView from "./view/LoginView";
import EmploeeView from "./view/EmploeeView";
import StatisView from "./view/StatisView";
import ManageView from "./view/ManageView";

import { history } from "./utils/History";

class BasicRoute extends React.Component{
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            console.log(location,action);
        });
    }
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path="/home"><HomeView /></Route>
                    <Route exact path="/"> <LoginView /> </Route>
                    <Route exact path="/emploee"><EmploeeView /></Route>
                    <Route exact path="/statis"><StatisView /></Route>
                    <Route exact path="/manage"><ManageView /></Route>
                    <Redirect from="/*" to="/" />
                </Switch>

            </Router>
        )
    }

}

export default BasicRoute