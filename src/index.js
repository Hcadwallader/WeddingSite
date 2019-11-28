import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import App from "./App.js";
import Accommodation from "./components/Accommodation/Accommodation";
import Venue from "./components/Venue/Venue";


ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));

/*
const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/Venue" component={Venue} />
            <Route path="/Accommodation" component={Accommodation} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))*/
