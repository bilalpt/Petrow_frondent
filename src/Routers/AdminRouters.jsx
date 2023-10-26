import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from '../Components/admin/AdminLogin'
import AdminHome from '../Components/admin/AdminHome/AdminHome'
import PrivateRouters from '../ProtectedRouters/PrivateRouters'
import AdminProtect from '../ProtectedRouters/AdminProtect'


import AdminBoarduser from '../Components/admin/SidebarElement/Users/AdminBoarduser'
import AdminTakerUser from '../Components/admin/SidebarElement/Users/AdminTakerUser'

const AdminRouters = () => {
  return (
    <div>

        <Routes>
          <Route element={<PrivateRouters/>}>
          <Route exact path='/AdminLogin' element={<AdminLogin/>}/>

          </Route>
          <Route element={<AdminProtect/>}>
          <Route exact path='/AdminHome'  element={<AdminHome/>}>



          <Route exact path='AdminBoarduser' element={<AdminBoarduser/>}/>
          <Route exact path='AdminTakerUser' element={<AdminTakerUser/>}/>


          </Route>



          </Route>
        </Routes>
      
    </div>
  )
}

export default AdminRouters
