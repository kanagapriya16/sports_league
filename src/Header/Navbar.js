import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import testball from "../assest/testball.webp";
import loho from "../assest/loho.png";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import SearchIcon from "@mui/icons-material/Search";

import PersonIcon from "@mui/icons-material/Person";
import { BrowserRouter as Router } from "react-router-dom";

const drawerWidth = "50%";
const navItems = ["Home", "Teams", "Venues", "About", "More"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ textAlign: "start", marginTop: "10px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box
            sx={{
              border: "0.8px solid white",
            }}
          >
            <Button
              sx={{
                color: "white",
                gap: "30px",
                border: "0.8px solid white",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, rgba(27,25,50,1) 0%, rgba(153,198,249,1) 0%, rgba(26,27,26,1) 100%, rgba(117,128,130,1) 100%)",
                  border: "2px double lightblue",
                },
              }}
            >
              <AccountCircleSharpIcon />
              <Typography
                variant="h6"
                color={"white"}
                textTransform={"none"}
                fontWeight={800}
              >
                sign in
              </Typography>
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerToggle}
          >
            <CloseIcon size="40px" sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      <List
        style={{
          fontWeight: 900,
        }}
        sx={{ flexGrow: 1 }}
      >
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "start",
                margin: "0 13px",
                position: "relative",
                overflow: "hidden", // Hide overflow for pseudo-element to extend
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 38,
                  right: "100%", // Set right to 100% to start from the right
                  width: "100%",
                  height: "3px",
                  backgroundColor: "yellow",
                  transition: "right 0.3s ease", // Transition right property
                },
                "&:hover:before": {
                  right: 0, // Move to the left on hover
                },
                "&:focus, &:active": {
                  outline: "none",

                  // Remove focus outline
                },
              }}
            >
              {index !== 0 && index && (
                <ListItemText
                  color="white"
                  primary={item}
                  sx={{
                    color: isSmallScreen ? "white" : "white",
                    fontWeight: isSmallScreen ? 900 : "inherit", // Set fontWeight to 900 for small screens
                    fontSize: "90px",
                    "&:hover": {
                      color: "skyblue",
                    },
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            elevation={0}
            position={isSmallScreen ? "fixed" : "fixed"}
            sx={{
              bottom: isSmallScreen ? "auto" : "auto",
              backgroundImage: `url(${testball})`, // Use the imported image
              display: "flex",
              borderTop: "0.5px solid white",
              top: isSmallScreen ? 0 : 60,
              justifyContent: "center",
              textAlign: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Toolbar
              sx={{
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                style={{
                  height: "88px",
                  marginLeft: "-3%",
                  display: "flex",

                  color: "white",
                }}
                src={loho}
              ></img>
              <img
                src="https://resources.cricket-australia.pulselive.com/cricket-australia/document/2022/10/25/bdb5b713-9bb9-40c9-aefd-84b51f0b1b20/CricketAustraliaLogoWhiteWide.svg"
                style={{
                  height: "30px",
                  marginLeft: isSmallScreen ? "-20%" : "-1%",
                  display: "flex",
                }}
                alt="Logo"
              />
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  flexGrow: 1, // Take up remaining space
                  textAlign: "center",
                }}
              >
                <Button
                  disableElevation
                  disableFocusRipple
                  disableTouchRipple
                  href="/home1"
                  key="more"
                  sx={{
                    color: isSmallScreen ? "white" : "white",
                    fontSize: "17px",
                    textTransform: "none",

                    fontWeight: 700,
                    margin: "0 13px",
                    position: "relative",
                    overflow: "hidden",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 38,
                      right: "100%",
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#9ebd8e",
                      transition: "right 0.3s ease",
                    },
                    "&:hover:before": {
                      right: 0,
                    },
                    "&:focus, &:active": {
                      outline: "none",
                    },
                  }}
                >
                  Home
                </Button>

                <Button
                  disableElevation
                  disableFocusRipple
                  disableTouchRipple
                  href="/venuse"
                  sx={{
                    color: isSmallScreen ? "white" : "white",
                    fontSize: "17px",
                    textTransform: "none",
                    fontWeight: 700,
                    margin: "0 13px",
                    position: "relative",
                    overflow: "hidden", // Hide overflow for pseudo-element to extend
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 38,
                      right: "100%", // Set right to 100% to start from the right
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#9ebd8e",
                      transition: "right 0.3s ease", // Transition right property
                    },
                    "&:hover:before": {
                      right: 0, // Move to the left on hover
                    },
                    "&:focus, &:active": {
                      outline: "none",

                      // Remove focus outline
                    },
                  }}
                >
                  Venues
                </Button>
                <Button
                  disableElevation
                  disableFocusRipple
                  disableTouchRipple
                  href="/fixtures"
                  key="fantacy"
                  sx={{
                    color: isSmallScreen ? "white" : "white",
                    fontSize: "17px",
                    textTransform: "none",
                    fontWeight: 700,
                    margin: "0 13px",
                    position: "relative",
                    overflow: "hidden",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 38,
                      right: "100%",
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#9ebd8e",
                      transition: "right 0.3s ease",
                    },
                    "&:hover:before": {
                      right: 0,
                    },
                    "&:focus, &:active": {
                      outline: "none",
                    },
                  }}
                >
                  Fixtures
                </Button>
                <Button
                  disableElevation
                  disableFocusRipple
                  disableTouchRipple
                  href="/teams"
                  key="fantacy"
                  sx={{
                    color: isSmallScreen ? "white" : "white",
                    fontSize: "17px",
                    textTransform: "none",
                    fontWeight: 700,
                    margin: "0 13px",
                    position: "relative",
                    overflow: "hidden", // Hide overflow for pseudo-element to extend
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 38,
                      right: "100%", // Set right to 100% to start from the right
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#9ebd8e",
                      transition: "right 0.3s ease", // Transition right property
                    },
                    "&:hover:before": {
                      right: 0, // Move to the left on hover
                    },
                    "&:focus, &:active": {
                      outline: "none",

                      // Remove focus outline
                    },
                  }}
                >
                  Teams
                </Button>
                <Button
                  disableElevation
                  disableFocusRipple
                  disableTouchRipple
                  href="/About"
                  key="fantacy"
                  sx={{
                    color: isSmallScreen ? "white" : "white",
                    fontSize: "17px",
                    textTransform: "none",
                    fontWeight: 700,
                    margin: "0 13px",
                    position: "relative",
                    overflow: "hidden", // Hide overflow for pseudo-element to extend
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 38,
                      right: "100%", // Set right to 100% to start from the right
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#9ebd8e",

                      transition: "right 0.3s ease", // Transition right property
                    },
                    "&:hover:before": {
                      right: 0, // Move to the left on hover
                    },
                    "&:focus, &:active": {
                      outline: "none",

                      // Remove focus outline
                    },
                  }}
                >
                  About
                </Button>
                <Button
                  disableElevation
                  disableFocusRipple
                  disableTouchRipple
                  href="/more"
                  key="fantacy"
                  sx={{
                    color: isSmallScreen ? "white" : "white",

                    fontSize: "17px",
                    textTransform: "none",
                    fontWeight: 700,
                    margin: "0 13px",
                    position: "relative",
                    overflow: "hidden", // Hide overflow for pseudo-element to extend
                    "&:before": {
                      content: '""',
                      position: "absolute",

                      top: 38,
                      right: "100%", // Set right to 100% to start from the right
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#9ebd8e",

                      transition: "right 0.3s ease", // Transition right property
                    },
                    "&:hover:before": {
                      right: 0,

                      // Move to the left on hover
                    },
                    "&:focus, &:active": {
                      outline: "none",

                      // Remove focus outline
                    },
                  }}
                >
                  More
                </Button>
              </Box>
              {isSmallScreen ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ marginRight: "16px", display: { sm: "none" } }}
                >
                  <MenuIcon
                    sx={{
                      fontSize: "40px",
                    }}
                  />
                </IconButton>
              ) : (
                <Button
                  disableElevation
                  disableFocusRipple
                  variant="contained"
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: "20px",
                    border: "0.1px solid white",
                    fontWeight: "900",
                    transition: "border-color 0.3s ease-in-out", // Add transition for smooth animation
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, rgba(27,25,50,1) 0%, rgba(153,198,249,1) 0%, rgba(26,27,26,1) 100%, rgba(117,128,130,1) 100%)",
                      border: "2px double lightblue",
                    },
                  }}
                >
                  <PersonIcon />
                  Sign In
                </Button>
              )}
              <IconButton
                sx={{
                  color: "white",
                  display: isSmallScreen ? "none" : "block",
                  ml: "10px",
                }}
              >
                <SearchIcon
                  sx={{
                    fontSize: "40px",
                  }}
                />
              </IconButton>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  top: 0,
                  backgroundColor:
                    "linear-gradient(90deg, rgba(27,25,50,1) 0%, rgba(18,47,79,1) 0%, rgba(26,27,26,1) 100%, rgba(117,128,130,1) 100%)",
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </Router>
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
