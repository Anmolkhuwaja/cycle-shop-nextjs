import { Box, Typography } from "@mui/material";
import React from "react";

const OurStory = () => {
  return (
    <>
      <section className="pt-24 pb-16 px-3 md:px-8">
        <Typography className="text-black text-center md:text-5xl text-3xl font-serif font-bold mb-10 italic">
          Explore The Stories
        </Typography>

        <Box className="flex flex-col md:flex-row w-full lg:px-8 gap-8">
          <Box className="flex md:flex-col gap-5 justify-between items-center w-[100%] md:w-[35%]">
            <Box
              className="w-[100%] lg:h-[37vh] md:h-[20vh] h-[15vh] relative  group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2002.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute md:bottom-8 bottom-2 md:left-8 left-2 flex flex-col space-y-0 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="md:text-xl text-sm text-white font-bold font-serif">
                  Get on & Go!
                </Typography>
                <Typography className="md:text-xl text-sm text-teal-400 font-bold font-serif">
                  2002
                </Typography>
              </Box>
            </Box>

            <Box
              className="w-[100%] lg:h-[37vh] md:h-[20vh] h-[15vh] relative group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2004-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute md:bottom-8 bottom-2 md:left-8 left-2 flex flex-col space-y-0 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="md:text-xl text-sm text-white font-bold font-serif">
                  First Garage & Shop
                </Typography>
                <Typography className="md:text-xl text-sm text-teal-400 font-bold font-serif">
                  2004
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="w-[100%] md:w-[65%]">
            <Box
              className="w-[100%] lg:h-[80vh] md:h-[42vh] h-[30vh] relative group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2005.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute bottom-8 left-8 flex flex-col space-y-2 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="text-2xl text-white font-bold font-serif">
                  First Cycle Launched
                </Typography>
                <Typography className="md:text-xl text-sm text-teal-400 font-bold font-serif">
                  2005
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="flex flex-col md:flex-row w-full lg:px-8 gap-8 mt-6">
          <Box className="w-[100%] md:w-[65%]">
            <Box
              className="w-[100%] lg:h-[80vh] md:h-[42vh] h-[30vh] relative group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2005-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute bottom-8 left-8 flex flex-col space-y-2 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="text-2xl text-white font-bold font-serif">
                  First #GoEcoBiking Event
                </Typography>
                <Typography className="md:text-xl text-sm text-teal-400 font-bold font-serif">
                  2005
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="flex md:flex-col gap-5 justify-between items-center w-[100%] md:w-[35%]">
            <Box
              className="w-[100%] lg:h-[37vh] md:h-[20vh] h-[15vh] relative  group overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/2008.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute md:bottom-8 bottom-2 md:left-8 left-2 flex flex-col space-y-0 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="md:text-xl text-sm text-white font-bold font-serif">
                  100+ Service Networks
                </Typography>
                <Typography className="md:text-xl text-sm text-teal-400 font-bold font-serif">
                  2008
                </Typography>
              </Box>
            </Box>

            <Box
              className="w-[100%] lg:h-[37vh] md:h-[20vh] h-[15vh] relative group overflow-hidden"
              style={{
                backgroundImage:
                  "url('	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/today.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/80"></Box>

              <Box className="absolute md:bottom-8 bottom-2 md:left-8 left-2 flex flex-col space-y-0 z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <Typography className="md:text-xl text-sm text-white font-bold font-serif">
                  50+ Models & Accessories
                </Typography>
                <Typography className="md:text-xl text-sm text-teal-400 font-bold font-serif">
                  Today
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>

      <section className="pt-24 pb-16 px-3 md:px-8">
        <Typography className="text-black text-center md:text-5xl text-3xl font-serif font-bold mb-10 italic">
          Our Process
        </Typography>

        <Box className="flex flex-col md:flex-row gap-8 md:gap-6 justify-between items-center px-3">
          <Box className="text-start">
            <Typography className="text-teal-400 font-bold text-xl">
              01.
            </Typography>
            <Typography className="font-bold font-serif text-2xl my-2">
              Research
            </Typography>
            <Typography variant="body1" className="text-gray-600 font-bold">
              Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
              luctus nec ullam corper.
            </Typography>
          </Box>

          <Box className="text-start">
            <Typography className="text-teal-400 font-bold text-xl">
              02.
            </Typography>
            <Typography className="font-bold font-serif text-2xl my-2">
              Idea & Concept
            </Typography>
            <Typography variant="body1" className="text-gray-600 font-bold">
              Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
              luctus nec ullam corper.
            </Typography>
          </Box>

          <Box className="text-start">
            <Typography className="text-teal-400 font-bold text-xl">
              03.
            </Typography>
            <Typography className="font-bold font-serif text-2xl my-2">
              Design & Production​
            </Typography>
            <Typography variant="body1" className="text-gray-600 font-bold">
              Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
              luctus nec ullam corper.
            </Typography>
          </Box>

          <Box className="text-start">
            <Typography className="text-teal-400 font-bold text-xl">
              04.
            </Typography>
            <Typography className="font-bold font-serif text-2xl my-2">
              Sales & Service​
            </Typography>
            <Typography variant="body1" className="text-gray-600 font-bold">
              Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
              luctus nec ullam corper.
            </Typography>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default OurStory;
