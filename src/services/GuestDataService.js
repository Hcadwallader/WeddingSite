import { Guests } from '../testData/guests';
import { MapToGuests } from './guestMapper';

export const GetGuestList = ({ guestResponse }) => {
	const familyGroup = Guests[guestResponse.accessCode];
	return MapToGuests(familyGroup);
};
