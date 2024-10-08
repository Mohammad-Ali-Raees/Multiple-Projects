import React, { useState, createContext, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { id: 1, name: "Burak" },
    { id: 2, name: "Mohammad Ali" },
    { id: 3, name: "Imran"  },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};

export const UserGlobalContext = ()=>{
  return useContext(UserContext);
}