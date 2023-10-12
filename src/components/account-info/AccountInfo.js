import React, { useState } from "react";
import Info from "../info/Info";
import ChangePassword from "../change-password/ChangePassword";
import "./AccountInfo.css";


const info = [
    {
        id: 1,
        title: "نام و نام خانوادگی",
        content: "نام راننده در این قسمت"
    },
    {
        id: 2,
        title: "شماره همراه",
        content: "09123456789"
    },
    {
        id: 3,
        title: "کد ملی",
        content: "0312345678"
    }
];

const AccountInfo = ({setBox}) => {

    const [showChangePassword, setShowChangePassword] = useState(false);

    return (
        <section className="account-info-sec">
            <Info info={info} />
            <div className="buttons">
                <button className="btn-outline-blue" onClick={() => setBox("edit-account-info")}>
                    <i className="fa-solid fa-pen"></i>
                    <span>ویرایش اطلاعات کاربری</span>
                </button>
                <button className="btn-outline-blue" onClick={() => setShowChangePassword(true)}>
                    <i className="fa-solid fa-lock"></i>
                    <span>ویرایش رمز ورود</span>
                </button>
            </div>
            {
                showChangePassword &&
                <ChangePassword closeChangePassword={() => setShowChangePassword(false)} />
            }
        </section>
    );
};


export default AccountInfo;