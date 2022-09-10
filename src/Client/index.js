import { Box } from "@mui/material";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import VideoDetails from "./Components/VideoDetails";
import { SearchFeed } from "./Components/SearchFeed";
import Login from "./Routes/Login";

function Client() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: "#f5f5f5"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default Client;