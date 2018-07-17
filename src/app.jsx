import React, { Component, Fragment } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import routerConfig from './config';
import Router from './config/router.js';
class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
        <BrowserRouter>
           <div className="content">
            
                         <Router routes={routerConfig.routes}></Router> 
                    </div>   
        </BrowserRouter>
        )
    }
}
export default App;