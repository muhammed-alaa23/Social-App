import { createContext, useEffect, useState } from "react";
import { getUserDataApi } from "../services/authServices";


export const AuthContext = createContext();


export default function AuthContextProvider({ children }) {

  const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem('token') != null);
  const [userData, setUserData] = useState(null);



  async function getUserData() {
    const data = await getUserDataApi();
    console.log(data);
    if (data.message == "success") {
      setUserData(data.user);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      getUserData();
    }else {
      setUserData(null);
    }
  }, [isLoggedIn]);


  return (
    <AuthContext.Provider value={{ isLoggedIn, setisLoggedIn , userData }}>
      {children}
    </AuthContext.Provider>
  );
}
