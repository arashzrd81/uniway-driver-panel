import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import TheTrip from "./pages/the-trip/TheTrip";
import "./App.css";


const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={
                    JSON.parse(localStorage.getItem("userAuth")) ?
                    <Navigate to="/panel" replace /> :
                    <Navigate to="/login" replace />
                } />
                <Route path="/login" element={
                    JSON.parse(localStorage.getItem("userAuth")) ?
                    <Navigate to="/panel" replace /> :
                    <Login />
                } />
                <Route path="/panel" element={
                    <ProtectedRoute>
                        <Panel />
                    </ProtectedRoute>
                } />
                <Route path="/trip/:id" element={
                    <ProtectedRoute>
                        <TheTrip />
                    </ProtectedRoute>
                } />
            </Routes>
        </AuthProvider>
    );
};


const ProtectedRoute = ({children}) => {
    if (JSON.parse(localStorage.getItem("userAuth"))) {
        return children;
    }
    return <Navigate to="/" replace />;
};


export default App;