import { Box, Typography } from "@mui/material";
import React from "react";

const AboutHeroSection = () => {
  return (
    <>
      <section className="relative h-[140vh] md:h-[70vh] lg:h-[100vh] overflow-hidden">
        <Box
          className="absolute inset-0 bg-cover bg-center bg-fixed h-[140vh] md:h-[70vh] lg:h-[100vh] overflow-hidden w-full"
          style={{
            backgroundImage:
              "url('	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/moutain-bike.jpg')",
          }}
        ></Box>

        <Box className="absolute bg-gradient-to-b from-transparent via-black/75 to-black/75 inset-0 h-[140vh] md:h-[70vh] lg:h-[100vh] overflow-hidden w-full"></Box>

        <Box className="relative mt-10 md:mt-0 lg:mt-10 flex flex-col items-center justify-center h-full text-white text-center">
          <Typography className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            Who We Are
          </Typography>

          <Box className="flex justify-center items-center flex-col md:flex-row gap-8 mt-5 px-6 lg:px-8">
            {/* Card 1 */}
            <Box className="relative w-full md:w-[48%] lg:w-[33%] group overflow-hidden cursor-pointer bg-white shadow-xl rounded-3xl p-6 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-[#ff7a3d]">
              <Box className="absolute top-0 left-0 w-full h-1 bg-[#ff7a3d] transition-all duration-500 group-hover:h-full group-hover:opacity-10"></Box>
              <Typography className="text-2xl lg:text-3xl font-semibold px-4 text-gray-800 mb-6 relative z-10">
                Dedicated Developers
              </Typography>
              <Typography className="text-gray-600 leading-relaxed relative z-10">
                We are Anmol and Iqra, dedicated frontend developers with a
                shared vision to create exceptional web experiences.
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box className="relative group w-full md:w-[48%] lg:w-[33%] overflow-hidden cursor-pointer bg-white shadow-xl rounded-3xl p-6 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-teal-400">
              <Box className="absolute top-0 left-0 w-full h-1 bg-teal-400 transition-all duration-500 group-hover:h-full group-hover:opacity-10"></Box>
              <Typography className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 relative z-10">
                Focused on Excellence
              </Typography>
              <Typography className="text-gray-600 leading-relaxed relative z-10">
                This project reflects our teamwork and commitment to delivering
                clean, efficient, and professional designs using Next.js.
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box className="relative group w-full md:w-[48%] lg:w-[33%] overflow-hidden cursor-pointer bg-white shadow-xl rounded-3xl p-6 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-[#f9c349]">
              <Box className="absolute top-0 left-0 w-full h-1 bg-[#f9c349] transition-all duration-500 group-hover:h-full group-hover:opacity-10"></Box>
              <Typography className="text-2xl lg:text-3xl lg:px-2 font-semibold text-gray-800 mb-6 relative z-10">
                Striving for Innovation
              </Typography>
              <Typography className="text-gray-600 leading-relaxed relative z-10">
                Our collaboration showcases our ability to bring Fresh ideas to
                life and build impactful websites with attention to detail.
              </Typography>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default AboutHeroSection;
