"use client";
import React, { useState } from "react";
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

const pages = ["Home", "Bicycles", "About Us", "Contact"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
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
              <ShoppingCartIcon />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
