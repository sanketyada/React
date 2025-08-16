import { useState } from "react";
import UserContext from "./userContext";


function UserContextProvider({ children }) {
  const [user, SetUser] = useState(null);
  const data = "Sanket"
  return (
    <UserContext.Provider value={{ user, SetUser,data }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
