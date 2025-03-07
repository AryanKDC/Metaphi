import { Box, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'

const industryData = {
  healthcare: {
    heroImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Healthcare Industry",
    subTitle: "Experience VR and AR directly in your browser",
    description: "Share immersive experiences instantly through any web browser—no app downloads needed. Reach more users and reduce barriers while keeping the full power of AR and VR."
  },

  education: { title: "Education Industry", description: "Details about education." },
  finance: { title: "Finance Industry", description: "Details about finance." },
  // Add all 17 industries here
};

const Industries = () => {
  const { industry } = useParams();
  const data = industryData[industry] || { title: "Not Found", description: "Page not available." };

  return (
    <>
      <Box
        component="section"
        sx={{
          position: "relative",
          p: 12,
          backgroundImage: `url(${data.heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",  
          color: "white",
        }}
      >
        {/* Overlay to Darken the Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",  
            zIndex: 1,
          }}
        ></Box>

        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 2, maxWidth: "600px", pl: 4 }}>
          <Typography variant="h3" sx={{ color: "#19bbc2", fontWeight: "bold" }}>
            {data.title}
          </Typography>

          <Typography variant="h5" sx={{
            fontWeight: "bold",
            display: "inline-block",
            px: 0.5,
            mt: 1
          }}>
            {data.subTitle}
          </Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>
            {data.description}
          </Typography>

          <Typography variant="body1" sx={{ color: "#19bbc2", mt: 3, display: "flex", alignItems: "center", fontWeight: "bold" }}>
            FREE CONSULTATION <span style={{ marginLeft: "8px" }}>➡️</span>
          </Typography>
        </Box>
      </Box>

    </>
  );
}

export default Industries