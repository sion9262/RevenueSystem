import React, {useState} from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Auth from "views/Passport/Login.js";


const App = () => {
    const hist = createBrowserHistory();

    
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