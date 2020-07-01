import React from 'react'
import {Home, WebPlayer} from './component'

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";


const App = () => {
    return (
        <div>
        <Router>
            <Switch>
                <Route component={Home} path='/'/>
                <Route component={WebPlayer} path='/webplayer'/>
            </Switch>
        </Router>            

        </div>
    )
}

export default App;
