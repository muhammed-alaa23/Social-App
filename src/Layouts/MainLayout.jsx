import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Friends from '../Components/friends'
import Messages from '../Components/Messages'

export default function MainLayout() {
  return (

      <div >
        <Navbar />

            <div>
              <Outlet/>
            </div>

          </div>



  )
}
