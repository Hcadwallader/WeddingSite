import React, { useEffect, useState } from 'react';
import Timer from './timer';

const TimerContainer = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const countdown = (endDate) => {
		endDate = new Date(endDate).getTime();
		if (isNaN(endDate)) {
			return;
		}

		const calculate = () => {
			let startDate = new Date().getTime();

			let timeRemaining = parseInt((endDate - startDate) / 1000);

			if (timeRemaining >= 0) {
				setDays(parseInt(timeRemaining / 86400));
				timeRemaining = timeRemaining % 86400;

				setHours(parseInt(timeRemaining / 3600));
				timeRemaining = timeRemaining % 3600;

				setMinutes(parseInt(timeRemaining / 60));
				timeRemaining = timeRemaining % 60;

				setSeconds(parseInt(timeRemaining));
			} else {
				return;
			}
		};
		setInterval(calculate, 1000);
	};

	useEffect(() => {
		countdown('12/25/2020 0:00:01 AM');
	}, ['']);

	return (
		<Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
	);
};

export default TimerContainer;
