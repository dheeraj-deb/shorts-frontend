import React from 'react'

function ProfilePosts({ setPost }) {
    return (
        <div>
            {/* navigation */}
            <div className='flex w-screen md:w-[700px] lg:w-[1000px]'>
                <div className=' w-[100%] py-2 px-[4rem] text-center border' onClick={() => setPost(true)}>
                    <h3 className='font-poppins font-medium text-lg'>Posts</h3>
                </div>
                <div className='w-[100%] py-2 px-[4rem] text-center border' onClick={() => setPost(false)}>
                    <h3 className='font-poppins font-medium text-lg' >Saved</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfilePosts