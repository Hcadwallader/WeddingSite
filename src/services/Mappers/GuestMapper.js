export const MapToGuests = (guestsReturnedFromLookup) => {
	let guestResponse = {};

	for (const g of guestsReturnedFromLookup.guests) {
		let shouldBeOpen = g === guestsReturnedFromLookup.guests[0];
		guestResponse[g.name] = CreateNewGuest(g, shouldBeOpen);
	}
	return guestResponse;
};

const CreateNewGuest = (guest, shouldBeOpen) => {
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
		isOpen: shouldBeOpen,
	};
};
