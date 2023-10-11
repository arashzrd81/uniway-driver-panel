import React from "react";
import "./EditAccountInfo.css";


const EditAccountInfo = ({setBox}) => {
    return (
        <section className="edit-account-info-sec">
            <div className="fields">
                <fieldset>
                    <legend>نام</legend>
                    <input type="text" />
                </fieldset>
                <fieldset>
                    <legend>نام خانوادگی</legend>
                    <input type="text" />
                </fieldset>
                <fieldset>
                    <legend>شماره همراه</legend>
                    <div className="phone-number">
                        <input type="text" style={{textAlign: "left"}} />
                        <span>98+</span>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>کد ملی</legend>
                    <input type="text" style={{textAlign: "left"}} />
                </fieldset>
            </div>
            <div className="buttons">
                <button className="btn-outline-blue" onClick={() => setBox("account-info")}>انصراف</button>
                <button className="btn-yellow" onClick={() => setBox("account-info")}>ثبت تغییرات</button>
            </div>
        </section>
    );
};


export default EditAccountInfo;