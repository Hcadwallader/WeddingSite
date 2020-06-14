import { Guests } from '../testData/guests';
import { MapToGuests } from './guestMapper';

// export const GetGuestList = () => {
// 	const familyGroup = Guests[1];
// 	return MapToGuests(familyGroup);
// };

export const getGuestList = async (guestResponse) => {
	let authTokenResponse = await fetch('https://schwanwedding.com/api/login', {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		method: 'POST',
		body: JSON.stringify({
			name: guestResponse.name,
			code: guestResponse.accessCode,
		}),
	});
	let data = await authTokenResponse.json();
	console.log(data.token);
	window.localStorage.setItem('token', data.token);
	let guestListResponse = await fetch('https://schwanwedding.com/api/group', {
		headers: {
			Authorization: `Bearer ${data.token}`,
		},
		credentials: 'include',
		method: 'GET',
	});
	let guests = await guestListResponse.json();

	let mappedGuest = MapToGuests(guests);
	console.log(mappedGuest);
	return mappedGuest;
};
