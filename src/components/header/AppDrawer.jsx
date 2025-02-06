import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AppDrawer = (props) => {
  const { closeDrawer, open } = props;

  return (
    <>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <Box
          width={350}
          role="presentation"
          className="flex justify-between items-center p-4"
        >
          <Typography className="font-bold text-lg">Shopping Cart</Typography>
          <CloseIcon className="cursor-pointer" onClick={closeDrawer} />
        </Box>
        <Divider />

        <Typography>Hello</Typography>
      </Drawer>
    </>
  );
};

export default AppDrawer;
