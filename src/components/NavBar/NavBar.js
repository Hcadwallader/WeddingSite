import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => (
	<ul>
		<li>
			<NavLink activeClassName="highlight" exact={true} to="/">
				Home
			</NavLink>
		</li>
		<li>
			<NavLink activeClassName="highlight" to="/Venue">
				Venue
			</NavLink>
		</li>
		<li>
			<NavLink activeClassName="highlight" to="/Accommodation">
				Accommodation
			</NavLink>
		</li>
		<li>
			<NavLink activeClassName="highlight" to="/Rsvp">
				Rsvp
			</NavLink>
		</li>
	</ul>
);

export default NavBar;
