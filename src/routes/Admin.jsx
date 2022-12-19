import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { DashBoard, SignIn, UserManagement } from "../pages/admin/index"
function Admin() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/admin/login' element={<SignIn />} />
                    <Route path='/admin/' element={<DashBoard />} />
                    <Route path='/admin/user-management' element={<UserManagement />} />
                </Routes>
            </Router>
        </>
    )
}

export default Admin