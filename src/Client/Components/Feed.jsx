import React, {useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { categories } from "..//../Utils/constants.js";

// import { fetchFromAPI } from "../utils/fetchFromAPI";
import Sidebar from "./Sidebar";


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
//   const [videos, setVideos] = useState(null);

//   useEffect(() => {
//     // setVideos(null);

//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
//       .then((data) => setVideos(data.items))
//     }, [selectedCategory]);

  return (
    <div className="sidbar_cntr">
    <Stack sx={{ 
        flexDirection: { sx: "column", md: "row" } 
        }}>
      <Box sx={{ 
        height: { sx: "auto", md: "92vh" },
         borderRight: "1px solid #3d3d3d", 
         px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#000", }}>
          Copyright © 2022<br></br> Kanlyte Uganda
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#000" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        {/* <Videos videos={videos} /> */}
      </Box>
    </Stack>
    </div>
  );
};

export default Feed;