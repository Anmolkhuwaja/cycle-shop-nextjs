import { Box, Button, Typography } from "@mui/material";
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

      <section className="w-[100%]">
        <Box
          className="relative h-[70vh] w-[100%] md:h-[55vh] lg:h-[100vh] bg-fixed bg-center bg-cover opacity-100"
          style={{
            backgroundImage:
              'url("https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bike-hero.jpg")',
          }}
        >
          <Box className="absolute inset-0 flex bg-[#4B4F58] bg-opacity-60">
            <Box className="flex flex-col px-3 md:ps-8 w-full items-center justify-center">
              <Typography className="md:text-3xl text-2xl font-bold text-white font-serif text-center">
                The All New
              </Typography>
              <Typography className="md:text-6xl text-3xl text-white my-6 font-bold font-serif text-center">
                Kryo X26 MTB Is Here
              </Typography>
              <Typography
                variant="body1"
                className="text-slate-200 font-bold text-center md:w-[75%] mx-auto"
              >
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo.
              </Typography>

              <Button
                size="large"
                variant="contained"
                className="rounded-none font-bold bg-teal-400 hover:bg-teal-500 mt-4"
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Box>
      </section>

    </>
  );
};

export default WhyChooseKRYO;
