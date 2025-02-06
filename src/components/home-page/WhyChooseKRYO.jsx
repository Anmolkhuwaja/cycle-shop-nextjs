import { Box, Typography } from "@mui/material";
import React from "react";

const WhyChooseKRYO = () => {
  return (
    <>
      <section className="pt-24 pb-16 px-3 md:px-8 bg-[#f5f5f5]">
        <Typography className="text-black text-center md:text-5xl text-3xl font-serif font-bold mb-10 italic">
          Why Choose KRYO?
        </Typography>

        <Box className="md:px-8 px-3 pb-4">
          <Box className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
            <Box
              className="md:w-[49%] w-[100%] lg:h-[50vh] md:h-[40vh] h-[30vh] relative group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/specification-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute bottom-8 left-8 flex flex-col space-y-2 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="text-2xl text-white font-bold font-serif">
                  Light weight
                </Typography>
                <Typography className=" text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </Typography>
              </Box>
            </Box>

            <Box
              className="md:w-[49%] w-[100%] lg:h-[50vh] md:h-[40vh] h-[30vh] relative group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/specification-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute bottom-8 left-8 flex flex-col space-y-2 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="text-2xl text-white font-bold font-serif">
                  Lifetime Warrenty
                </Typography>
                <Typography className=" text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="flex items-center justify-between gap-4 w-full mt-5">
            <Box
              className="w-[33%] lg:h-[30vh] md:h-[20vh] h-[15vh] relative  group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/specification-3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute md:bottom-8 bottom-2 md:left-8 left-2 flex flex-col space-y-2 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="md:text-xl text-sm text-white font-bold font-serif">
                  Biggest Service Network
                </Typography>
              </Box>
            </Box>

            <Box
              className="w-[33%] lg:h-[30vh] md:h-[20vh] h-[15vh] relative group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/specification-4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute  md:bottom-8 bottom-2 md:left-8 left-2 flex flex-col space-y-2 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="md:text-xl text-sm text-white font-bold font-serif">
                  99% Assembled Delivery
                </Typography>
              </Box>
            </Box>

            <Box
              className="w-[33%] lg:h-[30vh] md:h-[20vh] h-[15vh] relative group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/specification-5.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute  md:bottom-8 bottom-2 md:left-8 left-2 flex flex-col space-y-2 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="md:text-xl text-sm text-white font-bold font-serif">
                  Free First Bike Service
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default WhyChooseKRYO;
