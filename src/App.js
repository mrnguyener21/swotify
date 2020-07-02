import React from 'react'
import {Home, WebPlayer} from './component'

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";


const App = () => {
    return (
        <div>
        <Router>
            <Switch>
                <Route component={WebPlayer} path='/webplayer'/>
                <Route component={Home} path='/'/>
            </Switch>
        </Router>            

        </div>
    )
}

export default App;
