import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import { Outlet } from 'react-router-dom'

function AdminHome() {
  return (
    <>



      <div className='h-screen grid grid-rows-[5rem] '>
        <div> 
        <AdminNavbar />
        </div>
        <div className='md:grid md:grid-cols-[18.7rem,1fr]'>
          
          <div className='invisible md:visible'>
          <AdminSidebar />
          </div>

          <div>

            <div className='h-full '>
             <Outlet/>
            </div>

            

          </div>
        </div>
      </div>






    </>
  )
}

export default AdminHome
