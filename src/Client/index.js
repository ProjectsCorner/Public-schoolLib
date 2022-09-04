import { Box } from "@mui/material";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";

import Home from "./Home";
import VideoDetails from "./Components/VideoDetails";
import { SearchFeed } from "./Components/SearchFeed";
import { Dashboard } from "../Admin/Dashboard";

function Client() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: "#f5f5f5"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default Client;