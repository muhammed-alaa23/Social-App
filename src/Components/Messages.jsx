import React from 'react'
import message from'../assets/messages-svgrepo-com.svg'
import notifcation from'../assets/bell-filled-svgrepo-com.svg'
import img1 from '../assets/images.jfif'
import img2 from '../assets/images (1).jfif'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'

export default function Messages() {
  return (
    <div className='sticky top-20'>
  <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-10rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
    <div className="mb-2 py-4 flex items-center">
        <img src={message} alt="" className='h-5 w-5 mr-3' />
      <h5 className="block antialiased tracking-normal font-sans text-lg font-semibold leading-snug text-gray-900">Messages</h5>
    </div>
    <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
      
        <div className='flex justify-between mb-3'>
            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={img1} alt="Bordered avatar" />
            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={img2} alt="Bordered avatar" />
            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={img2} alt="Bordered avatar" />
            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={img1} alt="Bordered avatar" />
            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={img1} alt="Bordered avatar" />

        </div>

        <li className="relative cursor-pointer border-b border-gray-100 dark:border-gray-600 list-none mt-2">
            <a  className="flex items-center w-full px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                <img className="me-3 rounded-full w-11 h-11" src={img1} alt="Jese Leos Avatar" />
                <span className="bottom-2.5 left-10 absolute  w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                <div>
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Youness</span>: "عامل اي ؟"</p>
                <span className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</span>
                </div>
            </a>
        </li>

        <li className="cursor-pointer border-b border-gray-100 dark:border-gray-600 list-none mt-2">
            <a className="flex items-center w-full px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                <img className="me-3 rounded-full w-11 h-11" src={img1} alt="Jese Leos Avatar" />
                <div>
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">ElDeeb</span>: "اي الدنياا...."</p>
                <span className="text-xs text-blue-600 dark:text-blue-500">10m ago</span>
                </div>
            </a>
        </li>


        <li className="cursor-pointer border-b border-gray-100 dark:border-gray-600 list-none mt-2">
            <a className="flex items-center w-full px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                <img className="me-3 rounded-full w-11 h-11" src={img1} alt="Jese Leos Avatar" />
                <div>
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Abdallah</span>: "فينك"</p>
                <span className="text-xs text-blue-600 dark:text-blue-500">45m ago</span>
                </div>
            </a>
        </li>



        <li className="relative cursor-pointer border-b border-gray-100 dark:border-gray-600 list-none mt-2">
            <a className="flex items-center w-full px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                <img className="me-3 rounded-full w-11 h-11" src={img2} alt="Jese Leos Avatar" />
                <span className="bottom-2.5 left-10 absolute  w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                <div>
                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">ola</span>: "...كله خير"</p>
                <span className="text-xs text-blue-600 dark:text-blue-500">1h ago</span>
                </div>
            </a>
        </li>

        <div className='flex mt-6'>
            <div className="flex -space-x-4 rtl:space-x-reverse">
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img1} alt="img1" />
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img2} alt="img1" />
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img1} alt="img1" />
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img2} alt="img1" />
            </div>
            <div className="flex -space-x-4 rtl:space-x-reverse">
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img1} alt="img1" />
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img2} alt="img1" />
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img1} alt="img1" />
                <a className="cursor-pointer flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">+99</a>
            </div>
        </div>
      
    </nav>
  
  </div>
  <div className="w-full pt-5 px-4 mb-8 mx-auto ">
       
  </div>

</div>
  )
}
