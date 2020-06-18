import React from 'react';
import './Venue.scss';
import '../../styles/App.scss';

const Venue = () => (
	<div className="white-box venue-container">
		<h1>Venue</h1>
		<div className="row">
			<div className="column">
				<p>Name - Barn at Brynich</p>
				<p>
					Address - The Barn at Brynich, Brynich, Brecon, Powys, LD3
					7SH
				</p>
				<p>Web - https://www.brynich.co.uk/</p>
				<p>
					Parking - There's plenty of parking on site so you're
					welcome to drive to the wedding and keep your car at the
					venue.
				</p>
			</div>
			<div className="column">
				<iframe
					className="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.5589035842518!2d-3.355813484328854!3d51.941998786654665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e32832d552eb9%3A0x13aa04cd095fc6ec!2sBarn%20at%20Brynich!5e0!3m2!1sen!2suk!4v1576704211903!5m2!1sen!2suk"
					allowFullScreen=""
				></iframe>
			</div>
		</div>
	</div>
);

export default Venue;
