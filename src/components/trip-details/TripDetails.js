import React, { useState } from "react";
import Info from "../info/Info";
import "./TripDetails.css";


const TripDetails = ({info}) => {

    const [showDetails, setShowDetails] = useState(true);

    return (
        <section className="trip-details-sec">
            <div className="title" onClick={() => setShowDetails(!showDetails)}>
                <h2>اطلاعات سفر</h2>
                {
                    showDetails ?
                    <i className="fa-solid fa-chevron-up"></i> :
                    <i className="fa-solid fa-chevron-down"></i>
                }
            </div>
            {
                showDetails &&
                <Info info={info} />
            }
        </section>
    );
};


export default TripDetails;