import React, {useState, useEffect} from "react";
import "../../styles/App.scss";

const Rsvp = () => {

    const [guest, setGuest] = useState({
        name: '',
        relatives: ''
    });

    useEffect(() => {

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
                {/* <input type="button" value="Add New Cat" />
        <input type="submit" value="Submit" />*/}
            </form>
        </div>
    );
}

export default Rsvp;
