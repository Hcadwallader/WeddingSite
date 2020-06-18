import { MapToGuests } from './Mappers/GuestMapper';
import { Guests } from './TestData/Guests';

export const getGuestList = async (guestsResponses) => {
	return MapToGuests(Guests);
};

export const submitResponses = (guestsResponses) => {
	return true;
};
