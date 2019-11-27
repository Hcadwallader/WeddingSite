import React from "react";
import { BrowserRouter as Router, NavLink  } from 'react-router-dom'
import "./NavBar.scss";

const NavBar = () => (
    <React.Fragment>
        <Router>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Venue">Venue</NavLink></li>
            <li><NavLink to="/Accommodation">Accommodation</NavLink></li>
        </ul>
        </Router>

      {/*  <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">Venue</a></li>
            <li><a href="contact.asp">Accommodation</a></li>
        </ul>*/}
    </React.Fragment>
);

export default NavBar;