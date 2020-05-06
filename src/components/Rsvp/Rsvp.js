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
	const [guestlist, setGuest] = useState([]);
	const [guestResponse, setGuestResponse] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [hasResponded, setHasResponded] = useState(false);
	const [isAttending, setIsAttending] = useState();

	useEffect(() => {
		const guests = guestDataService.GetGuestList();
		console.log(guests);
		setGuest(guests);
	}, []);

	/*const lookupGuestOnInviteList = (valueEntered) => {
       const guestfound = guestlist.find(g => g.name > valueEntered)
       const listOfRelatedGuests = guestlist.filter(g => g.relatives.)
    }
*/
	const handleGuestChange = (e) => {
		const { name, value } = e.target;
		setGuestResponse({ ...guestResponse, [name]: value });
		console.log(guestResponse);
	};

	const handleGuestLogin = (e) => {
		console.log(e);
		setIsAuthenticated(true);
	};

	const handleGuestRsvpSubmission = (e) => {
		console.log(e);
		setHasResponded(true);
		setIsAttending(true);
	};

	return (
		<div className="whiteBox rsvpContainer">
			<div className="formContainer">
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
					></Form>
				)}
				{isAuthenticated && hasResponded && (
					<SummaryPage isAttending={isAttending}></SummaryPage>
				)}
			</div>
		</div>
	);
};
export default Rsvp;
