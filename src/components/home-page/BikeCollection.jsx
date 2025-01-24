import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const BikeCollection = () => {
  return (
    <section className="mt-10">
      <Box className=" text-white">
        <Box
          className="relative h-[100vh] md:h-[55vh] lg:h-[100vh] bg-fixed bg-center bg-cover opacity-100"
          style={{
            backgroundImage:
              'url("https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/moutain-bike.jpg")',
          }}
        >
          <Box className="absolute inset-0 flex bg-black bg-opacity-60">
            <Box className="flex flex-col md:w-[70%] lg:w-[40%] pt-24 px-3 md:ps-8">
              <Typography className="text-xl font-bold font-serif">
                Discover The Collection
              </Typography>
              <Typography className="text-5xl my-8 font-bold font-serif">
                Mountain Bikes
              </Typography>
              <Typography variant="body1" className="text-slate-200 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </Typography>

              <Box className="flex flex-col md:flex-row md:justify-between md:items-center py-8">
                <Box>
                  <List className="text-white -ms-2">
                    <ListItem
                      sx={{ fontWeight: "bold" }}
                      className="flex items-center gap-2 md:gap-5 p-1 m-0"
                    >
                      <ListItemIcon className="text-teal-400 min-w-0 ">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Officia deserunt mollit
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Excepteur sint occaecat
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Sunt in culpa qui
                      </span>
                    </ListItem>
                  </List>
                </Box>

                <Box className="-mt-3 md:-mt-0">
                  <List className="text-white -ms-2">
                    <ListItem
                      sx={{ fontWeight: "bold" }}
                      className="flex items-center gap-2 md:gap-5 p-1 m-0"
                    >
                      <ListItemIcon className="text-teal-400 min-w-0 ">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Officia deserunt mollit
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Excepteur sint occaecat
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Sunt in culpa qui
                      </span>
                    </ListItem>
                  </List>
                </Box>
              </Box>

              <Button
                size="large"
                variant="contained"
                className="rounded-none font-bold bg-teal-400 hover:bg-teal-500 mt-4 !w-44"
              >
                Explore Now
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          className="relative h-[100vh] md:h-[55vh] lg:h-[100vh] bg-fixed bg-center bg-cover opacity-100"
          style={{
            backgroundImage:
              'url("https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/city-bike.jpg")',
          }}
        >
          <Box className="absolute inset-0 flex bg-black bg-opacity-60">
            <Box className="flex flex-col md:w-[70%] lg:w-[40%] pt-24 px-3 md:ps-8">
              <Typography className="text-xl font-bold font-serif">
                Discover The Collection
              </Typography>
              <Typography className="text-5xl my-8 font-bold font-serif">
                City Bikes
              </Typography>
              <Typography variant="body1" className="text-slate-200 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </Typography>

              <Box className="flex flex-col md:flex-row md:justify-between md:items-center py-8">
                <Box>
                  <List className="text-white -ms-2">
                    <ListItem
                      sx={{ fontWeight: "bold" }}
                      className="flex items-center gap-2 md:gap-5 p-1 m-0"
                    >
                      <ListItemIcon className="text-teal-400 min-w-0 ">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Officia deserunt mollit
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Excepteur sint occaecat
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Sunt in culpa qui
                      </span>
                    </ListItem>
                  </List>
                </Box>

                <Box className="-mt-3 md:-mt-0">
                  <List className="text-white -ms-2">
                    <ListItem
                      sx={{ fontWeight: "bold" }}
                      className="flex items-center gap-2 md:gap-5 p-1 m-0"
                    >
                      <ListItemIcon className="text-teal-400 min-w-0 ">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Officia deserunt mollit
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Excepteur sint occaecat
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Sunt in culpa qui
                      </span>
                    </ListItem>
                  </List>
                </Box>
              </Box>

              <Button
                size="large"
                variant="contained"
                className="rounded-none font-bold bg-teal-400 hover:bg-teal-500 mt-4 !w-44"
              >
                Explore Now
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          className="relative h-[100vh] md:h-[55vh] lg:h-[100vh] bg-fixed bg-center bg-cover opacity-100"
          style={{
            backgroundImage:
              'url("https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/speciality-bike.jpg")',
          }}
        >
          <Box className="absolute inset-0 flex bg-black bg-opacity-60">
            <Box className="flex flex-col md:w-[70%] lg:w-[40%] pt-24 px-3 md:ps-8">
              <Typography className="text-xl font-bold font-serif">
                Discover The Collection
              </Typography>
              <Typography className="text-5xl my-8 font-bold font-serif">
                Speciality Bikes
              </Typography>
              <Typography variant="body1" className="text-slate-200 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </Typography>

              <Box className="flex flex-col md:flex-row md:justify-between md:items-center py-8">
                <Box>
                  <List className="text-white -ms-2">
                    <ListItem
                      sx={{ fontWeight: "bold" }}
                      className="flex items-center gap-2 md:gap-5 p-1 m-0"
                    >
                      <ListItemIcon className="text-teal-400 min-w-0 ">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Officia deserunt mollit
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Excepteur sint occaecat
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Sunt in culpa qui
                      </span>
                    </ListItem>
                  </List>
                </Box>

                <Box className="-mt-3 md:-mt-0">
                  <List className="text-white -ms-2">
                    <ListItem
                      sx={{ fontWeight: "bold" }}
                      className="flex items-center gap-2 md:gap-5 p-1 m-0"
                    >
                      <ListItemIcon className="text-teal-400 min-w-0 ">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Officia deserunt mollit
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Excepteur sint occaecat
                      </span>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 md:gap-5 p-1 m-0">
                      {" "}
                      <ListItemIcon className="text-teal-400 min-w-0">
                        <RadioButtonCheckedIcon className="w-5 h-5" />
                      </ListItemIcon>
                      <span className="font-bold text-[13px] md:text-base">
                        Sunt in culpa qui
                      </span>
                    </ListItem>
                  </List>
                </Box>
              </Box>

              <Button
                size="large"
                variant="contained"
                className="rounded-none font-bold bg-teal-400 hover:bg-teal-500 mt-4 !w-44"
              >
                Explore Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default BikeCollection;
