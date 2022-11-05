import React from "react"
import {BiSearchAlt, BiBell} from "react-icons/bi"
import {FaIcons} from "react-icons/fa"
import {RiAccountPinCircleLine} from "react-icons/ri"
import {AiOutlineMessage} from "react-icons/ai"

function Header() {
  return (
    <div className='bg-[#F0F5F5] w-full py-6 items-center justify-between flex px-12'>
      {/* search */}
      <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
        <BiSearchAlt className='header-icon'/>
        <input type="text" placeholder='Search...' className='bg-transparent outline-none'/>
      </div>
      {/* logo */}
      <div className='items-center w-full justify-center flex space-x-4'>
        <FaIcons/>
        <h1 className='text-xl text-gray-900 font-medium'>Shorts</h1>
      </div>
      {/* actions */}
      <div className='item-center justify-end space-x-6 flex w-full'>
        <BiBell className='header-icon'/>
        <AiOutlineMessage className='header-icon'/>
        <RiAccountPinCircleLine className='header-icon'/>
      </div>
    </div>
  )
}

export default Header