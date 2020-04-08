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
		setGuestResponse({
			...guestResponse,
			[e.target.name]: [e.target.value],
		});
	};

	return (
		<div className="whiteBox">
			<h1>RSVP form</h1>
			<form>
				<input
					type="text"
					name="name"
					id="name"
					value={guestResponse.name}
					onChange={handleGuestChange}
					placeholder="Name"
				/>
                <input
					type="text"
					name="name"
					id="name"
					value={guestResponse.name}
					onChange={handleGuestChange}
					placeholder="Name"
				/>
                <input
					type="text"
					name="name"
					id="name"
					value={guestResponse.name}
					onChange={handleGuestChange}
					placeholder="Name"
				/>
                <input
					type="text"
					name="name"
					id="name"
					value={guestResponse.name}
					onChange={handleGuestChange}
					placeholder="Name"
				/>
                <input
					type="text"
					name="songchoice"
					id="songchoice"
					placeholder="Enter a great song for our evening playlist (optional)"
				/>
				{/* {guestlist &&
					Object.values(guestlist).map((g, index) => {
						return <p key={index}>{g.name}</p>;
					})} */}
				{/* <input type="button" value="Add New Cat" />
        <input type="submit" value="Submit" />*/}
			</form>
		</div>
	);
};

export default Rsvp;
