/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext(null)
const UserProvider = ({children}) => {
    
    const [user, setUser] = useState({
        name: 'pH',
        email: 'ph@gmail.com'
    })
    const userInfo={
        user
    }
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;