import React from 'react'
import {AiOutlineDashboard, AiOutlineLogout} from 'react-icons/ai'
import {BiUserCheck} from 'react-icons/bi'
import {HiOutlinePhotograph} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'

function Navbar() {
  return (
    <nav className='col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
        <div className='space-y-8 w-full'>
            <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                <span><AiOutlineDashboard className='nav-icon'/></span>
                <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>Dashboard</h1>
            </div>
            <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                <span><BiUserCheck className='nav-icon'/></span>
                <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>Users</h1>
            </div>
            <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                <span><HiOutlinePhotograph className='nav-icon'/></span>
                <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>Posts</h1>
            </div>
            <div className='w-full border-t border-gray-200'></div>
            <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                <span><FiSettings className='nav-icon'/></span>
                <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>Settings</h1>
            </div>
            <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                <span><AiOutlineLogout className='nav-icon'/></span>
                <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>Logout</h1>
            </div>
        </div>
    </nav>
  )
}

export default Navbar