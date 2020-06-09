import { Guests } from '../testData/guests';
import { MapToGuests } from './guestMapper';

export const GetGuestList = () => {
	const familyGroup = Guests[1];
	return MapToGuests(familyGroup);
};

export const LoginGuest = async (guestResponse) => {
	console.log('running LoginGuest method');
	const authToken = await fetch('https://schwanwedding.com/api/login', {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		method: 'POST',
		body: JSON.stringify({
			name: guestResponse.name,
			code: guestResponse.accessCode,
		}),
	}).then((response) => response.json());

	if (authToken.token) {
		window.localStorage.setItem('token', authToken.token);
		const guests = await fetch('https://schwanwedding.com/api/group', {
			headers: {
				Authorization: `Bearer ${authToken.token}`,
			},
			credentials: 'include',
			method: 'GET',
		}).then((response) => response.json());
		return guests;
	} else {
		console.log(authToken);
		return authToken;
	}
};
