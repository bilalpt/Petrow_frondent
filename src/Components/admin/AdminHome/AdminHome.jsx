import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import { Outlet } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function AdminHome() {

  const data = [
    { day: 'Day 1', users: 10 },
    { day: 'Day 2', users: 15 },
    { day: 'Day 3', users: 8 },
    { day: 'Day 4', users: 12 },
    { day: 'Day 5', users: 20 },
    { day: 'Day 6', users: 18 },
    { day: 'Day 7', users: 25 },
  ];
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

            {/* graph starts */}
            <div className="App p-4">
      <header className="text-3xl font-bold mb-4">
        Users Joined Each Day
      </header>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#8884d8" className="bg-blue-500" />
        </BarChart>
      </ResponsiveContainer>
    </div>
            </div>
          </div>
        </div>
      </div>






    </>
  )
}

export default AdminHome
