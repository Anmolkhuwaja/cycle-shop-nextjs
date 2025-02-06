import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#14261C] lg:h-[72vh] md:h-[40vh]">
      <Box className="flex flex-col md:flex-row justify-between px-6 gap-8 md:py-20 py-10  md:px-20">
        <Box className="w-[80px] h-12 relative">
          <Image
            fill
            alt="logo"
            src={
              "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/logo-1-80x48.png"
            }
          />
        </Box>

        <Box>
          <Typography className="text-white text-2xl font-bold">
            Usefull Links
          </Typography>
          <List className="text-white -ms-1">
            <ListItem
              sx={{ fontWeight: "bold" }}
              className=" text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              Home
            </ListItem>
            <ListItem
              sx={{ fontWeight: "bold" }}
              className="text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              Shop
            </ListItem>
            <ListItem
              sx={{ fontWeight: "bold" }}
              className="text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              About Us
            </ListItem>
            <ListItem
              sx={{ fontWeight: "bold" }}
              className="text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              Contact Us
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography className="text-white text-2xl font-bold">
            Our Collection
          </Typography>
          <List className="text-white -ms-1">
            <ListItem
              sx={{ fontWeight: "bold" }}
              className=" text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              Mountain Bikes
            </ListItem>
            <ListItem
              sx={{ fontWeight: "bold" }}
              className="text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              City Bikes
            </ListItem>
            <ListItem
              sx={{ fontWeight: "bold" }}
              className="text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              Speciality Bikes
            </ListItem>
            <ListItem
              sx={{ fontWeight: "bold" }}
              className="text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              Electric Bikes
            </ListItem>
          </List>
        </Box>

        <Box className="lg:mr-20">
          <Typography className="text-white text-2xl font-bold">
            Account
          </Typography>
          <List className="text-white -ms-1">
            <ListItem
              sx={{ fontWeight: "bold" }}
              className=" text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              Customer Login
            </ListItem>
            <ListItem
              sx={{ fontWeight: "bold" }}
              className="text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              Dealer Login
            </ListItem>
            <ListItem
              sx={{ fontWeight: "bold" }}
              className="text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              Addresses
            </ListItem>
            <ListItem
              sx={{ fontWeight: "bold" }}
              className="text-white hover:text-teal-400 cursor-pointer gap-2 md:gap-5 p-1 m-0"
            >
              Payment Methods
            </ListItem>
          </List>
        </Box>
      </Box>

      <Divider className="bg-[#f5f5f5] h-[1px] bg-opacity-20" />

      <Box className="px-6 md:px-20 flex flex-col md:flex-row md:items-center md:justify-between justify-start py-6">
        <Typography className="text-white text-sm font-sans font-medium">
          Copyright © 2025 Cycle Shop | Designed and Developed by Anmol & Iqra
        </Typography>
        <Box className="flex items-center md:mt-0 mt-4 md:justify-center gap-3 text-white">
          <Facebook className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-teal-400" />
          <LinkedIn className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-teal-400" />
          <Instagram className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-teal-400" />
          <YouTube className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-teal-400" />
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
