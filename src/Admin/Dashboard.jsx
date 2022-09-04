import React from 'react';
import Navbar from './Components/navbar';
import Sidebar from './Components/Sidebar';
import "./design/dashboard.css";

export const Dashboard = () => {
  return (
    <div className='main_hdr_ctr'>
    <Sidebar/>
    <Navbar />
    </div>
  )
}
