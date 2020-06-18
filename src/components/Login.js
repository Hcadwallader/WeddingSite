import React from 'react';
import '../styles/App.scss';
import '../pages/Rsvp/Rsvp.scss';

const Login = ({
	handleGuestChange,
	handleGuestLogin,
	guestResponse,
	loginError,
}) => (
	<div className="white-box login-container">
		<div className="form-container">
			<div className="form-item">
				<h1>Login</h1>
			</div>
			<div className="form-item">
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
			<div className="form-item">
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
			{loginError && (
				<div className="form-item">
					<p className="login-text">{loginError}</p>
				</div>
			)}
			<div className="form-item">
				<button type="button" onClick={(e) => handleGuestLogin(e)}>
					Submit
				</button>
			</div>
		</div>
	</div>
);

export default Login;
