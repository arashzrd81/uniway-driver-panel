import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { showToast } from "../../helper/showToast";
import "./Login.css";


const Login = () => {

    const [nCode, setNCode] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        if (!nCode || !password) {
            showToast("error", "!لطفا همه‌ی فیلدها را پر کنید");
        } else {
            axios
                .post("/login",
                    {
                        n_code: nCode,
                        password: password
                    },
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }
                )
                .then(response => {
                    localStorage.setItem("userAuth", "true");
                    localStorage.setItem("userToken", response.data.data.driverAccessToken);
                    navigate("/panel", {
                        replace: true
                    });
                    showToast("success", "شما با موفقیت وارد شدید");
                })
                .catch(response => {
                    showToast("error", "!" + response.response.data.errors.message);
                });
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>به سامانه Uniway خوش آمدید</h1>
                <input
                    type="text"
                    value={nCode}
                    onChange={event => setNCode(event.target.value)}
                    placeholder="کد ملی"
                />
                <input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="رمز ورود"
                />
                <button className="btn-yellow" type="submit">ورود به سامانه</button>
            </form>
        </div>
    );
};


export default Login;