import React from "react";
import "./NavBar.scss";

const NavBar = () => (
    <React.Fragment>
        <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">Venue</a></li>
            <li><a href="contact.asp">Accommodation</a></li>
        </ul>
    </React.Fragment>
);

export default NavBar;