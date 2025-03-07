import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ContactStyledBtn from '../styledbuttons/ContactStyledBn';
import CountUp from 'react-countup';
import { motion, useInView } from 'framer-motion';
import logo1 from "../images/partner-1.png";
import logo2 from "../images/partner-2.png";
import logo3 from "../images/partner-3.png";
import logo4 from "../images/partner-4.png";
import logo5 from "../images/partner-5.png";
import logo6 from "../images/partner-9.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import placeholderimg from "../images/elementor-placeholder-image.webp";
import industries1 from "../images/education.svg";
import industries2 from "../images/healthcare.svg";
import industries3 from "../images/realestate.svg";
import industries4 from "../images/manufacturing.svg";
import industries5 from "../images/retail.svg";
import industries6 from "../images/finance.svg";

const serviceData = {
  web: {
    heroImg:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Web & CMS Development",
    subTitle: "Custom Websites & Content Management Solutions Smart & Scalable",
    description: "We build robust websites and content management systems (CMS) that combine cutting-edge technology with seamless user experience. We create web solutions that are fast, secure, and built to grow with your business.",
    statsHeader: "Web & CMS Development's Impact On Industries",
    statsText: [
      { value: 28, label: "Increase in E-commerce Sales" },
      { value: 30, label: "Improvement in Team Collaboration" },
      { value: 20, label: "Boost in Search Engine Rankings" },
    ],
    useCases: [{
      title: "E-commerce Growth with Scalable CMS",
      description:
        "An online fashion retailer needed a high-performance website with an intuitive CMS to manage inventory and marketing campaigns. By implementing a custom CMS, the business saw a 28% increase in sales and improved customer retention.",
      image:
        "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Enterprise Workflow Automation",
      description:
        "A large corporation needed an internal CMS to automate workflows, manage documents, and streamline operations. The solution improved team collaboration by 30% and reduced operational costs.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "SEO-Optimized Blogging Platform",
      description:
        "A media company required a powerful CMS to manage thousands of articles efficiently. With custom SEO enhancements, their search engine rankings improved by 20%, leading to higher traffic.",
      image:
        "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },]
  },

  mobile: {
    heroImg: "https://example.com/education.jpg",
    title: "Education Industry",
    subTitle: "Transform learning with technology",
    description:
      "Empower students with innovative tools for immersive learning experiences.",
  },
  vrdev: {
    heroImg: "https://example.com/finance.jpg",
    title: "Finance Industry",
    subTitle: "Secure and scalable financial solutions",
    description:
      "Enhance financial services with cutting-edge technology and data security.",
  },
};

const industries = [
  {
    icon: industries1,
    title: "Education",
    description: "Transform learning experiences with interactive and immersive technologies",
  },
  {
    icon: industries2,
    title: "Healthcare",
    description: "Enhance patient care and medical training through innovative XR solutions",
  },
  {
    icon: industries3,
    title: "Real Estate",
    description: "Provide virtual property tours and immersive real estate experiences",
  },
  {
    icon: industries4,
    title: "Manufacturing",
    description: "Streamline production and training with industrial XR applications",
  },
  {
    icon: industries5,
    title: "Retail",
    description: "Revolutionize shopping with AR-driven retail and virtual showrooms",
  },
  {
    icon: industries6,
    title: "Finance & Banking",
    description: "Leverage XR for data visualization, training, and financial simulations",
  },
];

const Services = () => {
  const { service } = useParams();
  const data = serviceData[service] || { title: "Not Found", description: "Page not available." };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const projects = [
    {
      title: "Riad VR",
      image: placeholderimg,
      link: "#",
    },
    {
      title: "Crane Simulation",
      image: placeholderimg,
      link: "#",
    },
    {
      title: "Riad VR",
      image: placeholderimg,
      link: "#",
    },
    {
      title: "Crane Simulation",
      image: placeholderimg,
      link: "#",
    },
    // Add more projects here...
  ];

  return (
    <>
      {/* hero section */}
      <Box
        component="section"
        sx={{
          position: "relative",
          px: { xs: 3, sm: 7.5, md: 11, lg: 12, xl: 16 },
          py: { xs: 4, md: 5, lg: 8 },
          backgroundImage: `url(${data.heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "500px", md: "600px" },
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          color: "white",
          textAlign: "left",
          flexDirection: "column",
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
        ></Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            maxWidth: "800px",
            pt: { xs: 8, md: 12 },
          }}
        >
          <Typography variant="h3" sx={{ color: "#19bbc2", fontWeight: "bold", fontSize: { xs: "28px", md: "40px" } }}>
            {data.title}
          </Typography>

          <Typography variant="h5" sx={{
            fontWeight: "bold",
            display: "inline-block",
            mt: 1,
            fontSize: { xs: "18px", md: "24px" },
          }}>
            {data.subTitle}
          </Typography>

          <Typography variant="body1" sx={{ mt: 3, fontSize: { xs: "16px", md: "20px" } }}>
            {data.description}
          </Typography>

          <Box sx={{ mt: 6 }}>
            <Link to="/contact">
              <ContactStyledBtn />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* stats section */}
      <Box
        ref={ref}
        sx={{
          textAlign: "center",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 9, lg: 12 },
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: { xs: 4, md: 8 }, fontSize: { xs: "22px", md: "32px" } }}
        >
          {data.statsHeader}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 6, sm: 10, md: 7, lg: 12, xl: 19 },
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {data.statsText.map((stat, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                minWidth: { xs: "150px", sm: "200px", md: "250px" },
                flex: "1 1 250px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#00C8FF",
                  fontWeight: "bold",
                  fontSize: { xs: "24px", sm: "30px", md: "40px" },
                }}
              >
                {isInView ? <CountUp start={0} end={stat.value} duration={2} /> : "0"}%
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  maxWidth: "250px",
                  mx: "auto",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* use cases */}
      <Box>
        <Box sx={{ color: "white", py: 0 }}>
          <Typography
            variant="h3"
            sx={{
              px: { xs: 2, sm: 4, md: 8, lg: 12.5 },
              fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "48px" },
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Use Cases
          </Typography>

          {data.useCases.map((useCase, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "1325px",
                mx: "auto",
                p: { xs: 4, md: 6 },
                my: 8,
                borderRadius: 2,
                gap: { xs: 3, md: 10 },
                position: "relative",
              }}
            >
              {/* Text Section */}
              <Box
                sx={{
                  flex: 1,
                  textAlign: { xs: "center", md: "left" },
                  px: { xs: 2, md: 0 },
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "4px",
                    backgroundColor: "#00C8FF",
                    mb: 1.5,
                    mx: { xs: "auto", md: 0 },
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
                  }}
                >
                  {useCase.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  }}
                >
                  {useCase.description}
                </Typography>
              </Box>

              {/* Image Section with Inverted Fade Effect */}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "40%" },
                  height: "auto",
                  mt: { xs: 4, md: 0 },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: index % 2 === 0 ? "0" : "auto",
                    right: index % 2 === 0 ? "auto" : "0",
                    width: "14%",
                    height: "100%",
                    background: index % 2 === 0
                      ? "linear-gradient(to right, #242424 0%, rgba(36, 36, 36, 0) 100%)"
                      : "linear-gradient(to left, #242424 0%, rgba(36, 36, 36, 0) 100%)",
                    zIndex: 2,
                  },
                }}
              >
                <Box
                  component="img"
                  src={useCase.image}
                  alt={useCase.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

      </Box>

      {/* clients */}
      <Box>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            fontSize: { xs: 23, sm: 28, md: 32 },
            paddingTop: 10,
            fontWeight: 600,
          }}
        >
          Trusted By Brands
        </Typography>

        <Box sx={{ py: 10, textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, sm: 4, md: 6 },
              flexWrap: "wrap",
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            {logos.map((logo, index) => (
              <a href="#" key={index}>
                <Box
                  component="img"
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  sx={{
                    display: "inline-block",
                    height: { xs: 50, sm: 60, md: 80, lg: 120, xl: 150 },
                    filter: "brightness(1.3)",
                  }}
                />
              </a>
            ))}
          </Box>
        </Box>
      </Box>

      {/* contact */}
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 6, md: 12 },
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



      {/* projects */}
      <Box sx={{ backgroundColor: "#121212", py: 6, px: { xs: 2, sm: 4, md: 6 }, position: "relative" }}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1} // Default: 1 slide for small screens
          loop={true}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          breakpoints={{
            768: { slidesPerView: 2 }, // Show 2 slides on medium+ screens
          }}
          style={{ maxWidth: "1200px", margin: "auto", overflow: "hidden" }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 10, sm: 15, md: 20 },
                    left: { xs: 10, sm: 15, md: 20 },
                    color: "white",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "18px" } }}>
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#00C8FF",
                      display: "flex",
                      alignItems: "center",
                      fontSize: { xs: "12px", md: "16px" },
                    }}
                  >
                    SEE PROJECT &nbsp; →
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
          <Button
            className="prev-button"
            sx={{
              minWidth: { xs: 40, md: 50 },
              width: { xs: 40, md: 50 },
              height: { xs: 40, md: 50 },
              background: "#1E3A3A",
              color: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                background: "#154242",
              },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: { xs: "18px", md: "24px" } }} />
          </Button>

          <Button
            className="next-button"
            sx={{
              minWidth: { xs: 40, md: 50 },
              width: { xs: 40, md: 50 },
              height: { xs: 40, md: 50 },
              background: "#1E3A3A",
              color: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                background: "#154242",
              },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: "18px", md: "24px" } }} />
          </Button>
        </Box>
      </Box>





    </>
  );
};

export default Services;
