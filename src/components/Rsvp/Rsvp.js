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
	const [guestList, setGuestList] = useState(null);
	const [guestResponse, setGuestResponse] = useState({});
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [hasResponded, setHasResponded] = useState(false);
	const [isAttending, setIsAttending] = useState(null);

	const handleLoginFormChange = (e) => {
		const { name, value } = e.target;
		setGuestResponse({ ...guestResponse, [name]: value });
	};

	const handleGuestChange = (e, currentGuest) => {
		const { name, value } = e.target;
		currentGuest[name] = value;
		setGuestResponse({ ...guestResponse, ...currentGuest });
	};

	const handleGuestLogin = (e) => {
		setIsAuthenticated(true);
		const guests = guestDataService.GetGuestList(guestResponse);
		setGuestList(guests);
	};

	const handleGuestRsvpSubmission = (e) => {
		setHasResponded(true);
	};

	const handleToggleGuestForm = (e, isOpen, currentGuest) => {
		currentGuest['isOpen'] = !isOpen;
		setGuestResponse({ ...guestResponse, ...currentGuest });
	};

	return (
		<React.Fragment>
			{!isAuthenticated && (
				<Login
					handleGuestChange={handleLoginFormChange}
					handleGuestLogin={handleGuestLogin}
					guestResponse={guestResponse}
				></Login>
			)}

			{isAuthenticated && !hasResponded && guestList && (
				<div className="whiteBox rsvpContainer">
					<div className="formContainer">
						<div className="formItem">
							<h1>RSVP form</h1>
						</div>

						{Object.values(guestList).map((g, index) => {
							return (
								<Form
									key={index}
									currentGuest={g}
									handleGuestChange={handleGuestChange}
									handleGuestRsvpSubmission={
										handleGuestRsvpSubmission
									}
									isAttending={isAttending}
									handleToggleGuestForm={
										handleToggleGuestForm
									}
								></Form>
							);
						})}
					</div>
				</div>
			)}

			{isAuthenticated && hasResponded && (
				<SummaryPage isAttending={isAttending}></SummaryPage>
			)}
		</React.Fragment>
	);
};
export default Rsvp;
