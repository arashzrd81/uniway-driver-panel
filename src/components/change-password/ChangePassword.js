import React, { useState, useContext } from "react";
import axios from "../../api/axios";
import { AuthContext } from "../../context/AuthProvider";
import { showToast } from "../../helper/showToast";
import "./ChangePassword.css";


const ChangePassword = ({closeChangePassword}) => {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const {driver, setDriver} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        if (!currentPassword || !newPassword || !repeatPassword) {
            showToast("error", "!لطفا همه‌ی فیلدها را پر کنید");
        } else if (driver.password !== currentPassword) {
            showToast("error", "!رمز ورود فعلی نادرست وارد شده‌است");
        } else if (newPassword.length < 6) {
            showToast("error", "!رمز ورود باید بیشتر از 6 نویسه باشد");
        } else if (newPassword !== repeatPassword) {
            showToast("error", "!رمز ورود جدید با تکرارش مطابقت ندارد");
        } else {
            axios
                .patch("/profile/edit",
                    {
                        password: newPassword
                    },
                    {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
                            "Content-Type": "multipart/form-data"
                        }
                    }
                )
                .then(() => {
                    setDriver({
                        ...driver,
                        password: newPassword
                    });
                    closeChangePassword();
                    showToast("success", "رمز ورود شما با موفقیت تغییر کرد");
                })
                .catch(() => {
                    showToast("error", "!خطای غیرمنتظره‌ای رخ داد");
                })
        }
    };

    return (
        <section className="change-password-sec">
            <div>
                <i className="fa-solid fa-xmark" onClick={closeChangePassword}></i>
                <form onSubmit={handleSubmit}>
                    <h1>تغییر رمز ورود</h1>
                    <input
                        type="password"
                        value={currentPassword}
                        placeholder="رمز ورود فعلی"
                        onChange={event => setCurrentPassword(event.target.value)}
                    />
                    <div className="new-password">
                        <input
                            type="password"
                            value={newPassword}
                            placeholder="رمز ورود جدید"
                            onChange={event => setNewPassword(event.target.value)}
                        />
                        <input
                            type="password"
                            value={repeatPassword}
                            placeholder="تکرار رمز ورود"
                            onChange={event => setRepeatPassword(event.target.value)}
                        />
                    </div>
                    <button className="btn-yellow">تغییر رمز ورود</button>
                </form>
            </div>
        </section>
    );
};


export default ChangePassword;