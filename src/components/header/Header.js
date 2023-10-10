import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";


const Header = () => {
    return (
        <header>
            <section className="header-sec">
                <img src={logo} alt="logo" />
                <Link to="/" className="logout">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <span>خروج از حساب</span>
                </Link>
            </section>
        </header>
    );
};


export default Header;