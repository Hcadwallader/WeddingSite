import { MapToGuests } from './guestMapper';
import { Guests } from '../testData/guests';

export const getGuestList = async (guestsResponses) => {
	return MapToGuests(Guests);
};

export const submitResponses = (guestsResponses) => {
	return true;
};
