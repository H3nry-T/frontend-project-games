import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        userIsLoggedIn,
        setUserIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
