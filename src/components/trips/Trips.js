import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Trips.css";


const Trips = ({trips, todayTrips, futureTrips, setFutureTrips}) => {

    const [temp, setTemp] = useState([]);
    const [saveTomorrowTrips, setSaveTomorrowTrips] = useState(true);
    const [date, setDate] = useState("");

    const searchTrip = event => {
        const inputDate = event.target.value;
        setDate(inputDate);
        if (saveTomorrowTrips) {
            setTemp(futureTrips);
            setSaveTomorrowTrips(false);
        }
        if (!inputDate) {
            setFutureTrips(temp);
        } else {
            const isTrueDate = checkDate(inputDate);
            if (isTrueDate) {
                setFutureTrips(trips.filter(
                    trip => trip.date_departure === inputDate
                ));
            } else {
                setFutureTrips([]);
            }
        }
    };

    const checkDate = inputDate => {
        const enteredDate = inputDate
            .split("/")
            .map(item => Number(item));
        const currentDate = new Date().toLocaleDateString("fa-IR-u-nu-latn")
            .split("/")
            .map(item => Number(item));
        if (currentDate[0] < enteredDate[0]) {
            return true;
        } else if (currentDate[0] === enteredDate[0]) {
            if (currentDate[1] < enteredDate[1]) {
                return true;
            } else if (currentDate[1] === enteredDate[1]) {
                if (currentDate[2] < enteredDate[2]) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    return (
        <section className="trips-sec">
            <div className="today-trips">
                <h2>سفرهای امروز</h2>
                {
                    todayTrips.map(trip =>
                        <Trip
                            key={trip.id}
                            id={trip.id}
                            origin={trip.origin}
                            destination={trip.destination}
                            time={trip.time_departure}
                        >
                        </Trip>
                    )
                }
            </div>
            <div className="future-trips">
                <h2>سفرهای آینده</h2>
                <div className="search">
                    <span className="title">جستجوی مسافر بر اساس</span>
                    <input type="text" value={date} placeholder="مثلا 1402/8/10" onChange={searchTrip} />
                </div>
                {
                    futureTrips.map(trip =>
                        <Trip
                            key={trip.id}
                            id={trip.id}
                            origin={trip.origin}
                            destination={trip.destination}
                            time={trip.time_departure}
                        >
                        </Trip>
                    )
                }
            </div>
        </section>
    );
};


const Trip = ({id, origin, destination, time}) => {
    return (
        <div className="trip list-item">
            <span className="title">{origin} به {destination}، ساعت {time}</span>
            <Link to={`/trip/${id}#`}>
                <button className="btn-yellow">مشاهده سفر</button>
            </Link>
        </div>
    );
};


export default Trips;