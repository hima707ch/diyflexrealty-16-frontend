import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import MenuPage from "./MenuPage/Body.jsx";
import ReservationPage from "./ReservationPage/Body.jsx";
import EventPage from "./EventPage/Body.jsx";
import DeliveryPage from "./DeliveryPage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menupage" element={<MenuPage />} />
        <Route path="/reservationpage" element={<ReservationPage />} />
        <Route path="/eventpage" element={<EventPage />} />
        <Route path="/deliverypage" element={<DeliveryPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default Body;