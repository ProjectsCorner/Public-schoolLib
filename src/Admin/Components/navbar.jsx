import React from 'react';
import "../design/navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfileImage from "..//../Assets/profileimg.jpg";
import Home from '../routes/home';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='sub_navbar'>
      <div>
      <p style={{color: "black",marginLeft:"14px",marginTop:"12px"}}>Admin</p>
      </div>
      <div style={{display: "flex", alignItems: "center"}}>
        <span className='navb-icons'><SearchIcon /></span>
        <span className='navb-icons'><NotificationsIcon /></span>
        <div style={{display: "flex", alignItems:"center", marginLeft: 40}}>
        <img style={{width: 30, height: 30, marginRight: 10,borderRadius:"50%"}} src= {`${ProfileImage}`} alt="" />
        <p style={{color: "#1ED978"}} className="c_txt">Aggi</p>
        </div>
      </div>
      </div>
      <Home />
    </div>
  )
}
