import { createContext, useState } from "react";
import React from "react";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "guest1",
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayBko6Fh0dBJFOKGKGSDDuH6QeW1RrEKI3-qkTU_Y&s",
  });
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
