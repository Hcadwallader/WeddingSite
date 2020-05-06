import { Guests } from '../testData/guests';

export const GetGuestList = ({ guestResponse }) => {
	const familyGroup = Guests[guestResponse.accessCode];
	return familyGroup;
};
