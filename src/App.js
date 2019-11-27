import React from "react";
import {hot} from "react-hot-loader";
import "./styles/App.scss";
import Venue from "./components/Venue/Venue";
import Accommodation from "./components/Accommodation/Accommodation";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

export const App = () => (
    <Router>
        <div className="app-container">
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Venue" component={Venue} />
                <Route path="/Accommodation" component={Accommodation} />
            </Switch>
        </div>

    </Router>
        );


export default App;