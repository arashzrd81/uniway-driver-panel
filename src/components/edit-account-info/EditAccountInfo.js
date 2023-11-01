import React, { useState, useContext } from "react";
import axios from "../../api/axios";
import { AuthContext } from "../../context/AuthProvider";
import { showToast } from "../../helper/showToast";
import "./EditAccountInfo.css";


const EditAccountInfo = ({setBox, pfp, setPfp}) => {

    const {driver, setDriver} = useContext(AuthContext);
    const [firstName, setFirstName] = useState(driver.firstName);
    const [lastName, setLastName] = useState(driver.lastName);

    const handleClick = () => {
        const regex = /^[\u0600-\u06FF\s]{3,20}$/;
        if (!regex.test(firstName.trim()) || !regex.test(lastName.trim())) {
            showToast("error", "!نام و نام خانوادگی معتبر وارد کنید");
        } else if (firstName === driver.firstName && lastName === driver.lastName && !pfp.data) {
            showToast("error", "!شما هنوز موردی را تغییر نداده‌اید");
        } else {
            axios
                .patch("/profile/edit",
                    {
                        first_name: firstName,
                        last_name: lastName,
                        image: pfp.data
                    },
                    {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
                            "Content-Type": "multipart/form-data"
                        }
                    }
                )
                .then(() => {
                    axios
                        .get("/profile",
                            {
                                headers: {
                                    "Authorization": `Bearer ${localStorage.getItem("userToken")}`
                                }
                            }
                        )
                        .then(response => {
                            const driverData = response.data.data.driver;
                            setDriver({
                                ...driver,
                                firstName: driverData.first_name,
                                lastName: driverData.last_name,
                                pfp: "https://api.uniways.ir/" + driverData.image
                            });
                            localStorage.setItem("firstName", driverData.first_name);
                            localStorage.setItem("lastName", driverData.last_name);
                        })
                        .catch(() => {
                            showToast("error", "!خطای غیرمنتظره‌ای رخ داد");
                        });
                    setPfp({
                        preview: "",
                        ...pfp
                    });
                    setBox("trips");
                    showToast("success", "پروفایل شما با موفقیت تغییر کرد");
                })
                .catch(() => {
                    showToast("error", "!لطفا عکس دیگری را امتحان کنید");
                })
        }
    };

    return (
        <section className="edit-account-info-sec">
            <div className="fields">
                <fieldset>
                    <legend>نام</legend>
                    <input type="text" value={firstName} onChange={event => setFirstName(event.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>نام خانوادگی</legend>
                    <input type="text" value={lastName} onChange={event => setLastName(event.target.value)} />
                </fieldset>
            </div>
            <div className="buttons">
                <button className="btn-outline-blue" onClick={() => setBox("account-info")}>انصراف</button>
                <button className="btn-yellow" onClick={handleClick}>ثبت تغییرات</button>
            </div>
        </section>
    );
};


export default EditAccountInfo;