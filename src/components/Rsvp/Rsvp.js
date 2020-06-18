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
	const [guestResponse, setGuestResponse] = useState({
		name: '',
		accessCode: '',
	});
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [hasResponded, setHasResponded] = useState(false);
	const [isAttending, setIsAttending] = useState(null);
	const [loginError, setLoginError] = useState(null);

	const handleLoginFormChange = (e) => {
		const { name, value } = e.target;
		setGuestResponse({ ...guestResponse, [name]: value });
	};

	const handleGuestChange = (e, currentGuest) => {
		const { name, value } = e.target;

		const newKey = name.includes('attending') ? name.slice(0, 9) : name;
		const newValue = name.includes('attending') ? value === 'true' : value;

		currentGuest[newKey] = newValue;
		setGuestResponse({ ...guestResponse, ...currentGuest });
	};

	const handleGuestLogin = (e) => {
		guestDataService.getGuestList(guestResponse).then((guest) => {
			if (guest) {
				setGuestList(guest);
				setIsAuthenticated(true);
			} else {
				setLoginError(
					'Unable to login, please double check the information on your invite and try again'
				);
			}
		});
	};

	const handleGuestRsvpSubmission = (e, guestList) => {
		guestDataService.submitResponses(guestList);
		setHasResponded(true);
		const isAttending = Object.values(guestList).some((g) => g.attending);
		setIsAttending(isAttending);
	};

	const handleToggleGuestForm = (e, isOpen, currentGuest) => {
		currentGuest['isOpen'] = !isOpen;
		setGuestResponse({ ...guestResponse, ...currentGuest });
		Object.values(guestList)
			.filter((g) => g.name !== currentGuest.name)
			.map((ng) => (ng.isOpen = false));
	};

	return (
		<React.Fragment>
			{!isAuthenticated && (
				<Login
					handleGuestChange={handleLoginFormChange}
					handleGuestLogin={handleGuestLogin}
					guestResponse={guestResponse}
					loginError={loginError}
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
									rowIndex={index}
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
						<div className="formItem">
							<button
								type="button"
								onClick={(e) =>
									handleGuestRsvpSubmission(e, guestList)
								}
							>
								Submit
							</button>
						</div>
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
