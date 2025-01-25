"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import StoreIcon from "@mui/icons-material/Store";

const ContactHeroSection = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="relative h-[70vh] overflow-hidden">
        <Box
          className="absolute inset-0 bg-cover bg-center bg-fixed h-[70vh] overflow-hidden w-full"
          style={{
            backgroundImage:
              "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/about-movie-bg-1.jpg')",
            opacity: opacity,
            transition: "opacity 0.3s ease-in-out",
            backgroundAttachment: "fixed",
          }}
        ></Box>

        <Box className="absolute bg-gradient-to-b from-transparent via-black/75 to-black/75 inset-0 h-[70vh] overflow-hidden w-full"></Box>

        <Box className="relative mt-7 flex flex-col items-center justify-center h-full text-white text-center">
          <Typography className="text-6xl md:text-8xl font-bold mb-4 font-serif">
            Contact Us
          </Typography>
        </Box>
      </section>

      <section className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center px-3 py-24 lg:px-36 md:px-20">
        <Box className="text-center">
          <LocalShippingIcon className="text-teal-400 text-5xl" />
          <Typography className="font-bold font-sans text-2xl">
            1 800 755 60 21
          </Typography>
          <Typography variant="body1" className="text-gray-600 font-bold">
            Sales Related Enquiries
          </Typography>
        </Box>
        <Box className="text-center">
          <HomeRepairServiceIcon className="text-teal-400 text-5xl" />
          <Typography className="font-bold font-sans text-2xl">
            1 800 755 60 22
          </Typography>
          <Typography variant="body1" className="text-gray-600 font-bold">
            Service Related Enquiries
          </Typography>
        </Box>
        <Box className="text-center">
          <StoreIcon className="text-teal-400 text-5xl" />
          <Typography className="font-bold font-sans text-2xl">
            1 800 755 60 23
          </Typography>
          <Typography variant="body1" className="text-gray-600 font-bold">
            Dealership Related Enquiries
          </Typography>
        </Box>
      </section>
    </>
  );
};

export default ContactHeroSection;
