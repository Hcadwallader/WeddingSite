import React from 'react';
import '../../styles/App.scss';
import './Rsvp.scss';

const Form = ({
	handleGuestChange,
	handleGuestRsvpSubmission,
	guestResponse,
}) => (
	<React.Fragment>
		<div className="formItem">
			<h1>RSVP form</h1>
		</div>
		<div className="formItem">
			<input
				type="text"
				name="name"
				id="name"
				value={guestResponse.name}
				onChange={(e) => handleGuestChange(e)}
				onBlur={(e) => handleGuestChange(e)}
				placeholder="Name"
			/>
		</div>
		<div className="formItem">
			<div className="radioButtons">
				<input
					name="isAttending"
					id="Yes"
					onChange={(e) => handleGuestChange(e)}
					onBlur={(e) => handleGuestChange(e)}
					value={guestResponse.attending}
					type="radio"
					checked
				/>
				<label htmlFor="Yes">Yes</label>
				<input
					name="isAttending"
					id="No"
					onChange={(e) => handleGuestChange(e)}
					onBlur={(e) => handleGuestChange(e)}
					value={guestResponse.attending}
					type="radio"
				/>
				<label htmlFor="No">No</label>
			</div>
		</div>
		<div className="formItem">
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
				onChange={(e) => handleGuestChange(e)}
				onBlur={(e) => handleGuestChange(e)}
				onChange={handleGuestChange}
				placeholder="What starter would you like?"
			/>
		</div>
		<div className="formItem">
			<input
				type="text"
				name="mainChoice"
				id="mainChoice"
				onChange={(e) => handleGuestChange(e)}
				onBlur={(e) => handleGuestChange(e)}
				onChange={handleGuestChange}
				placeholder="What main course would you like?"
			/>
		</div>
		<div className="formItem">
			<input
				type="text"
				name="songchoice"
				id="songchoice"
				onChange={(e) => handleGuestChange(e)}
				onBlur={(e) => handleGuestChange(e)}
				placeholder="Enter a great song for our evening playlist (optional)"
			/>
		</div>
		<div className="formItem">
			<button type="button" onClick={(e) => handleGuestRsvpSubmission(e)}>
				Submit
			</button>
		</div>
	</React.Fragment>
);

export default Form;
