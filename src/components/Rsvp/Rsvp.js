import React, {useState, useEffect} from "react";
import "../../styles/App.scss";

const guestDataService = process.env.NODE_ENV !== 'production'
    ? require("../../services/DummyGuestDataService")
    : require("../../services/GuestDataService");

const Rsvp = () => {

    const [guest, setGuest] = useState([]);

    useEffect(() => {
        const guests = guestDataService.GetGuestList();
        console.log(guests);
        setGuest(guests);
    },[]);

    const handleGuestChange = (e) => setGuest({
        ...guest,
        [e.target.name]: [e.target.value],
    });

    return (
        <div className="whiteBox">
            <h1>RSVP form</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={guest.name}
                    onChange={handleGuestChange}
                />
                {guest && Object.values(guest).map((g, index) => {
                    return <p key={index}>{g.name}</p>;
                })}
                {/* <input type="button" value="Add New Cat" />
        <input type="submit" value="Submit" />*/}
            </form>
        </div>
    );
}

export default Rsvp;
