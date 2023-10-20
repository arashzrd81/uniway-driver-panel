import React, { useState } from "react";
import "./PassengersList.css";


const PassengersList = ({passengers}) => {

    const [showMore, setShowMore] = useState(false);

    return (
        <section className="passengers-list-sec">
            <h2>لیست مسافرها</h2>
            {
                passengers.slice(0, 3).map((passenger, index) =>
                    <PassengerInfo
                        key={index}
                        name={passenger.first_name + " " + passenger.last_name}
                        phoneNumber={passenger.phone}
                    />
                )
            }
            {
                showMore ?
                <>
                    {
                        passengers.slice(3, ).map((passenger, index) =>
                            <PassengerInfo
                                key={index}
                                name={passenger.first_name + " " + passenger.last_name}
                                phoneNumber={passenger.phone}
                            />
                        )
                    }
                    <div className="show" onClick={() => setShowMore(false)}>
                        <span>نمایش کمتر</span>
                        <i className="fa-solid fa-chevron-up"></i>
                    </div>
                </> :
                <div className="show" onClick={() => setShowMore(true)}>
                    <span>نمایش بیشتر</span>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            }
        </section>
    );
};


const PassengerInfo = ({name, phoneNumber}) => {
    return (
        <div className="passenger-info list-item">
            <span>{name}</span>
            <span>{phoneNumber}</span>
        </div>
    );
};


export default PassengersList;