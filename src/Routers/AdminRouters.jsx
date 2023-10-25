import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from '../Components/admin/AdminLogin'
import AdminHome from '../Components/admin/AdminHome/AdminHome'
import PrivateRouters from '../ProtectedRouters/PrivateRouters'
import AdminProtect from '../ProtectedRouters/AdminProtect'
import AdminNavbar from '../Components/admin/AdminNavbar/AdminNavbar'
import AdminSidebar from '../Components/admin/AdminSidebar/AdminSidebar'


const AdminRouters = () => {
  return (
    <div>

        <Routes>
          <Route element={<PrivateRouters/>}>
          <Route exact path='/AdminLogin' element={<AdminLogin/>}/>

          </Route>
          <Route element={<AdminProtect/>}>
          <Route exact path='/AdminHome'  element={<AdminHome/>}/>
          <Route exact path='/AdminNavbar' element={<AdminNavbar/>}/>
          <Route exact path='/AdminSidebar' element={<AdminSidebar/>}/>

          </Route>
        </Routes>
      
    </div>
  )
}

export default AdminRouters
