import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import Header from "../../components/header/Header";
import TripDetails from "../../components/trip-details/TripDetails";
import PassengersList from "../../components/passengers-list/PassengersList";
import Footer from "../../components/footer/Footer";
import { showToast } from "../../helper/showToast";
import "./TheTrip.css";


const TheTrip = () => {

    const [passengers, setPassengers] = useState([]);
    const [info, setInfo] = useState([]);
    const params = useParams();

    useEffect(() => {
        getTheTrip();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getTheTrip = () => {
        axios
            .get(`/travel/${params.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("userToken")}`
                    }
                }
            )
            .then(response => {
                const theTrip = response.data.data.travel;
                setPassengers(theTrip.users);
                const makePlate = () => {
                    const part1 = theTrip.bus.plate.number.substring(0, 2);
                    const part2 = theTrip.bus.plate.number.substring(2, 5);
                    const part3 = theTrip.bus.plate.word;
                    const part4 = theTrip.bus.plate.number.substring(5, 7);
                    return part1 + " | " + part2 + " " + part3 + " " + part4;
                };
                setInfo([
                    {
                        id: 1,
                        title: "مبدا",
                        content: theTrip.origin
                    },
                    {
                        id: 2,
                        title: "مقصد",
                        content: theTrip.destination
                    },
                    {
                        id: 3,
                        title: "زمان حرکت",
                        content: theTrip.time_departure
                    },
                    {
                        id: 5,
                        title: "ظرفیت سفر",
                        content: theTrip.total_capacity + " نفر"
                    },
                    {
                        id: 6,
                        title: "شماره پلاک",
                        content: makePlate()
                    }
                ]);
            })
            .catch(() => {
                showToast("error", "!خطای غیرمنتظره‌ای رخ داد");
            });
    };

    return (
        <div className="container the-trip-container">
            <Header page="the-trip" />
            <main>
                <section className="main-sec">
                    <TripDetails info={info} />
                    <PassengersList passengers={passengers} />
                </section>
            </main>
            <Footer />
        </div>
    );
};


export default TheTrip;