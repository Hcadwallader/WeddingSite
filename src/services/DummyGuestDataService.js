import {Guests} from '../testData/guests';
import {MapToGuests} from './guestMapper';

// export const GetGuestList = () => {
// 	const familyGroup = Guests[1];
// 	return MapToGuests(familyGroup);
// };

const url = "http://localhost:8080/api/";
// const url = "https://schwanwedding.com/api/";

export const getGuestList = async (guestResponse) => {
    let authTokenResponse = await fetch(url + 'login', {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        method: 'POST',
        body: JSON.stringify({
            name: guestResponse.name,
            code: guestResponse.accessCode,
        }),
    });
    let data = await authTokenResponse.json();
    console.log(data.token);
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
    console.log(mappedGuest);
    return mappedGuest;
};

export const submitResponses = async (guestsResponses) => {
    console.log("Submitting guest responses " + guestsResponses);
    for (const key of Object.keys(guestsResponses)) {
        console.log("Processing " + key + " response of " + guestsResponses[key]);

        // let response = await fetch('https://schwanwedding.com/api/group', {
        let response = await fetch(url + 'guests/' + guestsResponses[key]["id"], {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem('token')}`,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(guestsResponses[key])
		});
		let responseJson = await response.json();
    }

};
