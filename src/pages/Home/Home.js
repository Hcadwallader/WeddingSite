import Timer from '../../components/Timer/Timer';
import '../../styles/App.scss';
import './Home.scss';

import React from 'react';

const Home = () => (
	<div className="home-container">
		<h2 className="header-text">Countdown to the big day</h2>
		<Timer />
	</div>
);

export default Home;
