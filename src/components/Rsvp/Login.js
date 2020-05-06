import React from 'react';
import '../../styles/App.scss';
import './Rsvp.scss';

const Login = ({ handleGuestChange, handleGuestLogin, guestResponse }) => (
	<React.Fragment>
		<div className="formItem">
			<h1>Login</h1>
		</div>
		<div className="formItem">
			<input
				type="text"
				name="name"
				id="name"
				value={guestResponse.name}
				onChange={(e) => handleGuestChange(e)}
				onBlur={(e) => handleGuestChange(e)}
				placeholder="Please enter your name"
			/>
		</div>
		<div className="formItem">
			<input
				type="text"
				name="accessCode"
				id="accessCode"
				value={guestResponse.accessCode}
				onChange={(e) => handleGuestChange(e)}
				onBlur={(e) => handleGuestChange(e)}
				placeholder="Please enter the code from your invite"
			/>
		</div>
		<div className="formItem">
			<button type="button" onClick={(e) => handleGuestLogin(e)}>
				Submit
			</button>
		</div>
	</React.Fragment>
);

export default Login;
