import React from 'react'
import { LeftPart, RightPart } from '../../../components/admin/index'

function DashBoard() {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full md:ml-[7rem]'>
            <LeftPart />
            <RightPart />
        </div>
    )
}

export default DashBoard