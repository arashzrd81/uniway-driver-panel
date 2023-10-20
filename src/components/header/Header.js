import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { showToast } from "../../helper/showToast";
import logo from "../../assets/images/logo.png";
import "./Header.css";


const Header = () => {

    const {setDriver} = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        setDriver({});
        navigate("/", {
            replace: true
        });
        showToast("error", "شما با موفقیت خارج شدید");
    };

    return (
        <header>
            <section className="header-sec">
                <img src={logo} alt="" />
                <div className="logout" onClick={logout}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <span>خروج از حساب</span>
                </div>
            </section>
        </header>
    );
};


export default Header;