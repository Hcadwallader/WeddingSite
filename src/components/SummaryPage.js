import React from 'react';
import '../styles/App.scss';
import '../pages/Rsvp/Rsvp.scss';

const SummaryPage = ({ isAttending }) => (
	<div className="white-box summary-container">
		<div className="form-container">
			<h2>
				Thanks for your RSVP.{' '}
				{isAttending ? (
					<span>Can't wait to see you at the wedding!</span>
				) : (
					<span>Sorry to hear you can't join us.</span>
				)}
			</h2>
		</div>
	</div>
);

export default SummaryPage;
