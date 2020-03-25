import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App.js";

console.log(process.env.NODE_ENV);
/*if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}*/

ReactDOM.render(<Router><App/></Router>,    document.getElementById("root"));


