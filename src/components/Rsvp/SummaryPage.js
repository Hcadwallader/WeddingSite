import React from 'react';
import '../../styles/App.scss';
import './Rsvp.scss';

const SummaryPage = ({ isAttending }) => (
	<h2>
		Thanks for your RSVP.{' '}
		{isAttending ? (
			<span>Can't wait to see you at the wedding!</span>
		) : (
			<span>Sorry to hear you can't join us.</span>
		)}
	</h2>
);

export default SummaryPage;
