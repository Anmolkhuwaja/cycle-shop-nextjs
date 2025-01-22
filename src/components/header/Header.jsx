"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import Link from "next/link";
import AppDrawer from "./AppDrawer";
import { usePathname } from "next/navigation";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBicyclePage, setIsBicyclePage] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    setIsBicyclePage(pathname === "/bicycles");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar position="static">
        <Container
          maxWidth="xl"
          className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
            isBicyclePage || isScrolled ? "bg-teal-400" : "bg-transparent"
          }`}
        >
          <Toolbar disableGutters className="flex justify-between">
            <Box
              className="w-[80px] h-12 relative"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            >
              <Image
                fill
                src={
                  "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/logo-1-80x48.png"
                }
              />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <List>
                  <ListItem>
                    <Link href={"/"}>Home</Link>
                  </ListItem>
                  <ListItem>
                    <Link href={"/bicycles"}>Bicycles</Link>
                  </ListItem>
                  <ListItem>
                    <Link href={"/about-us"}>About Us</Link>
                  </ListItem>
                  <ListItem>
                    <Link href={"/contact"}>Contact</Link>
                  </ListItem>
                </List>
              </Menu>
            </Box>

            <Box
              className="w-[80px] h-12 relative"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <Image
                fill
                src={
                  "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/logo-1-80x48.png"
                }
              />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, width: "38%" }}>
              <List className="flex items-center uppercase w-full">
                <ListItem className="justify-center font-semibold">
                  <Link href={"/"}>Home</Link>
                </ListItem>
                <ListItem className="justify-center font-semibold">
                  <Link href={"/bicycles"}>Bicycles</Link>
                </ListItem>
                <ListItem className=" justify-center font-semibold">
                  <Link href={"/about-us"}>About Us</Link>
                </ListItem>
                <ListItem className=" justify-center font-semibold">
                  <Link href={"/contact"}>Contact</Link>
                </ListItem>
              </List>
            </Box>
            <Box>
              <ShoppingCartIcon onClick={toggleDrawer(true)} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AppDrawer closeDrawer={closeDrawer} open={open} />
    </>
  );
};

export default Header;
