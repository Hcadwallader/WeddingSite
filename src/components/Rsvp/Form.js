import React from 'react';
import '../../styles/App.scss';
import './Rsvp.scss';

const Form = ({
	handleGuestChange,
	currentGuest,
	handleToggleGuestForm,
	rowIndex,
}) => (
	<React.Fragment>
		<div className="formItem">
			<button
				className="nameBanner"
				onClick={(e) =>
					handleToggleGuestForm(e, currentGuest.isOpen, currentGuest)
				}
			>
				{currentGuest.name}
			</button>
		</div>
		{currentGuest && currentGuest.isOpen && (
			<React.Fragment>
				<div className="formItem">
					<div className="radiobuttons">
						<input
							className="radioButtons"
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
							className="radioButtons"
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
						<div className="formItem">
							<select
								name="starter"
								onChange={(e) =>
									handleGuestChange(e, currentGuest)
								}
								onBlur={(e) =>
									handleGuestChange(e, currentGuest)
								}
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
								onChange={(e) =>
									handleGuestChange(e, currentGuest)
								}
								onBlur={(e) =>
									handleGuestChange(e, currentGuest)
								}
							>
								{' '}
								<option>
									Please select which main course you would
									like
								</option>
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
							</select>
						</div>
						<div className="formItem">
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
							/>
						</div>
						<div className="formItem">
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
							/>
						</div>
					</React.Fragment>
				)}
			</React.Fragment>
		)}
	</React.Fragment>
);

export default Form;
