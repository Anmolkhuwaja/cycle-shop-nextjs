"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SelectDropdown = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";

  const handleChange = (e) => {
    const category = e.target.value;
    router.push(`?category=${category}`);
  };

  return (
    <>
      <Box>
        <Typography className="font-[700] text-xl text-[#4F5655] pb-2">
          Filter by categories
        </Typography>
        <FormControl
          sx={{
            marginTop: "1px",
            minWidth: 200,
            backgroundColor: "#30c7b5",
            border: "none",
            borderRadius: "0px",
            color: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            "&:focus-within": {
              border: "1px solid #30c7b5",
            },
          }}
          size="small"
          fullWidth
        >
          <Select
            labelId="job-status-label"
            displayEmpty
            onChange={handleChange}
            value={selectedCategory}
            MenuProps={{
              PaperProps: {
                sx: {
                  marginTop: "4px",
                  maxHeight: 200,
                  borderRadius: "0px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                },
              },
              disableScrollLock: true,
            }}
            sx={{
              color: "#fff",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #30c7b5",
              },
              "& .MuiSelect-icon": {
                color: "#fff",
              },
              width: "100%",
              whiteSpace: "normal",
              overflow: "visible",
              textOverflow: "unset",
              paddingX: "16px",
              textTransform: "capitalize",
            }}
            IconComponent={KeyboardArrowDownIcon}
          >
            {categories.map((cat) => (
              <MenuItem
                key={cat}
                value={cat}
                sx={{ textTransform: "capitalize" }}
              >
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectDropdown;
