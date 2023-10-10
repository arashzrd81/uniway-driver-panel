import React from "react";
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
                <div className="trip">
                    <span className="info">جستجوی مسافر بر اساس</span>
                    <input type="text" placeholder="تاریخ حرکت" />
                </div>
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
        <div className="trip">
            <span className="info">تهران به قزوین، ساعت 8:30</span>
            <button className="btn-yellow">مشاهده سفر</button>
        </div>
    );
};


export default Trips;