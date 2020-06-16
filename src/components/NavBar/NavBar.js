import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => (
	<ul>
		<li>
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/Venue">Venue</Link>
		</li>
		<li>
			<Link to="/Accommodation">Accommodation</Link>
		</li>
		<li>
			<Link to="/Rsvp">Rsvp</Link>
		</li>
	</ul>
);

export default NavBar;
