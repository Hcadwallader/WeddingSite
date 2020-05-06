import React, { useState, useEffect } from 'react';
import Login from './Login';
import Form from './Form';
import SummaryPage from './SummaryPage';

import '../../styles/App.scss';
import './Rsvp.scss';

const guestDataService =
	process.env.NODE_ENV !== 'production'
		? require('../../services/DummyGuestDataService')
		: require('../../services/GuestDataService');

const Rsvp = () => {
	const [guestList, setGuestList] = useState([]);
	const [guestResponse, setGuestResponse] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [hasResponded, setHasResponded] = useState(false);
	const [isAttending, setIsAttending] = useState(null);

	useEffect(() => {
		const guests = guestDataService.GetGuestList();
		console.log(guests);
		setGuestList(guests);
	}, []);

	/*const lookupGuestOnInviteList = (valueEntered) => {
       const guestfound = guestlist.find(g => g.name > valueEntered)
       const listOfRelatedGuests = guestlist.filter(g => g.relatives.)
    }
*/
	const handleGuestChange = (e) => {
		const { name, value } = e.target;
		setGuestResponse({ ...guestResponse, [name]: value });

		if (name === 'attending') {
			setIsAttending(value === 'true');
		}
		console.log(guestResponse);
	};

	const handleGuestLogin = (e) => {
		console.log(e);
		setIsAuthenticated(true);
		const guests = guestDataService.GetGuestList(guestResponse);
		setGuestList(guests);
		console.log(guestList);
		//console.log(typeof guestList);
	};

	const handleGuestRsvpSubmission = (e) => {
		console.log(e);
		setHasResponded(true);
	};

	return (
		<React.Fragment>
			{!isAuthenticated && (
				<Login
					handleGuestChange={handleGuestChange}
					handleGuestLogin={handleGuestLogin}
					guestResponse={guestResponse}
				></Login>
			)}
			{isAuthenticated && !hasResponded && (
				<Form
					handleGuestChange={handleGuestChange}
					handleGuestRsvpSubmission={handleGuestRsvpSubmission}
					guestResponse={guestResponse}
					guestList={guestList}
					isAttending={isAttending}
				></Form>
			)}
			{isAuthenticated && hasResponded && (
				<SummaryPage isAttending={isAttending}></SummaryPage>
			)}
		</React.Fragment>
	);
};
export default Rsvp;
