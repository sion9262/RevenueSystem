import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

//redux
import { useSelector} from 'react-redux';



const App = () => {
    const hist = createBrowserHistory();

    const checkLogin = useSelector(state => state.passport.checkLogin);
    const jwt = useSelector(state => state.passport.jwt);

    console.log(checkLogin)
    console.log(jwt);
    return (
        <Router history={hist}>
            <Switch>
                
                <Route path="/admin" component={Admin} />
                <Route path="/rtl" component={RTL} />
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </Router>
    )
}

export default App;