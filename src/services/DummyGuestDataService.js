import { Guests } from '../testData/guests';
import { MapToGuests } from './guestMapper';

export const GetGuestList = () => {
	const familyGroup = Guests[1];
	return MapToGuests(familyGroup);
};

export const LoginGuest = (guestResponse) => {
	fetch('https://schwanwedding.com/api/login', {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		method: 'POST',
		body: JSON.stringify({
			name: guestResponse.name,
			code: guestResponse.accessCode,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			window.localStorage.setItem('token', data.token);
			fetch('https://schwanwedding.com/api/group', {
				headers: {
					Authorization: `Bearer ${data.token}`,
				},
				credentials: 'include',
				method: 'GET',
			})
				.then((response) => response.json())
				.then((data) => {
					// console.log(data);
					// console.log(data.guests);
					// console.log(data.guests[0]);
					// console.log(Object.values(data.guests));

					// console.log(data.guests.map((g) => g.firstName));

					MapToGuests(data.guests);
				});
		});
};
