import React, { useReducer } from "react";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route, useNavigate } from "react-router-dom";

const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

export const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        }
        if (random() < 0.5) {
            result.push(i + ":30");
        }
    }
    return result;
};

const Main2 = () => {
    const submitAPI = function (formData) {
        return true; // For demonstration purposes, always return true
    };

    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date()) };
    }

    const navigate = useNavigate();

    // Define the submitForm function
    const submitForm = async (formData) => {
        const submissionStatus = submitAPI(formData);
        if (submissionStatus) {
            navigate("/confirmed"); // Navigate to the /confirmed route
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route
                    path="/booking"
                    element={
                        <Booking
                            availableTimes={state}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} /> {/* Define the route for ConfirmedBooking */}
            </Routes>
        </main>
    );
};

export default Main2;