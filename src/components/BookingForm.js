import React, { useState, useEffect } from 'react';

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");
    const [availableTimes, setAvailableTimes] = useState([]);

    useEffect(() => {
        // Call fetchAPI when date changes
        if (date) {
            fetchAPI(date)
                .then(times => {
                    setAvailableTimes(times);
                })
                .catch(error => {
                    console.error('Error fetching available times:', error);
                });
        }
    }, [date]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            date,
            time,
            guest,
            occasion
        };
        props.submitForm(formData); // Call the submitForm function passed via props
    }

    const handleChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
    }

    // Function to fetch available times for a given date
    const fetchAPI = async (date) => {
        // Mocking the API call, replace this with your actual API call
        return Promise.resolve(
            ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]
        );
    }

    return (
        <div className='booking-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e)} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="">Select a Time</option>
                    {
                        availableTimes.map(time => {
                            return <option key={time}>{time}</option>
                        })
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={(e) => setGuest(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <div className='btnReceive'>
                    <input type="submit" aria-label='On Click' value="Make Your reservation" />
                </div>
            </form>
        </div>
    );
};

export default BookingForm;