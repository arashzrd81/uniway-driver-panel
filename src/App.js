import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import "./App.css";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/panel" element={<Panel />} />
        </Routes>
    );
};


export default App;