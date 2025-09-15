import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './Layouts/AuthLayout'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Feed from './Pages/Feed'
import PostDetails from './Pages/PostDetails'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import MainLayout from './Layouts/MainLayout'
// import ProtectedRoute from './protectedRoute/ProtectedRoute'
// import ProtectAuthRoute from './protectedRoute/protectAuthRoute'
import ProtectedRoute from './protectedRoute/ProtectedRoute'
import ProtectAuthRoute from './protectedRoute/ProtectAuthRoute'



const router = createBrowserRouter([
  {path: '', element: <AuthLayout />, children: [
    { path: 'login', element: <ProtectAuthRoute><Login /></ProtectAuthRoute> },
    { path: 'register', element: <ProtectAuthRoute><Register /></ProtectAuthRoute> }
  ]},
  {path: '', element: <MainLayout/>, children: [
    { index: true, element:<ProtectedRoute><Feed /></ProtectedRoute> },
    { path: 'post-Details/:id', element: <ProtectedRoute><PostDetails /></ProtectedRoute> },
    { path: 'profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
    { path: '*', element: <NotFound /> }
  ]}
])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
