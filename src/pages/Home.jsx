import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography, Modal, IconButton, Card, CardContent, TextField, MenuItem } from '@mui/material';
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "animate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStar, faTimes, faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo1 from "../images/partner-1.png";
import logo2 from "../images/partner-2.png";
import logo3 from "../images/partner-3.png";
import logo4 from "../images/partner-4.png";
import logo5 from "../images/partner-5.png";
import logo6 from "../images/partner-9.png";
import services1 from "../images/vr.svg";
import services2 from "../images/ar.svg";
import services3 from "../images/metaverse.svg";
import services4 from "../images/webArXr.svg";
import services5 from "../images/intelligent.svg";
import services6 from "../images/3dmodeling.svg";
import services7 from "../images/gamedev.svg";
import services8 from "../images/mobiledev.svg";
import services9 from "../images/webdeb.svg";
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
import { Link } from "react-router-dom";
import StyledButton2 from "../styledbuttons/StyledButton2";
import heroImg from "../images/mainGif.gif";
const Home = () => {

    const counters = [
        { value: 50, label: "Projects Completed" },
        { value: 40, label: "Trusted Partners" },
        { value: 10, label: "Innovation Awards Won" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };



    const testimonials = [
        {
            title: "VR System Development",
            review:
                "OCTAV built a working system that improved the client's app's UX and minimized motion sickness. The team had impressive talented individuals and was great to work with. OCTAV delivered work within the expected timeframe and communicated with the client via email and virtual meetings.",
        },
        {
            title: "3D Environment & VR Chart Dev",
            review:
                "OCTAV delivered great work and met expectations. The team had great listening skills and understood the client’s vision. Their resources were highly organized and responsive, allowing them to deliver the product on time. Moreover, they were highly professional, productive, and collaborative.",
        },
        {
            title: "VR System Development",
            review:
                "OCTAV built a working system that improved the client's app's UX and minimized motion sickness. The team had impressive talented individuals and was great to work with. OCTAV delivered work within the expected timeframe and communicated with the client via email and virtual meetings.",
        },
        {
            title: "3D Environment & VR Chart Dev",
            review:
                "OCTAV delivered great work and met expectations. The team had great listening skills and understood the client’s vision. Their resources were highly organized and responsive, allowing them to deliver the product on time. Moreover, they were highly professional, productive, and collaborative.",
        },
    ];

    const [openModal, setOpenModal] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    const handleOpenModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedTestimonial(null);
    };


    gsap.registerPlugin(ScrollTrigger);

    const testimonialCards = useRef([]);

    useEffect(() => {

        gsap.set(".swiper-slide", { opacity: 0 });

        ScrollTrigger.batch(".swiper-slide", {
            start: "top 100%",
            once: true,
            onEnter: (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "power2.out",
                });
            },
        });

        return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }, []);



    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    const logoRefs = useRef([]);
    useEffect(() => {
        gsap.set(logoRefs.current, { opacity: 0, y: 50, scale: 0.9 });

        ScrollTrigger.batch(logoRefs.current, {
            start: "top 85%",
            onEnter: (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.3,
                    duration: 0.6,
                    ease: "power3.out",
                });
            },
        });

        return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }, []);


    const services = [
        {
            icon: services1,
            title: "Virtual Reality",
            description: "Immerse your business in cutting-edge VR solutions",
        },
        {
            icon: services2,
            title: "Augmented Reality",
            description: "Elevate your customer experiences with AR",
        },
        {
            icon: services3,
            title: "Metaverse Development",
            description: "Build immersive digital twins and metaverse experiences",
        },
        {
            icon: services4,
            title: "WebXR & WebAR Development",
            description: "Create engaging web-based XR and AR experiences",
        },
        {
            icon: services5,
            title: "Intelligent XR Solutions",
            description: "Integrate AI-powered XR solutions for enhanced interactivity",
        },
        {
            icon: services6,
            title: "3D Modeling & Animation",
            description: "Craft stunning 3D assets and animations for various applications",
        },
        {
            icon: services7,
            title: "Game Development",
            description: "Develop interactive and immersive games across platforms",
        },
        {
            icon: services8,
            title: "Mobile App Development",
            description: "Build intuitive and feature-rich mobile applications",
        },
        {
            icon: services9,
            title: "Web and CMS Development",
            description: "Create scalable and robust web and content management solutions",
        },
    ];

    const projects = [
        {
            title: "RiadVR",
            year: "2024",
            category: "VR",
            description: "Experience the grandeur of a traditional Moroccan Riad in virtual reality. Every element, from intricate Zellij tiling to detailed Nekch carvings...",
            image: placeholderimg,
        },
        {
            title: "StockVR",
            year: "2022",
            category: "VR",
            description: "Stock VR is an immersive virtual reality application created to enhance team collaboration and provide deeper insights into financial markets...",
            image: placeholderimg,
        },
        {
            title: "Crane Simulation",
            year: "2022",
            category: "VR",
            description: "Crane Training Simulation is an advanced VR app designed specifically for port operators to train their staff in crane operations...",
            image: placeholderimg,
        },
        {
            title: "StockVR",
            year: "2022",
            category: "VR",
            description: "Stock VR is an immersive virtual reality application created to enhance team collaboration and provide deeper insights into financial markets...",
            image: placeholderimg,
        },
        {
            title: "StockVR",
            year: "2022",
            category: "VR",
            description: "Stock VR is an immersive virtual reality application created to enhance team collaboration and provide deeper insights into financial markets...",
            image: placeholderimg,
        },
        {
            title: "StockVR",
            year: "2022",
            category: "VR",
            description: "Stock VR is an immersive virtual reality application created to enhance team collaboration and provide deeper insights into financial markets...",
            image: placeholderimg,
        },
    ];

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

    const [hoveredIndex, setHoveredIndex] = useState(null);



    return (
        <>
            {/* Hero section */}
            <Box
                component="section"
                sx={{
                    px: { xs: 3, sm: 8, md: 11, lg: "95px", xl: "100px" },
                    py: 10,
                    maxWidth: "1495px",
                    margin: "auto",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    gap: { xs: 4, md: 8 },
                }}
            >
                {/* Left Side - Text Content */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        className='animate__animated animate__fadeInUp'
                        variant="h4"
                        textAlign="left"
                        sx={{ fontSize: { xs: 23, sm: 28, md: 32 }, py: 2 }}
                    >
                        The Future is Immersive - Let’s Shape it Together
                    </Typography>

                    <Typography
                        className='animate__animated animate__fadeInUp'
                        variant='h4'
                        textAlign="left"
                        sx={{ fontSize: { xs: 33, sm: 38, md: 42 }, fontWeight: 600, py: 3 }}
                    >
                        Where Creativity Meets <span className="gradientS">Immersion</span>
                    </Typography>

                    <Typography
                        className='animate__animated animate__fadeInUp'
                        variant="body1"
                        textAlign="left"
                        sx={{ maxWidth: "600px", wordWrap: "break-word" }}
                    >
                        METAPHI INNOVATIONS is a cutting-edge development company, we specialize in creating immersive experiences through Web development, App development, and Game development, alongside robust Custom Software solutions tailored to meet the unique needs of our clients.
                    </Typography>

                    {/* Counter Section */}
                    <Box
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        sx={{
                            py: 8,
                            color: "white",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: { xs: "center", md: "left" },
                            alignItems: "center",
                            gap: { xs: 2, md: 4 },
                            flexWrap: "wrap",
                        }}
                    >
                        {counters.map((counter, index) => (
                            <Box
                                component={motion.div}
                                key={index}
                                variants={itemVariants}
                                sx={{
                                    textAlign: "center",
                                    minWidth: { xs: "120px", sm: "150px", md: "180px" },
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                    sx={{ fontSize: { xs: "24px", sm: "28px", md: "32px" } }}
                                >
                                    + <CountUp end={counter.value} duration={4} />
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                                >
                                    {counter.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* CTA Button */}
                    <Link className="animate__animated animate__fadeInUp" style={{ textDecoration: "none" }} to={'/industries'}>
                        <StyledButton2 />
                    </Link>
                </Box>

                {/* Right Side - Image */}
                <Box
                    component="img"
                    src={heroImg}
                    alt="Immersive Future"
                    sx={{
                        flex: 1,
                        width: "100%",
                        maxWidth: { xs: "100%", md: "50%" },
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    }}
                />
            </Box>


            {/* trusted brands */}
            <Typography
                variant="h3"
                textAlign="center"
                sx={{
                    fontSize: { xs: 23, sm: 28, md: 32 },
                    paddingTop: 10,
                    fontWeight: 600
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
                        <a href="#">
                            <Box
                                key={index}
                                ref={(el) => (logoRefs.current[index] = el)}
                                component="img"
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                sx={{
                                    display: "inline-block",
                                    height: { xs: 50, sm: 60, md: 80, lg: 120, xl: 150 },
                                    filter: "brightness(1.3)",
                                    transition: "transform 0.4s ease-in-out, filter 0.4s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                        filter: "brightness(1.5)",
                                    },
                                }}

                            />
                        </a>

                    ))}
                </Box>
            </Box>

            {/* what our customers say */}
            <Typography
                variant="h3"
                textAlign="center"
                sx={{
                    fontSize: { xs: 23, sm: 28, md: 32 },
                    py: 2,
                    fontWeight: 600
                }}
            >
                What Our Customers Say
            </Typography>

            <Box
                sx={{
                    py: 9,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    mb: { sx: "auto", md: "50px" }
                }}
            >
                {/* Navigation Arrow for Desktop */}
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="prev-button" color="#00C8FF" style={{ cursor: "pointer" }} />
                </Box>

                {/* Swiper Container */}
                <Box sx={{ width: "90%", maxWidth: "1480px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: ".prev-button",
                            nextEl: ".next-button",
                        }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                        speed={1000}
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true}
                        breakpoints={{
                            1000: { slidesPerView: 1, centeredSlides: true },
                            1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 10 },
                            1340: { slidesPerView: 3, centeredSlides: false, spaceBetween: 15 },
                            1440: { slidesPerView: 3, centeredSlides: false, spaceBetween: 15 },
                        }}
                        style={{ margin: "auto", overflow: "hidden", width: "100%" }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index} style={{ willChange: "opacity" }}>
                                <Box
                                    ref={(el) => (testimonialCards.current[index] = el)}
                                    onClick={() => handleOpenModal(item)}
                                    sx={{
                                        background: "linear-gradient(135deg, #00C853, #0D47A1)",
                                        backgroundSize: "400% 400%",
                                        animation: "moveGradient 6s infinite alternate ease-in-out",
                                        borderRadius: "10px",
                                        padding: "20px",
                                        color: "white",
                                        textAlign: "left",
                                        maxWidth: "450px",
                                        maxHeight: "200px",
                                        mx: "auto",
                                        transition: "all 0.4s ease-in-out",
                                        overflow: "hidden",
                                        cursor: "pointer",
                                    }}
                                >
                                    {/* Rating Stars */}
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} color="#00C8FF" />
                                        ))}
                                    </Box>

                                    <Typography sx={{ fontWeight: "bold", mt: 1, fontSize: { xs: "12px", md: "14px" } }}>{item.title}</Typography>
                                    <Typography
                                        sx={{
                                            mt: 1,
                                            fontSize: { xs: "10px", md: "14px" },
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 3,
                                            overflow: "hidden",
                                        }}
                                    >
                                        {item.review}
                                    </Typography>

                                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                                        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>Clutch</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows */}
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            justifyContent: "center",
                            gap: 3,
                            mt: 3,
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} size="2x" className="prev-button" color="#00C8FF" style={{ cursor: "pointer" }} />
                        <FontAwesomeIcon icon={faArrowRight} size="2x" className="next-button" color="#00C8FF" style={{ cursor: "pointer" }} />
                    </Box>



                </Box>

                {/* Navigation Arrow for Desktop */}
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" className="next-button" color="#00C8FF" style={{ cursor: "pointer" }} />
                </Box>
                {/* Modal */}
                <Modal open={openModal} onClose={handleCloseModal} sx={{ margin: 4 }}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            bgcolor: "#242424",
                            color: "white",
                            borderRadius: "10px",
                            padding: { xs: "20px", sm: "30px", md: "40px" },
                            width: { xs: "90%", sm: "70%", md: "50%" },
                            maxHeight: "80vh",
                            overflowY: "auto",
                            boxShadow: 24,
                        }}
                    >
                        {/* Close Button */}
                        <IconButton
                            onClick={handleCloseModal}
                            sx={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                color: "white",
                            }}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </IconButton>

                        {selectedTestimonial && (
                            <>
                                {/* Rating Stars */}
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} color="#00C8FF" />
                                    ))}
                                </Box>

                                {/* Title */}
                                <Typography sx={{ fontWeight: "bold", mt: 2, fontSize: "22px" }}>
                                    {selectedTestimonial.title}
                                </Typography>

                                {/* Full Review */}
                                <Typography sx={{ mt: 2, fontSize: "16px", lineHeight: 1.5 }}>
                                    {selectedTestimonial.review}
                                </Typography>

                                {/* Footer */}
                                <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>Clutch</Typography>
                                </Box>
                            </>
                        )}
                    </Box>
                </Modal>

            </Box>

            {/* how we help section */}
            <Box sx={{ backgroundColor: "#121212" }}>
                <Box sx={{ paddingTop: 10 }}>
                    <Typography
                        className=""
                        variant="h3"
                        textAlign="center"
                        sx={{
                            fontSize: { xs: 23, sm: 28, md: 32 },
                            py: 2,
                            fontWeight: 600
                        }}
                    >
                        How We Help
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
                        Building the Future with Cutting-Edge Technology
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 4 }}>
                    <Box
                        sx={{
                            backgroundColor: "#121212",
                            py: 6,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: { xs: 2, md: 4 },
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        {services.map((service, index) => (
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
                                            width: hoveredIndex === index ? "1000px" : "0%",
                                            height: hoveredIndex === index ? "1000px" : "0%",
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
                                            src={service.icon}
                                            alt={`${service.title} icon`}
                                            style={{ width: 35, height: 35 }}
                                        />
                                    </Box>

                                    {/* Title */}
                                    <Typography sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: "bold", color: "white", paddingTop: 2, zIndex: 2, pointerEvents: "none", minHeight: "50px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                                        {service.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography sx={{ fontSize: { xs: "12px", md: "14px" }, color: "white", mt: 1, zIndex: 2, pointerEvents: "none", textAlign: "center", minHeight: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        {service.description}
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
                    <p style={{ padding: 10 }}></p>
                    <Link style={{ textDecoration: "none" }} to={'/industries'}>
                        <StyledButton />
                    </Link>

                </Box>
            </Box>


            {/* projects section */}
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: 15, mb: { sm: "auto", md: "100px" } }}>
                <Typography
                    className=""
                    variant="h3"
                    textAlign="center"
                    sx={{
                        fontSize: { xs: 23, sm: 28, md: 32 },
                        py: 2,
                        fontWeight: 600
                    }}
                >
                    Checkout Our Projects
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
                    Building the Future with Cutting-Edge Technology
                </Typography>

                <Box
                    sx={{
                        py: 6,
                        px: { xs: 2, sm: 4, md: 6 },
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 4,
                    }}
                >
                    {projects.map((project, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: "100%", sm: "80%", md: "350px", lg: "350px", xl: "420px" },
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Card
                                sx={{
                                    backgroundColor: "#181818",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": { transform: "scale(1.02)", boxShadow: "0px 0px 15px rgba(0, 200, 255, 0.3)" },
                                }}
                            >
                                {/* Project Image */}
                                <Box
                                    sx={{
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "200px",
                                        borderRadius: "12px 12px 0 0",
                                    }}
                                />

                                <CardContent sx={{ textAlign: "left", color: "white" }}>
                                    {/* Title & Year */}
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#00C8FF" }}>
                                            {project.year}
                                        </Typography>
                                    </Box>

                                    {/* Category */}
                                    <Typography variant="body2" sx={{ color: "#AAAAAA", mt: 1 }}>
                                        Category {project.category}
                                    </Typography>



                                    {/* Description */}
                                    <Typography variant="body2" sx={{ mt: 2 }}>
                                        {project.description}
                                    </Typography>

                                    {/* View Details Button */}
                                    <Button
                                        disableRipple
                                        sx={{
                                            color: "#00C8FF",
                                            mt: 2,
                                            fontWeight: "bold",
                                            display: "flex",
                                            alignItems: "center",
                                            "&:hover": { textDecoration: "underline", backgroundColor: "transparent" },
                                            backgroundColor: "transparent",
                                        }}
                                        variant="text"
                                    >
                                        VIEW PROJECTS DETAILS
                                        <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
                                    </Button>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
                <Link style={{ textDecoration: "none" }} to={'/industries'}>
                    <StyledButton />
                </Link>
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

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 4 }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: { xs: 2, md: 4 },
                            width: "100%",
                            textAlign: "center",
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
                    px: { xs: 2, md: 12, lg: 12, xl: 14 },
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

    )
}

export default Home
