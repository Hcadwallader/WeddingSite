import React from 'react';
import '../styles/App.scss';
import '../pages/Rsvp/Rsvp.scss';

const Form = ({
	handleGuestChange,
	currentGuest,
	handleToggleGuestForm,
	rowIndex,
}) => (
	<React.Fragment>
		<div className="form-item">
			<button
				className="name-banner"
				onClick={(e) =>
					handleToggleGuestForm(e, currentGuest.isOpen, currentGuest)
				}
			>
				{currentGuest.name}
			</button>
		</div>
		{currentGuest && currentGuest.isOpen && (
			<React.Fragment>
				<div className="form-item">
					<div className="radiobuttons">
						<input
							className="radio-buttons"
							name={'attending ' + rowIndex}
							id="Yes"
							onChange={(e) => handleGuestChange(e, currentGuest)}
							onBlur={(e) => handleGuestChange(e, currentGuest)}
							value={true}
							checked={
								currentGuest.attending !== null &&
								currentGuest.attending
							}
							type="radio"
						/>
						<label htmlFor="Yes">Yes, wouldn’t miss it</label>

						<input
							className="radio-buttons"
							name={'attending ' + rowIndex}
							id="No"
							onChange={(e) => handleGuestChange(e, currentGuest)}
							onBlur={(e) => handleGuestChange(e, currentGuest)}
							value={false}
							checked={
								currentGuest.attending !== null &&
								!currentGuest.attending
							}
							type="radio"
						/>
						<label htmlFor="No">No, can’t make it</label>
					</div>
				</div>
				{currentGuest !== null && currentGuest.attending && (
					<React.Fragment>
						<div className="form-item">
							<select
								name="starter"
								onChange={(e) =>
									handleGuestChange(e, currentGuest)
								}
								onBlur={(e) =>
									handleGuestChange(e, currentGuest)
								}
								value={currentGuest.starter}
							>
								{' '}
								<option>Please select a starter</option>
								<option value="pate">
									Pate with Grilled Ciabatta
								</option>
								<option value="cockles">
									Cockles and Bacon with Laverbread
								</option>
								<option value="salad">
									Squash, Artichoke and Feta Salad (V)
								</option>
								<option value="na">N/A</option>
							</select>
						</div>
						<div className="form-item">
							<select
								name="main"
								onChange={(e) =>
									handleGuestChange(e, currentGuest)
								}
								onBlur={(e) =>
									handleGuestChange(e, currentGuest)
								}
								value={currentGuest.main}
							>
								{' '}
								<option>Please select a main course</option>
								<option value="salmon">
									Salmon Fillet with Tarragon Sauce
								</option>
								<option value="chicken">
									Mozerella and Spinach Stuffed Chicken
								</option>
								<option value="tart">
									Leek, Goat’s Cheese, Walnut and Lemon Tart
									(V)
								</option>
								<option value="na">N/A</option>
							</select>
						</div>
						<div className="form-item">
							<input
								type="text"
								name="dietaryRequirements"
								id="dietaryRequirements"
								onChange={(e) =>
									handleGuestChange(e, currentGuest)
								}
								onBlur={(e) =>
									handleGuestChange(e, currentGuest)
								}
								placeholder="Any dietary requirements"
								value={currentGuest.dietaryRequirements}
							/>
						</div>
						<div className="form-item">
							<select
								name="winePreference"
								onChange={(e) =>
									handleGuestChange(e, currentGuest)
								}
								onBlur={(e) =>
									handleGuestChange(e, currentGuest)
								}
								value={currentGuest.winePreference}
							>
								{' '}
								<option>
									Please select your wine preference
								</option>
								<option value="white">White</option>
								<option value="red">Red</option>
								<option value="both">I'm not picky</option>
								<option value="none">Not for me thanks</option>
							</select>
						</div>
						<div className="form-item">
							<input
								type="text"
								name="songChoice"
								id="songChoice"
								onChange={(e) =>
									handleGuestChange(e, currentGuest)
								}
								onBlur={(e) =>
									handleGuestChange(e, currentGuest)
								}
								placeholder="Enter a great song for our evening playlist (optional)"
								value={currentGuest.songChoice}
							/>
						</div>
					</React.Fragment>
				)}
			</React.Fragment>
		)}
	</React.Fragment>
);

export default Form;
