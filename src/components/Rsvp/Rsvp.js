import React, { useState, useEffect } from 'react';
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
		setIsAttending(false);
	};

	return (
		<div className="whiteBox rsvpContainer pageContainer">
			<div className="textContainer formContainer">
				{!isAuthenticated && (
					<React.Fragment>
						<h1>Login</h1>
						<input
							type="text"
							name="name"
							id="name"
							value={guestResponse.name}
							onChange={handleGuestChange}
							onBlur={handleGuestChange}
							placeholder="Please enter your name"
						/>
						<input
							type="text"
							name="accessCode"
							id="accessCode"
							value={guestResponse.accessCode}
							onChange={handleGuestChange}
							onBlur={handleGuestChange}
							placeholder="Please enter the code from your invite"
						/>
						<button type="button" onClick={handleGuestLogin}>
							Submit
						</button>
					</React.Fragment>
				)}
				{isAuthenticated && !hasResponded && (
					<React.Fragment>
						<h1>RSVP form</h1>
						<input
							type="text"
							name="name"
							id="name"
							value={guestResponse.name}
							onChange={handleGuestChange}
							placeholder="Name"
						/>
						<div className="radioButtons">
							<input
								name="isAttending"
								id="Yes"
								onChange={handleGuestChange}
								value={guestResponse.attending}
								type="radio"
								checked
							/>
							<label htmlFor="Yes">Yes</label>
							<input
								name="isAttending"
								id="No"
								onChange={handleGuestChange}
								value={guestResponse.attending}
								type="radio"
							/>
							<label htmlFor="No">No</label>
						</div>

						{/* <input
							type="text"
							name="isAttending"
							id="isAttending"
							value={guestResponse.attending}
							onChange={handleGuestChange}
							placeholder="Are you coming?"
						/> */}
						<input
							type="text"
							name="starterChoice"
							id="starterChoice"
							value={guestResponse.starterChoice}
							onChange={handleGuestChange}
							placeholder="What starter would you like?"
						/>
						<input
							type="text"
							name="mainChoice"
							id="mainChoice"
							value={guestResponse.mainChoice}
							onChange={handleGuestChange}
							placeholder="What main course would you like?"
						/>
						<input
							type="text"
							name="songchoice"
							id="songchoice"
							value={guestResponse.songchoice}
							onChange={handleGuestChange}
							placeholder="Enter a great song for our evening playlist (optional)"
						/>

						<button
							type="button"
							onClick={handleGuestRsvpSubmission}
						>
							Submit
						</button>
						{/* {guestlist &&
                         Object.values(guestlist).map((g, index) => {
                             return <p key={index}>{g.name}</p>;
                         })} */}
						{/* <input type="button" value="Add New Cat" />
             <input type="submit" value="Submit" />*/}
					</React.Fragment>
				)}
				{isAuthenticated && hasResponded && (
					<h2>
						Thanks for your RSVP.{' '}
						{isAttending ? (
							<span>Can't wait to see you at the wedding!</span>
						) : (
							<span>Sorry to hear you can't join us.</span>
						)}
					</h2>
				)}
			</div>
		</div>
	);
};
export default Rsvp;
