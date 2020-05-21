import { Guests } from '../testData/guests';
import { MapToGuests } from './guestMapper';

export const GetGuestList = () => {
	const familyGroup = Guests[1];
	return MapToGuests(familyGroup);
};
