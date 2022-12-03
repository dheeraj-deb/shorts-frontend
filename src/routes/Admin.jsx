import React from 'react'
import { Header, Navbar } from "../components/admin/index"
import { DashBoard, UserManagement } from "../pages/admin/index"
function Admin() {
    return (
        <div>
            <Header />
            <div className='w-full min-h-[90vh] grid grid-cols-12 overflow-hidden'>
                <Navbar />
                {/* <DashBoard /> */}
                <UserManagement/>
            </div>
        </div>
    )
}

export default Admin