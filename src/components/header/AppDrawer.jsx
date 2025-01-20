"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";

const AppDrawer = (props) => {
    const { closeDrawer, open } = props;

  return (
    <>
      {/* <Button>Open Right Drawer</Button> */}
      <Drawer anchor="right"  open={open}  onClose={closeDrawer} >
      <Box width={350} role="presentation"  onClick={closeDrawer}>
      <Typography>hi</Typography>
      </Box>

      <Typography>Hello</Typography>
      </Drawer>
    </>
  );
};

export default AppDrawer;
