import React, { useState } from "react";
import Info from "../info/Info";
import "./TripDetails.css";


const info = [
    {
        id: 1,
        title: "مبدا",
        content: "قزوین"
    },
    {
        id: 2,
        title: "مقصد",
        content: "تهران"
    },
    {
        id: 3,
        title: "زمان حرکت",
        content: "12:00"
    },
    {
        id: 4,
        title: "زمان رسیدن",
        content: "14:00"
    },
    {
        id: 5,
        title: "ظرفیت سفر",
        content: "35"
    },
    {
        id: 6,
        title: "شماره پلاک",
        content: "77 368 ب 56"
    }
];

const TripDetails = () => {

    const [showDetails, setShowDetails] = useState(true);

    return (
        <section className="trip-details-sec">
            <div className="title">
                <h2>اطلاعات سفر</h2>
                <i className="fa-solid fa-chevron-up" onClick={() => setShowDetails(!showDetails)}></i>
            </div>
            {
                showDetails &&
                <Info info={info} />
            }
        </section>
    );
};


export default TripDetails;