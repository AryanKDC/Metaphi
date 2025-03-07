import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Container, Box, IconButton, Button, Drawer, List, ListItem, ListItemText, Collapse, Divider, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import logoImg from "../images/logo.png";
import NavbarStyledBtn from "../styledbuttons/NavbarStyledBtn";
const pages = ["About", "Services", "Industries", "Projects", "Resources", "Contact",];

const subLinks = {

    About: [{ name: "Company Overview", path: "/about/overview" }, { name: "Mission & Vision", path: "/about/missionvision" }, { name: "Our Team", path: "/about/team" }, { name: "Careers", path: "/about/careers" }],
    Services: [{ name: "Web Development", path: "/services/web" }, { name: "App Development", path: "/services/mobile" }, { name: "Virtual Reality", path: "/services/vrdev" }, { name: "Augmented Reality", path: "/services/ardev" }, { name: "3D Modeling & Animation", path: "/services/animation" }, { name: "Intelligent XR Solution", path: "/services/xrsolutions" }, { name: "WebAR & WebXR Development", path: "/services/webarxrdev" }, { name: "More", path: "/services" }],
    Industries: [{ name: "Education", path: "/industries/education" }, { name: "Healthcare", path: "/industries/healthcare" }, { name: "Real Estate", path: "/industries/realestate" }, { name: "Manufacturing", path: "/industries/manufacturing" }, { name: "Retail", path: "/industries/retail" }, { name: "Finance & Banking", path: "/financebanking" }, { name: "More", path: "/industries" },],
    Projects: [{ name: "Case Studies", path: "/projects/case studies" }, { name: "Project Testimonials", path: "/projects/testimonials" }],
    Resources: [{ name: "Research Articles", path: "/resources/research-articles" }, { name: "Tech News", path: "/blog/tech-news" }, { name: "Blogs", path: "/resources/blogs" }]
};

const Navbar = () => {
    const location = useLocation();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    let closeTimeout = null;

    // **Mobile Menu Functions**
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleCloseDrawer = () => setMobileOpen(false);

    // **Mobile Dropdown Toggle**
    const handleToggleDropdown = (page) => {
        if (subLinks[page]) {
            setOpenDropdown(openDropdown === page ? null : page);
        }
    };

    // **Desktop Dropdown Functions**
    const handleMouseEnter = (page) => {
        clearTimeout(closeTimeout);
        setActiveDropdown(page);
    };

    const handleMouseLeave = () => {
        closeTimeout = setTimeout(() => {
            setActiveDropdown(null);
        }, 0);
    };

    const [hoveredSublink, setHoveredSublink] = useState(null)

    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: "#242424", px: { sm: "30px", md: "60px", lg: "70px" } }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                        {/* Logo */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Link to="/">
                                <img src={logoImg} alt="Octav" style={{ height: "40px" }} />
                            </Link>
                        </Box>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, ml: "auto", alignItems: "center" }}>
                            {pages.map((page) => {
                                if (page === "Contact") return null;

                                const isActive = subLinks[page]?.some((subLink) => location.pathname === subLink.path);

                                if (subLinks[page]) {
                                    return (
                                        <Box
                                            key={page}
                                            sx={{ position: "relative" }}
                                            onMouseEnter={() => handleMouseEnter(page)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Button
                                                disableRipple
                                                className={isActive ? "gradientS" : ""}
                                                sx={{
                                                    textTransform: "none",
                                                    fontWeight: isActive ? "bold" : "normal",
                                                    color: isActive ? "inherit" : "white",
                                                    "&:hover": {
                                                        backgroundColor: "transparent",
                                                    },
                                                }}
                                                onMouseEnter={(e) => (e.target.style.color = "#00C853")}
                                                onMouseLeave={(e) => (e.target.style.color = "white")}
                                            >
                                                {page}
                                            </Button>

                                            {/* Invisible Hover Bridge */}
                                            {activeDropdown === page && (
                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        top: "100%",
                                                        left: 0,
                                                        width: "100%",
                                                        height: "15px",
                                                        backgroundColor: "transparent",
                                                        zIndex: 5,
                                                    }}
                                                    onMouseEnter={() => handleMouseEnter(page)}
                                                />
                                            )}

                                            {/* Desktop Dropdown */}
                                            {activeDropdown === page && (
                                                <Box
                                                    onMouseEnter={() => handleMouseEnter(page)}
                                                    onMouseLeave={handleMouseLeave}
                                                    sx={{
                                                        position: "absolute",
                                                        top: "100%",
                                                        left: 0,
                                                        backgroundColor: "#343434",
                                                        padding: "10px",
                                                        borderRadius: "8px",
                                                        boxShadow: 3,
                                                        zIndex: 10,
                                                        minWidth: "200px",
                                                        mt: 1,
                                                    }}
                                                >
                                                    {subLinks[page].map((subLink, index) => (
                                                        <NavLink
                                                            key={index}
                                                            to={subLink.path}
                                                            className={
                                                                location.pathname === subLink.path || hoveredSublink === index
                                                                    ? "gradientS"
                                                                    : ""
                                                            }
                                                            onMouseEnter={() => setHoveredSublink(index)}
                                                            onMouseLeave={() => setHoveredSublink(null)}
                                                            style={{
                                                                textDecoration: "none",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "10px",
                                                                padding: "8px 12px",
                                                                borderRadius: "5px",
                                                                color:
                                                                    location.pathname === subLink.path || hoveredSublink === index
                                                                        ? "inherit"
                                                                        : "white",
                                                                fontWeight: "400",
                                                                boxShadow:
                                                                    hoveredSublink === index ? "0 0 0 2px #00C853 inset" : "none",
                                                            }}
                                                        >
                                                            {subLink.icon}
                                                            <span>{subLink.name}</span>
                                                        </NavLink>
                                                    ))}

                                                </Box>

                                            )}
                                        </Box>
                                    );
                                }

                                return (
                                    <NavLink
                                        key={page}
                                        to={`/${page.toLowerCase()}`}
                                        className={({ isActive }) => (isActive ? "nav-item-active" : "")}
                                        style={{
                                            color: "white",
                                            textDecoration: "none",
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            transition: "all 0.3s ease-in-out",
                                        }}
                                    >
                                        {page}
                                    </NavLink>
                                );
                            })}

                            {/* Contact Us Button */}
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <Link to="/contact" style={{ textDecoration: "none" }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            background: "linear-gradient(90deg, #0D47A1, #00C853)",
                                            color: "white",
                                            borderRadius: "8px",
                                            px: { xs: 2, md: 3, xl: 4 },
                                            py: { xs: 1, md: 1.2, xl: 1.4 },
                                            fontSize: { md: "11px", xl: "13px" },
                                            fontWeight: "400",
                                        }}
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            </Box>
                            {/* <NavbarStyledBtn/> */}
                        </Box>

                        {/* Mobile Menu Button */}
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton size="large" color="inherit" onClick={handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Sidebar */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleCloseDrawer}
                PaperProps={{
                    sx: { width: 250, height: "100vh", backgroundColor: "#242424", color: "white", overflowY: "auto" },
                }}
            >
                <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                    {/* Sidebar Header */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
                        <Link to="/" onClick={handleCloseDrawer}>
                            <img src={logoImg} alt="Octav" style={{ height: "40px" }} />
                        </Link>
                        <IconButton onClick={handleCloseDrawer} sx={{ color: "white" }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Divider sx={{ backgroundColor: "#00C853" }} />

                    {/* Sidebar Links */}
                    <List sx={{ flexGrow: 1, padding: 0 }}>
                        {pages.map((page, index) => (
                            <React.Fragment key={page}>
                                {subLinks[page] ? (
                                    <ListItem button onClick={() => handleToggleDropdown(page)} sx={{ color: "white" }}>
                                        <ListItemText primary={page} />
                                        {openDropdown === page ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                ) : (
                                    <ListItem
                                        button
                                        component={NavLink}
                                        to={`/${page.toLowerCase()}`}
                                        onClick={handleCloseDrawer}
                                        sx={({ isActive }) => ({
                                            color: "white",
                                            "&.active .MuiListItemText-root": {
                                                background: "rgba(0, 0, 0, 0.4)",
                                                padding: "6px 10px",
                                                borderRadius: "5px",
                                                display: "inline-block",
                                            },
                                            "&.active .MuiTypography-root": {
                                                background: "#00C853",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                fontWeight: "bold",
                                            },
                                            transition: "all 0.3s ease-in-out",
                                        })}
                                    >
                                        <ListItemText primary={page} />
                                    </ListItem>
                                )}

                                {/* Divider between main links (except last one) */}
                                {index < pages.length - 1 && <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} />}

                                {subLinks[page] && (
                                    <Collapse in={openDropdown === page} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {subLinks[page].map((subLink) => (
                                                <ListItem
                                                    button
                                                    key={subLink.path}
                                                    component={NavLink}
                                                    to={subLink.path}
                                                    onClick={handleCloseDrawer}
                                                    sx={({ isActive }) => ({
                                                        pl: 4,
                                                        color: "white",
                                                        "&.active .MuiListItemText-root": {
                                                            background: "rgba(0, 0, 0, 0.4)",
                                                            padding: "6px 10px",
                                                            borderRadius: "5px",
                                                            display: "inline-block",
                                                        },
                                                        "&.active .MuiTypography-root": {
                                                            background: "#00C853",
                                                            WebkitBackgroundClip: "text",
                                                            WebkitTextFillColor: "transparent",
                                                            fontWeight: "bold",
                                                        },
                                                        transition: "all 0.3s ease-in-out",
                                                    })}
                                                >
                                                    <ListItemText primary={subLink.name} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            </Drawer>


        </>
    );
};

export default Navbar;
