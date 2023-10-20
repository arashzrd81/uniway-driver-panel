import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import "./Profile.css";


const Profile = ({box, setBox, pfp, setPfp}) => {

    const {driver} = useContext(AuthContext);

    const onChange = event => {
        const file = event.target.files[0];
        setPfp({
            preview: URL.createObjectURL(file),
            data: file
        });
    };

    return (
        <section className="profile-sec">
            <div className="avatar">
                <img
                    src={box === "edit-account-info" && pfp.preview ? pfp.preview : driver.pfp}
                    alt=""
                />
                {
                    box === "edit-account-info" &&
                    <div className="camera">
                        <label htmlFor="upload-img">
                            <i className="fa-solid fa-camera"></i>
                        </label>
                        <input id="upload-img" type="file" onChange={onChange} />
                    </div>
                }
                {
                    Array(6).fill().map(
                        (item, index) => <span key={index}></span>
                    )
                }
            </div>
            <span className="username">
                {
                    driver.firstName && driver.lastName &&
                    driver.firstName + " " + driver.lastName
                }
            </span>
            <div className="buttons">
                <button
                    className={box === "trips" ? "btn-blue" : "btn-outline-blue"}
                    onClick={() => setBox("trips")}
                >
                    <i className="fa-solid fa-bus-simple"></i>
                    <span>سفرهای من</span>
                </button>
                <button
                    className={box === "trips" ? "btn-outline-blue" : "btn-blue"}
                    onClick={() => setBox("account-info")}
                >
                    <i className="fa-regular fa-user"></i>
                    <span>اطلاعات حساب کاربری</span>
                </button>
            </div>
        </section>
    );
};


export default Profile;