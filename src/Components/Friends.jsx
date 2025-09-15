import React, { useContext, useEffect, useState } from 'react'
import message from'../assets/messages-svgrepo-com.svg'
import notifcation from'../assets/bell-filled-svgrepo-com.svg'
import img1 from '../assets/images.jfif'
import img2 from '../assets/images (1).jfif'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { getUserDataApi } from '../services/authServices'
import Messages from './Messages'

export default function Friends() {


    const navigate  = useNavigate();
    const {isLoggedIn,setisLoggedIn}=useContext(AuthContext)
    const [userData, setUserData] = useState(null);
    

    function signOut(){
    localStorage.removeItem("token")
    setisLoggedIn(false)
    navigate("/login")
  }

  async function getUserData() {
      const data = await getUserDataApi();
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
    <div className='sticky top-20'>
  <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-10rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
    <div className="mb-2 py-4 flex justify-between">
      <h5 className="block antialiased tracking-normal font-sans text-lg font-semibold leading-snug text-gray-900">{userData?.name}</h5>
      <img src={userData?.photo} alt="" className='h-8 w-8' />
    </div>
    <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
      
       <Dropdown>
      <DropdownTrigger>
        <div role="button" tabIndex={0} className="cursor-pointer flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
        <div className="grid place-items-center mr-4">
        <img src={notifcation} alt="" className='h-5 w-5' />

        </div>Notifications<div className="grid place-items-center ml-auto justify-self-end">
          <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full" style={{opacity: 1}}>
            <span>4</span>
          </div>
        </div>
      </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem textValue='Raed Ahmed' key="1" ><div className="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <img src={img1} className="rounded-full h-14 w-14" alt="Raed Ahmed" />
                                <div className="flex flex-col space-y-1">
                                <span className="font-bold">Raed Ahmed</span>
                                <span className="text-sm">Like Your post</span>
                                </div>
                            </div>
                            <div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                                17m ago
                            </div>
                            </div>
        </DropdownItem>
        <DropdownItem textValue='Enas Gamal' key="2">
            <div className="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <img src={img2} className="rounded-full h-14 w-14" alt="Enas Gamal" />
                                <div className="flex flex-col space-y-1">
                                <span className="font-bold">Enas Gamal</span>
                                <span className="text-sm">Comment on your post</span>
                                </div>
                            </div>
                            <div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                                30m ago
                            </div>
                            </div>
        </DropdownItem>
        <DropdownItem textValue='Muhammed Alaa' key="3">
            <div className="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <img src={img1} className="rounded-full h-14 w-14" alt="Muhammed Alaa" />
                                <div className="flex flex-col space-y-1">
                                <span className="font-bold">Muhammed Alaa</span>
                                <span className="text-sm">View Your Profile</span>
                                </div>
                            </div>
                            <div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                                45m ago
                            </div>
                            </div>
        </DropdownItem>
        <DropdownItem textValue='Hossam Abdelmonem' key="4">
          <div className="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <img src={img1} className="rounded-full h-14 w-14" alt="Hossam Abdelmonem" />
                                <div className="flex flex-col space-y-1">
                                <span className="font-bold">Hossam Abdelmonem</span>
                                <span className="text-sm">Like Your Comment</span>
                                </div>
                            </div>
                            <div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                                1h ago
                            </div>
                            </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
      
      <div role="button" tabIndex={0} className="cursor-pointer flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
        <div className="grid place-items-center mr-4">
          <img src={message} alt="" className='h-5 w-5' />
        </div>
        Messages
      </div>
      <div onClick={() => navigate("/")} role="button" tabIndex={0} className="cursor-pointer flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
        <div className="grid place-items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
          </svg>
        </div>Feeds
      </div>

      <div onClick={() => navigate("/profile")} role="button" tabIndex={0} className="cursor-pointer flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
        <div className="grid place-items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
          </svg>
        </div>Profile
      </div>
      <div role="button" tabIndex={0} className="cursor-pointer flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
        <div className="grid place-items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
          </svg>
        </div>Settings
      </div>
      <div onClick={signOut} role="button" tabIndex={0} className="cursor-pointer flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
        <div className="grid place-items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
        </div>Log Out
      </div>
    </nav>
  
  </div>
  <div className="w-full pt-5 px-4 mb-8 mx-auto ">
       
  </div>

</div>

  )
}
