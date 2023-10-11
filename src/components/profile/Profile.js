import React from "react";
import avatar from "../../assets/images/avatar.png";
import "./Profile.css";


const Profile = ({box, setBox}) => {
    return (
        <section className="profile-sec">
            <div className="avatar">
                <img src={avatar} alt="avatar" />
                {
                    Array(6).fill().map(
                        (item, index) => <span key={index}></span>
                    )
                }
            </div>
            <span className="username">نام کاربری</span>
            <div className="buttons">
                <button className={box === "trips" ? "btn-blue" : "btn-outline-blue"} onClick={() => setBox("trips")}>
                    <i className="fa-solid fa-bus-simple"></i>
                    <span>سفرهای من</span>
                </button>
                <button className={box === "trips" ? "btn-outline-blue" : "btn-blue"} onClick={() => setBox("account-info")}>
                    <i className="fa-regular fa-user"></i>
                    <span>اطلاعات حساب کاربری</span>
                </button>
            </div>
        </section>
    );
};


export default Profile;