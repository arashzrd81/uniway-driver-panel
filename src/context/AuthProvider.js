import React, { createContext, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [driver, setDriver] = useState({});

    return (
        <AuthContext.Provider value={{driver, setDriver}}>
            {children}
        </AuthContext.Provider>
    )
};


export default AuthProvider;