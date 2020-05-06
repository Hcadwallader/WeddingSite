import React from 'react';
import '../../styles/App.scss';
import './Rsvp.scss';

const Form = ({
	handleGuestChange,
	handleGuestRsvpSubmission,
	guestResponse,
	isAttending,
}) => (
	<div className="whiteBox rsvpContainer">
		<div className="formContainer">
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
				<div className="radiobuttons">
					<input
						className="radioButtons"
						name="attending"
						id="Yes"
						onChange={(e) => handleGuestChange(e)}
						onBlur={(e) => handleGuestChange(e)}
						value="true"
						checked={isAttending !== null && isAttending}
						type="radio"
					/>
					<label htmlFor="Yes">Yes, wouldn’t miss it</label>

					<input
						className="radioButtons"
						name="attending"
						id="No"
						onChange={(e) => handleGuestChange(e)}
						onBlur={(e) => handleGuestChange(e)}
						value="false"
						checked={isAttending !== null && !isAttending}
						type="radio"
					/>
					<label htmlFor="No">No, can’t make it</label>
				</div>
			</div>
			{isAttending !== null && isAttending && (
				<React.Fragment>
					<div className="formItem">
						<select
							name="starter"
							onChange={(e) => handleGuestChange(e)}
							onBlur={(e) => handleGuestChange(e)}
						>
							{' '}
							<option>
								Please select which starter you would like
							</option>
							<option value="pate">
								Pate with Grilled Ciabatta
							</option>
							<option value="cockles">
								Cockles and Bacon with Laverbread
							</option>
							<option value="salad">
								Squash, Artichoke and Feta Salad (V)
							</option>
						</select>
					</div>
					<div className="formItem">
						<select
							name="main"
							onChange={(e) => handleGuestChange(e)}
							onBlur={(e) => handleGuestChange(e)}
						>
							{' '}
							<option>
								Please select which main course you would like
							</option>
							<option value="salmon">
								Salmon Fillet with Tarragon Sauce
							</option>
							<option value="chicken">
								Mozerella and Spinach Stuffed Chicken
							</option>
							<option value="tart">
								Leek, Goat’s Cheese, Walnut and Lemon Tart (V)
							</option>
						</select>
					</div>
					<div className="formItem">
						<input
							type="text"
							name="dietaryRequirements"
							id="dietaryRequirements"
							onChange={(e) => handleGuestChange(e)}
							onBlur={(e) => handleGuestChange(e)}
							placeholder="Any dietary requirements"
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
				</React.Fragment>
			)}
			<div className="formItem">
				<button
					type="button"
					onClick={(e) => handleGuestRsvpSubmission(e)}
				>
					Submit
				</button>
			</div>
		</div>
	</div>
);

export default Form;
