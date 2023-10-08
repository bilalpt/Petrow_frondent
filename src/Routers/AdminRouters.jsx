import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from '../Components/admin/AdminLogin'


const AdminRouters = () => {
  return (
    <div>

        <Routes>
            <Route exact path='/AdminLogin' element={<AdminLogin/>}/>
        </Routes>
      
    </div>
  )
}

export default AdminRouters
