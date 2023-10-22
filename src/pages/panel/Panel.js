import React, { useState, useContext, useEffect } from "react";
import axios from "../../api/axios";
import { AuthContext } from "../../context/AuthProvider";
import Header from "../../components/header/Header";
import Profile from "../../components/profile/Profile";
import Trips from "../../components/trips/Trips";
import AccountInfo from "../../components/account-info/AccountInfo";
import EditAccountInfo from "../../components/edit-account-info/EditAccountInfo";
import Footer from "../../components/footer/Footer";
import { showToast } from "../../helper/showToast";
import "./Panel.css";


const Panel = () => {

    const [box, setBox] = useState("trips");
    const [trips, setTrips] = useState([]);
    const [todayTrips, setTodayTrips] = useState([]);
    const [futureTrips, setFutureTrips] = useState([]);
    const [pfp, setPfp] = useState({
        preview: "",
        data: ""
    });
    const {setDriver} = useContext(AuthContext);

    useEffect(() => {
        getProfile();
        getTrips();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getProfile = () => {
        axios
            .get("/profile",
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("userToken")}`
                    }
                }
            )
            .then(response => {
                const driverData = response.data.data.driver;
                setDriver({
                    nCode: driverData.n_code,
                    firstName: driverData.first_name,
                    lastName: driverData.last_name,
                    pfp: "https://api.uniways.ir/" + driverData.image,
                    password: driverData.password
                });
                localStorage.setItem("firstName", driverData.first_name);
                localStorage.setItem("lastName", driverData.last_name);
            })
            .catch(() => {
                showToast("error", "!خطای غیرمنتظره‌ای رخ داد");
            });
    };

    const getTrips = () => {
        axios
            .get("/DriverTravels",
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("userToken")}`
                    }
                }
            )
            .then(response => {
                const allTrips = response.data.data.travels;
                setTrips(allTrips);
                const currentDate = new Date().toLocaleDateString("fa-IR-u-nu-latn");
                setTodayTrips(allTrips.filter(
                    trip => trip.date_departure === currentDate
                ));
                const tomorrowDate = getTomorrowDate(currentDate.split("/"));
                setFutureTrips(allTrips.filter(
                    trip => trip.date_departure === tomorrowDate
                ));
            })
            .catch(() => {
                showToast("error", "!خطای غیرمنتظره‌ای رخ داد");
            });
    };

    const getTomorrowDate = (currentDate) => {
        let year = Number(currentDate[0])
        let month = Number(currentDate[1]);
        let day = Number(currentDate[2]);
        if (month < 7) {
            if (day < 31) {
                day++;
            } else {
                day = 1;
                month++;
            }
        } else if (month < 12) {
            if (day < 30) {
                day++;
            } else {
                day = 1;
                month++;
            }
        } else {
            if (day < 29) {
                day++;
            } else {
                day = 1;
                month = 1;
                year++;
            }
        }
        return year + "/" + month + "/" + day;
    };

    return (
        <div className="container panel-container">
            <Header page="panel" />
            <main>
                <section className="main-sec">
                    <Profile box={box} setBox={setBox} pfp={pfp} setPfp={setPfp} />
                    {
                        box === "trips" ?
                        <Trips
                            trips={trips}
                            todayTrips={todayTrips}
                            futureTrips={futureTrips}
                            setFutureTrips={setFutureTrips}
                        /> :
                        box === "account-info" ?
                        <AccountInfo setBox={setBox} /> :
                        box === "edit-account-info" &&
                        <EditAccountInfo setBox={setBox} pfp={pfp} setPfp={setPfp} />
                    }
                </section>
            </main>
            <Footer />
        </div>
    );
};


export default Panel;