import Timer from '../Timer/Timer';
import '../../styles/App.scss';
import './Home.scss';

import React from 'react';

const Home = () => (
	<div className="homeContainer">
		<h2 className="headerText">Countdown to the big day</h2>
		<Timer />
	</div>
);

export default Home;
