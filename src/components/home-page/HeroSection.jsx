import React from "react";
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const HeroSection = () => {
  return (
    <main>
      <Box className="bg-[url('https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bike-hero.jpg')]  lg:h-screen h-auto w-full bg-cover bg-no-repeat bg-center">
        <Box className="flex justify-between items-center ">
          <Box className=" w-1/2 bg-[#4B4F58] bg-opacity-60 h-[95vh] lg:h-screen md:h-[70vh] py-20 px-4 md:px-8 ">
            <Typography className="text-white md:text-3xl font-serif font-bold mt-4 italic">
              Newly Launched
            </Typography>
            <Typography className="text-white md:text-8xl text-6xl font-serif font-bold mt-7 z-10 italic">
              Kryo X26 MTB
            </Typography>
            <Typography className="text-white text-xl font-bold mt-6 italic">
              Specifications:
            </Typography>

            <List className="text-white -ms-2">
              <ListItem
                sx={{ fontWeight: "bold" }}
                className="flex items-center gap-2 md:gap-5 p-1 m-0"
              >
                <ListItemIcon className="text-white min-w-0 ">
                  <RadioButtonCheckedIcon className="w-5 h-5" />
                </ListItemIcon>
                <span className="font-bold text-[13px] md:text-base">
                  Lightweight 18" Frame
                </span>
              </ListItem>
              <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                {" "}
                <ListItemIcon className="text-white min-w-0">
                  <RadioButtonCheckedIcon className="w-5 h-5" />
                </ListItemIcon>
                <span className="font-bold text-[13px] md:text-base">
                  Steel Suspension Fork
                </span>
              </ListItem>
              <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                {" "}
                <ListItemIcon className="text-white min-w-0">
                  <RadioButtonCheckedIcon className="w-5 h-5" />
                </ListItemIcon>
                <span className="font-bold text-[13px] md:text-base">
                  Steel Hardtail Frame
                </span>
              </ListItem>
            </List>

            <Button
              size="large"
              variant="contained"
              className="rounded-none font-bold bg-teal-400 hover:bg-teal-500 mt-4"
            >
              Buy Now
            </Button>
          </Box>
          <Box className="text-white w-1/2 bg-teal-400 bg-opacity-60 h-[95vh] lg:h-screen md:h-[70vh]"></Box>
        </Box>
      </Box>
    </main>
  );
};

export default HeroSection;
