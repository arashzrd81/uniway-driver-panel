import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Info from "../info/Info";
import ChangePassword from "../change-password/ChangePassword";
import "./AccountInfo.css";


const AccountInfo = ({setBox}) => {

    const [showChangePassword, setShowChangePassword] = useState(false);
    const [info, setInfo] = useState([]);
    const {driver} = useContext(AuthContext);

    useEffect(() => {
        setInfo([
            {
                id: 1,
                title: "نام و نام خانوادگی",
                content: driver.firstName + " " + driver.lastName
            },
            {
                id: 2,
                title: "کد ملی",
                content: driver.nCode
            }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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