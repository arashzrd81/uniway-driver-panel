import React, { useState } from "react";
import Info from "../info/Info";
import "./TripDetails.css";


const TripDetails = ({info}) => {

    const [showDetails, setShowDetails] = useState(true);

    return (
        <section className="trip-details-sec">
            <div className="title">
                <h2>اطلاعات سفر</h2>
                {
                    showDetails ?
                    <i className="fa-solid fa-chevron-up" onClick={() => setShowDetails(false)}></i> :
                    <i className="fa-solid fa-chevron-down" onClick={() => setShowDetails(true)}></i>
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