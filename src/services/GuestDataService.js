import { MapToGuests } from './guestMapper';

const url = 'https://schwanwedding.com/api/';

export const getGuestList = async (guestResponse) => {
	let authTokenResponse = await fetch(url + 'login', {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		method: 'POST',
		body: JSON.stringify({
			name: guestResponse.name,
			code: guestResponse.accessCode,
		}),
	});
	let data = await authTokenResponse.json();
	window.localStorage.setItem('token', data.token);
	let guestListResponse = await fetch(url + 'group', {
		headers: {
			Authorization: `Bearer ${data.token}`,
		},
		credentials: 'include',
		method: 'GET',
	});
	let guests = await guestListResponse.json();

	let mappedGuest = MapToGuests(guests);
	return mappedGuest;
};

export const submitResponses = (guestsResponses) => {
	Object.values(guestsResponses).map((guest) => {
		return fetch(url + 'guests/' + guest.id, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem('token')}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify(guest),
		});
	});
};
