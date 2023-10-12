import React from "react";
import Header from "../../components/header/Header";
import TripDetails from "../../components/trip-details/TripDetails";
import PassengersList from "../../components/passengers-list/PassengersList";
import Footer from "../../components/footer/Footer";
import "./TheTrip.css";


const TheTrip = () => {
    return (
        <div className="container the-trip-container">
            <Header />
            <main>
                <section className="main-sec">
                    <TripDetails />
                    <PassengersList />
                </section>
            </main>
            <Footer />
        </div>
    );
};


export default TheTrip;