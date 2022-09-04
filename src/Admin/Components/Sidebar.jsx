import React from 'react';
import "../design/sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Link } from 'react-router-dom';

const  Sidebar = (props)=> {
  return (
    <div className='sidebar'>
      <div>
        <p style={{textAlign: "start", marginLeft: 15,color: "#A5A1A1"}}>Dashboard</p>
        <ul>
        <Link to="/">
            <div
              className={
                props.active === "home" ? "sidebar-link active" : "sidebar-link"
              }
            >
            <HomeIcon />
              <span style={{marginLeft: "12px"}}>Home</span>
            </div>
          </Link>
          <Link to="/uploadnotes">
            <div
              className={
                props.active === "uploadnotes"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <FileUploadIcon />
              <span style={{marginLeft: "12px"}}>Uploadnotes</span>
            </div>
          </Link>
          <Link to="/Uploadbook">
            <div
              className={
                props.active === "Uploadbook"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <FileUploadIcon />
              <span style={{marginLeft: "12px"}}>Upload book</span>
            </div>
          </Link>
          <Link to="/uploadvideo">
            <div
              className={
                props.active === "uploadvideo"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
            <CloudUploadIcon />
              <span style={{marginLeft: "12px"}}>Upload video</span>
            </div>
          </Link>
        </ul>
      </div>
      <div>
        <p style={{textAlign: "start", marginLeft: 15,color: "#A5A1A1"}}>Logout</p>
        <ul>
        <Link to="/">
            <div
              className={
                props.active === "home" ? "sidebar-link active" : "sidebar-link"
              }
            >
            <HomeIcon />
              <span style={{marginLeft: "12px"}}>Home</span>
            </div>
          </Link>
          </ul>
          </div>
    </div>
  )
}
export default Sidebar;
