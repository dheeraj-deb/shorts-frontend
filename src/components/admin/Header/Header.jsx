import React from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {

  const navigate = useNavigate()

  return (
    <div>
      <div className='p-4 flex items-center justify-between bg-cyan-700 text-white'>
        <h3 className='font-poppins text-lg font-medium'>Shorts Admin</h3>
        <navbar className='flex items-center justify-around min-w-[50%]'>
          <h3 className='font-poppins text-md font-medium hover:cursor-pointer hover:text-gray-400'
            onClick={() => {
              navigate('/admin/')
            }}>DashBoard</h3>
          <h3 className='font-poppins text-md font-medium hover:cursor-pointer hover:text-gray-400'
            onClick={() => {
              navigate('/admin/user-management')
            }}>User Management</h3>
          <h3 className='font-poppins text-md font-medium hover:cursor-pointer hover:text-gray-400'
            onClick={() => {
              navigate('/admin/post-management')
            }}>Post Management</h3>
          <h3 className='font-poppins text-md font-medium hover:cursor-pointer hover:text-gray-400'>LogOut</h3>
        </navbar>
      </div>
    </div>
  )
}

export default Header