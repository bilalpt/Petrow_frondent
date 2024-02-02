import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { Outlet } from 'react-router-dom';

function AdminHome() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/GraphUsers");
        console.log(response.data, 'GraphUsersGraphUsersGraphUsersGraphUsersGraphUsers');

        const userData = response.data;

        // Assuming date_and_time is in ISO format
        const last7DaysData = userData.filter(user => {
          const userDate = new Date(user.date_and_time).toISOString().split('T')[0];
          const currentDate = new Date().toISOString().split('T')[0];
          return userDate >= currentDate && userDate > 7;
        });

        setChartData(last7DaysData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const countUsersByDay = () => {
    const counts = {};

    chartData.forEach(user => {
      const date = new Date(user.date_and_time).toISOString().split('T')[0];
      counts[date] = (counts[date] || 0) + 1;
    });

    const result = Object.entries(counts).map(([date, count]) => ({ date, count }));
    return result;
  };

  return (
    <div className='h-screen grid grid-rows-[5rem] '>
      <div>
        <AdminNavbar />
      </div>
      <div className='md:grid md:grid-cols-[18.7rem,1fr]'>
        <div className='invisible md:visible'>
          <AdminSidebar />
        </div>
        <div className='h-full '>
          <Outlet />
          {/* graph starts */}
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={500}
              height={300}
              data={countUsersByDay()}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          {/* graph ends */}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
