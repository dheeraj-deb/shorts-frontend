import React from 'react'

function LeftPart() {
  return (
    <div className='col-span-2 min-h-[90vh] border-r border-gray-200 items-start justify-start flex flex-col w-full'>
        {/* top section*/}
        <div className='w-full items-start justify-start flex flex-col px-12 pt-12 pb-6'>
            <h1 className='font-bold text-xl xl:text-2xl pb-2'>My Card</h1>
            <p className='text-md text-gray-800'>hey there.....</p>
            <div className='items-start justify-start flex-col px-6 pt-8 pb-4 bg-[#89F8B7] mt-6 w-full'>
                <h1>Earnings</h1>
                <h1 className='text-3xl xl:text-5xl font-bold'>$121232323</h1>
            </div>
            <div className='bg-black py-4 px-8 w-full items-start justify-between flex shadow-emerald-200'>
                <span className='flex flex-col items-start text-white'>
                    <h1>Card Number</h1>
                    <h1>**** **** 8832</h1>
                </span>
                <span className='flex flex-col items-start text-white'>
                    <h1>CVC</h1>
                    <h1>832</h1>
                </span> 
            </div>
        </div>
        {/* bottom section */}
        <div className='w-full items-start justify-start flex flex-col px-12 py-6'>
            <h1 className='font-bold text-xl xl:text-2xl pb-2'>Posts</h1>
            <div></div>
        </div>
    </div>
  )
}

export default LeftPart