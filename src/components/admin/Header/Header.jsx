import React from 'react'
import { BiSearchAlt, BiLogInCircle } from "react-icons/bi"
import { SiWikimediacommons } from "react-icons/si"
import { BsFillBellFill } from "react-icons/bs"
function Header() {
    return (
        <div className=' bg-[#F0F5F5] w-full py-6 items-center justify-between flex px-12'>
            {/* Search */}
            <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
                <BiSearchAlt size={20} />
                <input type="text" placeholder='Search...' className='bg-transparent outline-none' />
            </div>
            <div className='items-center w-full justify-center flex space-x-4'>
                <SiWikimediacommons className='header-icon'/>
                <h1 className='text-xl text-gray-900 font-medium'>Shorts</h1>
            </div>
            {/* icons */}
            <div className='items-center justify-end space-x-6 flex w-full'>
                <BsFillBellFill className='header-icon' />
                <BiLogInCircle className='header-icon' />
            </div>
        </div>
    )
}

export default Header