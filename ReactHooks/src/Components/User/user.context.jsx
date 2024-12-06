import React, { useContext, createContext } from "react";
import { useState } from "react";

const UserContext = createContext({
  username: "",
  password: "",
  setUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  return (
    <UserContext.Provider value={{ ...user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
