export const MapToGuests = (guestsReturnedFromLookup) => {
	let guestResponse = {};

	for (const g of guestsReturnedFromLookup) {
		const guest = CreateNewGuest(g);
		guestResponse[guest.name] = guest;
	}
	return guestResponse;
};

const CreateNewGuest = (name) => {
	return {
		name: name,
		attending: null,
		starter: null,
		main: null,
		dietaryRequirements: null,
		songchoice: null,
		isOpen: false,
	};
};
