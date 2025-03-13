import { Box, Typography, Button, Container } from '@mui/material';
import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import gsap from 'gsap';
import services9 from "../images/webdeb.svg";
const industryData = {
  education: {
    heroImg:
      "https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=612x612&w=0&k=20&c=NbVChOV9wIbQOhUD6BqpouZHHBbyQ2rkSjaVfIhpMv8=",
    title: "Education",
    description: "Empower students to learn by doing, not just watching. Interactive, hands-on digital experiences help students grasp complex concepts, practice real-world skills, and collaborate in immersive environments—whether in the classroom or learning remotely.",
    statsText: [
      { value: 275, label: "Increase in Student Confidence" },
      { value: 4, label: "Times Faster Learning" },
      { value: 90, label: "Better Knowledge Retention" }
    ],
    benefits: [
      {
        icon: "https://www.svgrepo.com/show/383204/learning-head-book-education.svg",
        title: "Immersive learning experiences",
        description: "Explore complex concepts and scenarios in a safe, controlled environment.",
      },
      {

        title: "Interactive digital lessons and content",
        description: "Engage students with adaptive content tailored to individual learning styles.",
      },
      {

        title: "Access to simulations of places or concepts",
        description: "Experience and learn concepts that were previously inaccessible.",
      },
      {

        title: "Remote collaboration capabilities",
        description: "Facilitate teamwork across distances.",
      },
      {

        title: "Improved student engagement and outcomes",
        description: "Faster and cheaper prototyping.",
      },
    ],
    features: [
      {
        title: "Immersive Learning Experiences",
        description:
          "Dive into complex concepts and real-world scenarios within a safe, controlled environment, allowing for deeper understanding, hands-on practice, and risk-free exploration.",
      },
      {
        title: "Interactive Digital Lessons & Content",
        description:
          "Engage students with dynamic, adaptive content designed to match individual learning styles, ensuring a more personalized and effective learning experience.",
      },
      {
        title: "Access to simulations of places or concepts",
        description:
          "Gain immersive access to simulations of real-world locations and abstract concepts, enabling unparalleled learning experiences that were once out of reach.",
      },
    ],

  },
  // Add all 17 industries here
};

const Industries = () => {
  const { industry } = useParams();
  const data = industryData[industry] || { title: "Not Found", description: "Page not available." };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      gsap.from(gsap.utils.toArray(".stat-item"), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
      });
    }
  }, [isInView]);
  return (
    <>
      {/* Hero section */}
      <Box
        component="section"
        sx={{
          position: "relative",
          px: { xs: 3, sm: 7.5, md: 11, lg: 12, xl: 23.5 },
          py: { xs: 4, md: 5, lg: 8 },
          backgroundImage: `url(${data.heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "500px", md: "600px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          color: "white",
          textAlign: "left",
          "::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "150px",
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgb(24, 24, 24) 100%)",
            zIndex: 2,
          },
        }}
      >
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
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            maxWidth: "800px",
            pt: { xs: 6, md: 10 },
          }}
        >
          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              color: "#19bbc2",
              fontWeight: "bold",
              fontSize: { xs: "22px", sm: "26px", md: "34px", lg: "40px" },
            }}
          >
            {data.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
            }}
          >
            {data.description}
          </Typography>

          {/* Stats Section */}
          <Box
            ref={ref}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", sm: "flex-start" },
              alignItems: { xs: "center", sm: "flex-start" },
              gap: { xs: 2, sm: 1, md: 3 },
              py: { xs: 4, md: 8 },
              width: "100%",
              maxWidth: "1200px",
              mt: { md: "auto", lg: 8 }
            }}
          >
            {data.statsText.map((stat, index) => (
              <Box
                key={index}
                className="stat-item"
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  minWidth: { xs: "100%", sm: "150px", md: "250px" },
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "#00C8FF",
                    fontWeight: "bold",
                    fontSize: { xs: "20px", sm: "18px", md: "24px", lg: "40px" },
                  }}
                >
                  {isInView ? <CountUp start={0} end={stat.value} duration={2} /> : "0"}%
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                    maxWidth: "250px",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>

        </Box>
      </Box>

      {/* Benefits section */}
      <Box>
        <Typography variant='h4' sx={{ textAlign: "center", px: { xs: 2, sm: 6.7, md: 10.5, lg: 12, xl: 24 }, pt: 15, fontSize: { md: "34px", lg: "40px", xl: "52px" }, fontWeight: 600 }}>
          Custom Software Solutions for {data.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2, md: 4 },
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 8 },
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 2, md: 4 },
              px: { xs: 3, md: 6 },
              py: { xs: 4, md: 8 },
              color: "white",
              maxWidth: "1500px"
            }}
          >
            {data.benefits.map((benefit, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  flex: { md: "1 1 200px", lg: "1 1 250px", xl: "1 1 340px" },
                  maxWidth: "350px",
                  padding: { xs: 2, md: 4 },
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",

                  "&:hover": {
                    boxShadow: "0 12px 30px rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                {/* Icon Wrapper (Scales down) */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { xs: "40px", sm: "50px", md: "60px" },
                    height: { xs: "40px", sm: "50px", md: "60px" },
                    background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
                    borderRadius: "50%",
                    marginBottom: { xs: 1, md: 2 },
                    boxShadow: "0 4px 12px rgba(255,255,255,0.1)",
                  }}
                >
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    style={{
                      width: "70%",
                      height: "70%",
                      objectFit: "contain",
                      filter: "invert(1)",
                    }}
                  />
                </Box>

                {/* Title (Scales down) */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "22px" },
                    color: "rgba(255, 255, 255, 0.9)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {benefit.title}
                </Typography>

                {/* Description (Scales down) */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    mt: { xs: 0.5, md: 1 },
                    color: "rgba(255, 255, 255, 0.7)",
                    maxWidth: "85%",
                  }}
                >
                  {benefit.description}
                </Typography>
              </Box>



            ))}
          </Box>


        </Box>
      </Box>

      {/* get in touch */}
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 6, md: 11, lg: 12, xl: 24 },
          py: { xs: 3, md: 6 },
          textAlign: { xs: "center", md: "left" },
          gap: { xs: 3, md: 0 },
        }}
      >
        {/* Left Text Content */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "60%" } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "20px", sm: "26px", md: "36px" },
              mb: 1,
            }}
          >
            Ready to create progress together?
          </Typography>
          <Typography sx={{ color: "#00C8FF", fontSize: { xs: "18px", sm: "24px", md: "32px" } }}>
            We'd love to hear from you.
          </Typography>
        </Box>

        {/* Call-to-Action Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            "&:hover": { backgroundColor: "#f5f5f5" },
            p: { xs: 1.5, sm: 2, md: 3 },
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        >
          Free Consultation
        </Button>
      </Box>

      {/* Features section */}
      <Box sx={{ backgroundColor: "#121212", color: "white", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          {/* Header Section */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,
              fontSize: { xs: "24px", md: "32px" },
            }}
          >
            Transform Your Educational Institution With <br />
            Cutting-Edge <Typography component="span" sx={{ color: "#00C8FF", fontWeight: "bold" }}>AR & VR</Typography> Solutions
          </Typography>

          {/* Feature Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 2, md: 3 },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#000",
                  padding: { xs: 3, md: 4 },
                  borderRadius: "8px",
                  textAlign: { xs: "center", md: "left" },
                  boxShadow: "0px 0px 10px rgba(255,255,255,0.1)",
                  minHeight: { xs: "auto", md: "250px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignSelf: "stretch",
                  maxWidth: { xs: "90%", sm: "100%" },
                  margin: { xs: "0 auto", sm: "unset" },
                }}
              >
                {/* Title with Underline */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1.5,
                    pb: 1,
                    borderBottom: "2px solid #00C8FF",
                    display: "inline-block",
                  }}
                >
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "16px" }, color: "#ccc" }}>
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>


    </>
  );
}

export default Industries
