import React, { useState, useRef } from 'react';
import { Box, Typography, Button, TextField, MenuItem } from '@mui/material';
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
import { FastField, Formik, Form } from "formik";
import * as Yup from "yup";
import StyledButton from "../styledbuttons/StyledButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons";

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
    heroImg: "https://via.placeholder.com/1200x600", // Placeholder image
    title: "Web & CMS Development",
    subTitle: "Custom Websites & Content Management Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    statsHeader: "The Impact of Web & CMS Solutions",
    statsText: [
      { value: 35, label: "Lorem ipsum dolor sit amet" },
      { value: 40, label: "Consectetur adipiscing elit" },
      { value: 25, label: "Integer nec odio. Praesent libero" },
    ],
    useCases: [
      {
        title: "Scalable E-commerce Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "Corporate Workflow Automation",
        description: "Suspendisse potenti. Ut fringilla. Suspendisse potenti. Fusce ac felis sit amet ligula pharetra condimentum.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "SEO-Optimized Content Platform",
        description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
    ],
  },

  ecommerce: {
    heroImg: "https://via.placeholder.com/1200x600", // Placeholder image
    title: "Web & CMS Development",
    subTitle: "Custom Websites & Content Management Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    statsHeader: "The Impact of Web & CMS Solutions",
    statsText: [
      { value: 35, label: "Lorem ipsum dolor sit amet" },
      { value: 40, label: "Consectetur adipiscing elit" },
      { value: 25, label: "Integer nec odio. Praesent libero" },
    ],
    useCases: [
      {
        title: "Scalable E-commerce Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "Corporate Workflow Automation",
        description: "Suspendisse potenti. Ut fringilla. Suspendisse potenti. Fusce ac felis sit amet ligula pharetra condimentum.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "SEO-Optimized Content Platform",
        description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
    ],
  },

  devops: {
    heroImg: "https://via.placeholder.com/1200x600", // Placeholder image
    title: "Web & CMS Development",
    subTitle: "Custom Websites & Content Management Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    statsHeader: "The Impact of Web & CMS Solutions",
    statsText: [
      { value: 35, label: "Lorem ipsum dolor sit amet" },
      { value: 40, label: "Consectetur adipiscing elit" },
      { value: 25, label: "Integer nec odio. Praesent libero" },
    ],
    useCases: [
      {
        title: "Scalable E-commerce Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "Corporate Workflow Automation",
        description: "Suspendisse potenti. Ut fringilla. Suspendisse potenti. Fusce ac felis sit amet ligula pharetra condimentum.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "SEO-Optimized Content Platform",
        description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
    ],
  },

  blockchaindev: {
    heroImg: "https://via.placeholder.com/1200x600", // Placeholder image
    title: "Web & CMS Development",
    subTitle: "Custom Websites & Content Management Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    statsHeader: "The Impact of Web & CMS Solutions",
    statsText: [
      { value: 35, label: "Lorem ipsum dolor sit amet" },
      { value: 40, label: "Consectetur adipiscing elit" },
      { value: 25, label: "Integer nec odio. Praesent libero" },
    ],
    useCases: [
      {
        title: "Scalable E-commerce Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "Corporate Workflow Automation",
        description: "Suspendisse potenti. Ut fringilla. Suspendisse potenti. Fusce ac felis sit amet ligula pharetra condimentum.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "SEO-Optimized Content Platform",
        description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
    ],
  },

  sfsolutions: {
    heroImg: "https://via.placeholder.com/1200x600", // Placeholder image
    title: "Web & CMS Development",
    subTitle: "Custom Websites & Content Management Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    statsHeader: "The Impact of Web & CMS Solutions",
    statsText: [
      { value: 35, label: "Lorem ipsum dolor sit amet" },
      { value: 40, label: "Consectetur adipiscing elit" },
      { value: 25, label: "Integer nec odio. Praesent libero" },
    ],
    useCases: [
      {
        title: "Scalable E-commerce Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "Corporate Workflow Automation",
        description: "Suspendisse potenti. Ut fringilla. Suspendisse potenti. Fusce ac felis sit amet ligula pharetra condimentum.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "SEO-Optimized Content Platform",
        description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
    ],
  },

  aiml: {
    heroImg: "https://via.placeholder.com/1200x600", // Placeholder image
    title: "Web & CMS Development",
    subTitle: "Custom Websites & Content Management Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    statsHeader: "The Impact of Web & CMS Solutions",
    statsText: [
      { value: 35, label: "Lorem ipsum dolor sit amet" },
      { value: 40, label: "Consectetur adipiscing elit" },
      { value: 25, label: "Integer nec odio. Praesent libero" },
    ],
    useCases: [
      {
        title: "Scalable E-commerce Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "Corporate Workflow Automation",
        description: "Suspendisse potenti. Ut fringilla. Suspendisse potenti. Fusce ac felis sit amet ligula pharetra condimentum.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "SEO-Optimized Content Platform",
        description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
    ],
  },

  iot: {
    heroImg: "https://via.placeholder.com/1200x600", // Placeholder image
    title: "Web & CMS Development",
    subTitle: "Custom Websites & Content Management Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    statsHeader: "The Impact of Web & CMS Solutions",
    statsText: [
      { value: 35, label: "Lorem ipsum dolor sit amet" },
      { value: 40, label: "Consectetur adipiscing elit" },
      { value: 25, label: "Integer nec odio. Praesent libero" },
    ],
    useCases: [
      {
        title: "Scalable E-commerce Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "Corporate Workflow Automation",
        description: "Suspendisse potenti. Ut fringilla. Suspendisse potenti. Fusce ac felis sit amet ligula pharetra condimentum.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "SEO-Optimized Content Platform",
        description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
    ],
  },

  gamedev: {
    heroImg: "https://via.placeholder.com/1200x600", // Placeholder image
    title: "Web & CMS Development",
    subTitle: "Custom Websites & Content Management Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    statsHeader: "The Impact of Web & CMS Solutions",
    statsText: [
      { value: 35, label: "Lorem ipsum dolor sit amet" },
      { value: 40, label: "Consectetur adipiscing elit" },
      { value: 25, label: "Integer nec odio. Praesent libero" },
    ],
    useCases: [
      {
        title: "Scalable E-commerce Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "Corporate Workflow Automation",
        description: "Suspendisse potenti. Ut fringilla. Suspendisse potenti. Fusce ac felis sit amet ligula pharetra condimentum.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
      {
        title: "SEO-Optimized Content Platform",
        description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        image: "https://via.placeholder.com/600x400", // Placeholder image
      },
    ],
  },

};

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

  const industries = [
    {
      icon: industries1,
      title: "Education",
      description: "Shaping the future, one institution at a time with innovation and immersive learning.",
    },
    {
      icon: industries2,
      title: "Healthcare",
      description: "Smart, fast, and innovative apps designed to enhance patient care.",
    },
    {
      icon: industries3,
      title: "Real Estate",
      description: "Simplify and enhance your real estate operations with our cutting-edge solutions.",
    },
    {
      icon: industries4,
      title: "Logistics",
      description: "Streamline your supply chain for maximum efficiency and growth.",
    },
    {
      icon: industries5,
      title: "Retail",
      description: "Transform shopping experiences with seamless, omnichannel retail solutions.",
    },
    {
      icon: industries6,
      title: "Fintech",
      description: "Powerful, scalable technology solutions driving innovation in financial services.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    },
  };

  const slideIn = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      }
    },
  });


  return (
    <>
      {/* hero section */}
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
              py: 3,
              fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "48px" },
              fontWeight: "bold",
              textAlign: { xs: "center" },
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
                maxWidth: "1485px",
                mx: "auto",
                py: { xs: 4 },
                px: { xs: 4, md: 10.5, lg: 12, xl: 24 },
                my: 8,
                borderRadius: 2,
                gap: { xs: 3, md: 10 },
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Text Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUp}
                style={{ overflow: "hidden" }}
              >
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
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={slideIn(index % 2 === 0 ? "right" : "left")}
                style={{ overflow: "hidden" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "100%" },
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
                      objectFit: "cover",
                      display: "block",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />

                </Box>
              </motion.div>
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
              px: { xs: 2, sm: 4, md: 5, lg: 6, xl: 7 },
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

      {/* projects */}
      <Box sx={{ backgroundColor: "#121212", py: 6, px: { xs: 2, sm: 4, md: 6 }, position: "relative" }}>
        <Box sx={{
          px: { xs: "auto", sm: 2.5, md: 5, lg: 5.7, xl: 18 },
          py: 3
        }}
        >
          <Typography variant='h4'>
            Check Our Projects
          </Typography>
        </Box>
        <Box sx={{ px: { xs: "auto", sm: 2.9, md: 4.5, lg: 6, xl: 18 } }}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            style={{ maxWidth: "1350px", margin: "auto", overflow: "hidden" }}
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
        </Box>


        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", justifyContent: { md: "center", lg: "right" }, gap: 2, mt: 3, pr: { md: 0, lg: 6, xl: 18 } }}>
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

      {/* Industries */}

      <Box sx={{ backgroundColor: "#121212" }}>
        <Box sx={{ paddingTop: 15 }}>
          <Typography
            className=""
            variant="h3"
            textAlign="center"
            sx={{
              fontSize: { xs: 23, sm: 28, md: 32 },
              py: 1,
              fontWeight: 600
            }}
          >
            Revolutionizing Industries
          </Typography>

          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              fontSize: { xs: 13, sm: 19, md: 22 },
              py: 2,
              fontWeight: 400
            }}
          >
            How Metaphi is Driving Innovation Across Industries
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
            px: { xs: 2, sm: 6, lg: 12, xl: 21 },
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#121212",
              py: 6,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr 1fr"
              },
              gap: { xs: 2, md: 3, lg: 4 },
              width: "100%",
              maxWidth: "1400px",
              textAlign: "center",
              margin: "0 auto",
              justifyItems: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  display: "flex",
                  justifyContent: "center",
                  flexBasis: "100%",
                  padding: "20px"
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#181818",
                    border: "2px solid transparent",
                    borderRadius: "12px",
                    padding: { xs: "40px", sm: "40px" },
                    width: "100%",
                    maxWidth: "350px",
                    minHeight: "200px",
                    maxHeight: "260px",
                    height: { xs: "200px", md: "260px" },
                    textAlign: "center",
                    transition: "all 0.4s ease-in-out",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                    borderColor: hoveredIndex === index ? "#00C8FF" : "transparent",
                    boxShadow: hoveredIndex === index
                      ? "rgba(0, 200, 255, 0.4) -5px 5px, rgba(0, 255, 150, 0.3) -10px 10px, rgba(0, 200, 255, 0.2) -15px 15px, rgba(0, 255, 150, 0.1) -20px 20px"
                      : "none"
                  }}
                >
                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -100,
                      right: -200,
                      width: hoveredIndex === index ? "900px" : "0%",
                      height: hoveredIndex === index ? "900px" : "0%",
                      background: "linear-gradient(135deg, #027899 0%, #1E3A5F 100%)",
                      transition: "width 0.9s ease-in-out, height 0.9s ease-in-out",
                      zIndex: 1,
                      borderRadius: "50%"
                    }}
                  />
                  <motion.div
                    animate={{
                      right: hoveredIndex === index ? "50%" : "10%",
                      transform: hoveredIndex === index ? "translateX(50%)" : "none",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      top: window.innerWidth < 899 ? "14%" : "19%",
                      left: window.innerWidth < 899 ? "10%" : "20%",
                      transform: "translateX(-50%, -50%)",
                      width: "auto",
                      zIndex: 3,
                      pointerEvents: "none"
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 45, md: 50 },
                        height: { xs: 45, md: 50 },
                        backgroundColor: "#1E3A5F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px 0",
                        mx: "auto",
                        mb: 2,
                        boxShadow: "rgba(13, 118, 147, 0.4) -2px 2px, rgba(236, 236, 236, 0.3) -1px 1px"
                      }}
                    />
                  </motion.div>

                  {/* Icon */}
                  <Box sx={{ zIndex: 1000, display: "flex", justifyContent: "center", pointerEvents: "none" }}>
                    <img
                      src={industry.icon}
                      alt={`${industry.title} icon`}
                      style={{ width: 35, height: 35 }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: "bold", color: "white", paddingTop: 2, zIndex: 2, pointerEvents: "none", minHeight: "50px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                    {industry.title}
                  </Typography>

                  {/* Description */}
                  <Typography sx={{ fontSize: { xs: "12px", md: "14px" }, color: "white", mt: 1, zIndex: 2, pointerEvents: "none", textAlign: "center", minHeight: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {industry.description}
                  </Typography>
                  <Button
                    disableRipple
                    sx={{
                      color: "white",
                      mt: 1,
                      zIndex: 2,
                      opacity: { md: `${hoveredIndex === index ? 1 : 0}` },
                      transition: "opacity 0.3s ease-in-out",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}

                    variant="text"
                  >
                    Learn more <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faArrowRight} />
                  </Button>
                </Box>
              </motion.div>
            ))}

          </Box>
          <p style={{ padding: 20 }}></p>
          <Link style={{ textDecoration: "none" }} to={'/about'}>
            <StyledButton />
          </Link>
        </Box>
      </Box>


      {/* Contact us */}
      <Box sx={{ py: 7 }}></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          py: 6,
          px: { xs: 2, md: 11, lg: 12, xl: 24 },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left Side - Contact Info */}
        <Box sx={{ flex: 1, minWidth: "200px", color: "white", textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h4" fontWeight="bold">
            Got An <span className="gradientS">Idea?</span>
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ mt: -1 }}>
            Make It Reality.
          </Typography>
          <Typography sx={{ mt: 2, color: "#AAAAAA" }}>
            Tell us a little about your project and we’ll connect with you within 24 hours.
          </Typography>

          {/* Contact Info */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 4, justifyContent: { xs: "center", md: "flex-start" } }}>
            <Box sx={{ width: 50, height: 50, backgroundColor: "#0E2A3A", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2 }}>
              <FontAwesomeIcon icon={faEnvelope} color="#00C8FF" size="lg" />
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography variant="body2" sx={{ color: "#AAAAAA" }}>Email</Typography>
              <Typography variant="body1" fontWeight="bold">contact@test.com</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mt: 3, justifyContent: { xs: "center", md: "flex-start" } }}>
            <Box sx={{ width: 50, height: 50, backgroundColor: "#0E2A3A", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2 }}>
              <FontAwesomeIcon icon={faCalendar} color="#00C8FF" size="lg" />
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography variant="body2" sx={{ color: "#AAAAAA" }}>Schedule a Call with our team</Typography>
              <Typography variant="body1" fontWeight="bold">Free Consultation</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Side - Contact Form */}
        <Formik
          initialValues={{
            email: "",
            jobTitle: "",
            service: "",
            budget: "",
            message: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email").required("Email is required"),
            jobTitle: Yup.string().required("Job title is required"),
            service: Yup.string().required("Please select a service"),
            budget: Yup.string().required("Please select a budget"),
            message: Yup.string().required("Message is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form Data:", values);
            alert("Message Sent Successfully!");
            setSubmitting(false);
          }}
        >
          {({ handleSubmit }) => (
            <Box component={Form} onSubmit={handleSubmit} sx={{ flex: 1, minWidth: "200px", backgroundColor: "#111", p: 4, borderRadius: 2 }}>
              {/* Email */}
              <FastField name="email">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email*"
                    variant="outlined"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#222",
                      borderRadius: 1,
                      input: { color: "white" },
                      label: { color: "white" },
                      mb: 2,
                    }}
                  />
                )}
              </FastField>

              {/* Job Title */}
              <FastField name="jobTitle">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Job Title*"
                    variant="outlined"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#222",
                      borderRadius: 1,
                      input: { color: "white" },
                      label: { color: "white" },
                      mb: 2,
                    }}
                  />
                )}
              </FastField>

              {/* Service Dropdown */}
              <FastField name="service">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    fullWidth
                    select
                    label="Service*"
                    variant="outlined"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#222",
                      borderRadius: 1,
                      mb: 2,
                      "& .MuiInputBase-input": { color: "white" },
                      "& .MuiInputLabel-root": { color: "white" },
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": { borderColor: "#ccc" },
                        "&.Mui-focused fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiSelect-select": { color: "white" },
                    }}
                  >
                    <MenuItem value="Business Solution">Business Solution</MenuItem>
                    <MenuItem value="Software Development">Software Development</MenuItem>
                    <MenuItem value="Consulting">Consulting</MenuItem>
                  </TextField>
                )}
              </FastField>

              {/* Budget Dropdown */}
              <FastField name="budget">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    fullWidth
                    select
                    label="Budget*"
                    variant="outlined"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#222",
                      borderRadius: 1,
                      mb: 2,
                      "& .MuiInputBase-input": { color: "white" },
                      "& .MuiInputLabel-root": { color: "white" },
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": { borderColor: "#ccc" },
                        "&.Mui-focused fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiSelect-select": { color: "white" },
                    }}
                  >
                    <MenuItem value="$0-$7k">$0-$7k</MenuItem>
                    <MenuItem value="$7k-$20k">$7k-$20k</MenuItem>
                    <MenuItem value="$20k+">$20k+</MenuItem>
                  </TextField>
                )}
              </FastField>

              {/* Message */}
              <FastField name="message">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Message*"
                    variant="outlined"
                    multiline
                    rows={4}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#222",
                      borderRadius: 1,
                      mb: 2,
                      "& .MuiInputBase-input": { color: "white" },
                      "& .MuiInputLabel-root": { color: "white" },
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": { borderColor: "#ccc" },
                        "&.Mui-focused fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiSelect-select": { color: "white" },
                    }}
                  />
                )}
              </FastField>

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: "#00C8FF",
                  color: "white",
                  fontWeight: "bold",
                  p: 1.5,
                  "&:hover": { backgroundColor: "#0099CC" },
                }}
              >
                Send Message
              </Button>
            </Box>
          )}
        </Formik>
      </Box>

    </>
  );
};

export default Services;
