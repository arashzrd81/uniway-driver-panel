import React from "react";
import "./ChangePassword.css";


const ChangePassword = ({closeChangePassword}) => {
    return (
        <section className="change-password-sec">
            <div>
                <i className="fa-solid fa-xmark" onClick={closeChangePassword}></i>
                <form>
                    <h1>تغییر رمز ورود</h1>
                    <input type="password" placeholder="رمز ورود فعلی" />
                    <div className="new-password">
                        <input type="password" placeholder="رمز ورود جدید" />
                        <input type="password" placeholder="تکرار رمز ورود" />
                    </div>
                    <button className="btn-yellow" type="submit">تغییر رمز ورود</button>
                </form>
            </div>
        </section>
    );
};


export default ChangePassword;