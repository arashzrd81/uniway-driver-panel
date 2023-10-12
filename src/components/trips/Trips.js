import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import "./Trips.css";


const Trips = () => {
    return (
        <section className="trips-sec">
            <div className="today-trips">
                <h2>سفرهای امروز</h2>
                {
                    Array(3).fill().map(
                        (item, index) => <Trip key={index}></Trip>
                    )
                }
            </div>
            <div className="future-trips">
                <h2>سفرهای آینده</h2>
                <Search title="جستجوی سفر بر اساس" placeholder="تاریخ حرکت" />
                {
                    Array(3).fill().map(
                        (item, index) => <Trip key={index}></Trip>
                    )
                }
            </div>
        </section>
    );
};


const Trip = () => {
    return (
        <div className="trip list-item">
            <span className="title">تهران به قزوین، ساعت 8:30</span>
            <Link to="/thetrip">
                <button className="btn-yellow">مشاهده سفر</button>
            </Link>
        </div>
    );
};


export default Trips;