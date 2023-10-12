import React, { useState } from "react";
import Header from "../../components/header/Header";
import Profile from "../../components/profile/Profile";
import Trips from "../../components/trips/Trips";
import AccountInfo from "../../components/account-info/AccountInfo";
import EditAccountInfo from "../../components/edit-account-info/EditAccountInfo";
import Footer from "../../components/footer/Footer";
import "./Panel.css";


const Panel = () => {

    const [box, setBox] = useState("trips");

    return (
        <div className="container panel-container">
            <Header />
            <main>
                <section className="main-sec">
                    <Profile box={box} setBox={setBox} />
                    {
                        box === "trips" ?
                        <Trips /> :
                        box === "account-info" ?
                        <AccountInfo setBox={setBox} /> :
                        box === "edit-account-info" &&
                        <EditAccountInfo setBox={setBox} />
                    }
                </section>
            </main>
            <Footer />
        </div>
    );
};


export default Panel;