import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { showToast } from "../../helper/showToast";
import logo from "../../assets/images/logo.png";
import "./Header.css";


const Header = ({page}) => {

    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const [dropDown, setDropDown] = useState(false);
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
                {
                    page === "panel" ?
                    <div className="part" onClick={logout}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>خروج از حساب</span>
                    </div> :
                    <div className="drop-down">
                        <div className="part" onClick={() => setDropDown(!dropDown)}>
                            <i className="fa-regular fa-user"></i>
                            <span>{firstName + " " + lastName}</span>
                            {
                                dropDown ?
                                <i className="fa-solid fa-chevron-up"></i> :
                                <i className="fa-solid fa-chevron-down"></i>
                            }
                        </div>
                        <div className={dropDown ? "menu" : "menu menu-hidden"}>
                            <div className="part" onClick={() => navigate("/panel")}>
                                <i className="fa-solid fa-bus-simple"></i>
                                <span>سفرهای من</span>
                            </div>
                            <div className="part" onClick={logout}>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                <span>خروج از حساب</span>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </header>
    );
};


export default Header;