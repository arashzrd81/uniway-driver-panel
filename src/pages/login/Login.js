import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {

    const navigate = useNavigate();

    const onSubmit = event => {
        event.preventDefault();
        navigate("/panel");
    };

    return (
        <div className="login-container">
            <form onSubmit={onSubmit}>
                <h1>به سامانه Uniway خوش آمدید</h1>
                <input type="text" placeholder="کد ملی" />
                <input type="password" placeholder="رمز ورود" />
                <button className="btn-yellow" type="submit">ورود به سامانه</button>
            </form>
        </div>
    );
};


export default Login;