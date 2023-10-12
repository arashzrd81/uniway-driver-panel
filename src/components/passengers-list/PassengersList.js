import React from "react";
import Search from "../search/Search";
import "./PassengersList.css";


const PassengersList = () => {
    return (
        <section className="passengers-list-sec">
            <h2>لیست مسافرها</h2>
            <Search title="جستجوی مسافر بر اساس" placeholder="شماره تلفن" />
            {
                Array(3).fill().map(
                    (item, index) => <PassengerInfo key={index} name="نام و نام خانوادگی مسافر" phoneNumber="شماره تلفن" />
                )
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