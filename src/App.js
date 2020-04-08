import React from "react";
import {hot} from "react-hot-loader";
import "./styles/App.scss";
import Venue from "./components/Venue/Venue";
import Accommodation from "./components/Accommodation/Accommodation";
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ApiTest from "./components/ApiTest/ApiTest";
import Rsvp from "./components/Rsvp/Rsvp";

export const App = () => (
    <div className="app-container">

        <NavBar/>
        <main className="app">
            <div className="bg">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Venue" component={Venue}/>
                    <Route path="/Accommodation" component={Accommodation}/>
                    <Route path="/Api" component={ApiTest}/>
                    <Route path="/Rsvp" component={Rsvp}/>
                    <Route component={Home}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </main>

    </div>

);


export default App;