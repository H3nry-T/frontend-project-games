import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "weegembump",
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayBko6Fh0dBJFOKGKGSDDuH6QeW1RrEKI3-qkTU_Y&s",
  });
  console.log(children);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
