import React from 'react'
import { navLinks } from "./utils/data"
function Navbar() {
    return (
        <nav className='cols-span-2 border-r border-gray-300 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
            <div className='space-y-8 w-full'>
                {
                    navLinks.map((link) => (
                        <div key={link.id} className="w-full flex items-center justify-start space-x-8 cursor-pointer group hover:border-gray-400 border-l-4 border-transparent ">
                            <span>{link.icon}</span>
                            <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>{link.title}</h1>
                        </div>
                    ))
                }
            </div>
        </nav>
    )
}



export default Navbar