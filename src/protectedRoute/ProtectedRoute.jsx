import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import Login from '../Pages/Login'


export default function ProtectedRoute({ children }) {

    
    const {isLoggedIn} = useContext(AuthContext)


    return isLoggedIn ? children : <Login />;

}
