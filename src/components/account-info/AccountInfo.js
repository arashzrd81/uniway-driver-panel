import React from "react";
import "./AccountInfo.css";


const AccountInfo = ({setBox}) => {
    return (
        <section className="account-info-sec">
            <div className="info">
                <div>
                    <span>نام و نام خانوادگی</span>
                    <span>نام راننده در این قسمت</span>
                </div>
                <div>
                    <span>شماره همراه</span>
                    <span>09120000000</span>
                </div>
                <div>
                    <span>کد ملی</span>
                    <span>0310000000</span>
                </div>
            </div>
            <div className="buttons">
                <button className="btn-outline-blue" onClick={() => setBox("edit-account-info")}>
                    <i className="fa-solid fa-pen"></i>
                    <span>ویرایش اطلاعات کاربری</span>
                </button>
                <button className="btn-outline-blue">
                    <i className="fa-solid fa-lock"></i>
                    <span>ویرایش رمز ورود</span>
                </button>
            </div>
        </section>
    );
};


export default AccountInfo;