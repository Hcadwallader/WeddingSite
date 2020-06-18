export const MapToGuests = (guestsReturnedFromLookup) => {
	let guestResponse = {};

	for (const g of guestsReturnedFromLookup.guests) {
		guestResponse[g.name] = CreateNewGuest(g);
	}
	return guestResponse;
};

const CreateNewGuest = (guest) => {
	return {
		name: guest.name,
		id: guest.id,
		groupId: guest.groupId,
		attending: guest.attending,
		starter: guest.starter,
		main: guest.main,
		dietaryRequirements: guest.dietaryRequirements,
		songChoice: guest.songChoice,
		winePreference: guest.winePreference,
		isOpen: false,
	};
};
