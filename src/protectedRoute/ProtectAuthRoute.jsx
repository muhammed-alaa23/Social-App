import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function ProtectAuthRoute({children}) {
  
    const {isLoggedIn} = useContext(AuthContext)
  
    return !isLoggedIn ? children : <Navigate to={"/"}/>

}
