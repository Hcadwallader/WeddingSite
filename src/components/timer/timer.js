import React from 'react';
import './timer.css';
import '@bit/helencadwallader.sharedcomponents.general';

const Timer = ({ days, hours, minutes, seconds }) => (
	<React.Fragment>
		<div>This is React</div>
		<div className="countdown">
			<span className="countdown-col">
				<span className="countdown-col-element">
					<strong>{days}</strong>
					<span>days</span>
				</span>
			</span>

			<span className="countdown-col">
				<span className="countdown-col-element">
					<strong>{hours}</strong>
					<span>hours</span>
				</span>
			</span>

			<span className="countdown-col">
				<span className="countdown-col-element">
					<strong>{minutes}</strong>
					<span>minutes</span>
				</span>
			</span>

			<span className="countdown-col">
				<span className="countdown-col-element">
					<strong>{seconds}</strong>
					<span>seconds</span>
				</span>
			</span>
		</div>
	</React.Fragment>
);

export default Timer;
