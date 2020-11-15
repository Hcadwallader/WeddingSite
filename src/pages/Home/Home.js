//import TimerContainer from '@bit/helencadwallader.sharedcomponents.timer';
import TimerContainer from '../../components/timer/timerContainer';
//import CounterContainer from '@bit/helencadwallader.sharedreactomponents.counter';
import '../../styles/App.scss';
import './Home.scss';

import React from 'react';

const Home = () => (
	<div className="home-container">
		<h2 className="header-text">Countdown to the big day</h2>
		<TimerContainer />
	</div>
);

export default Home;
