import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [userEmail, setUserEmail] = useState(null);
    const [favourites, setFavourites] = useState(null);
    return (
        <UserContext.Provider value={{ userEmail, setUserEmail, favourites, setFavourites }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
