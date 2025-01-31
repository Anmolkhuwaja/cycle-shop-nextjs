import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import Image from "next/image";

const Bicycles = async () => {
  const response = await axios.get("https://fakestoreapi.in/api/products");
  const data = response.data;

  return (
    <>
      <Box className="flex flex-col lg:flex-row justify-between gap-10 bg-[#f5f5f5] pt-32 px-3 md:px-8">
        <Box className="lg:w-[30%] w-[100%]">
          <Box className="flex flex-col md:flex-row lg:flex-col justify-between items-center">
            {/* Search */}
            <Box className="bg-white w-[100%] md:w-[49%] lg:w-[100%] px-6 py-9">
              <Typography className="font-[600] text-[#4F5655] pb-1">
                Search
              </Typography>
              <Box className="flex items-center gap-2">
                <TextField
                  id="outlined-search"
                  fullWidth
                  size="small"
                  placeholder="Search products..."
                  type="search"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0px",
                    },
                    "& .MuiOutlinedInput-input::placeholder": {
                      color: "#0c0a09",
                      fontWeight: "700",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& fieldset": {
                        borderColor: "#2DD4BF",
                        borderWidth: "1px",
                      },
                    },
                  }}
                />
                <Button
                  size="medium"
                  variant="contained"
                  type="submit"
                  className="rounded-none py-2 font-bold bg-teal-400 hover:bg-teal-500"
                >
                  <ArrowForwardIosIcon className="text-md" />
                </Button>
              </Box>
            </Box>

            {/* Category */}
            <Box className="bg-white w-[100%] md:w-[49%] lg:w-[100%] px-6 py-9 mt-10 md:mt-0 lg:mt-10">
              <Typography className="font-[600] text-[#4F5655] pb-1">
                filter by categories
              </Typography>
              <FormControl
                sx={{
                  marginTop: "1px",
                  minWidth: 200,
                  backgroundColor: "#30c7b5",
                  border: "none",
                  borderRadius: "4px",
                  color: "white",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
                size="small"
                fullWidth
              >
                <Select
                  labelId="job-status-label"
                  displayEmpty
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        marginTop: "4px",
                        maxHeight: 200,
                        borderRadius: "4px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      },
                    },
                    disableScrollLock: true,
                  }}
                  sx={{
                    color: "#fff",
                    "& .MuiSelect-icon": {
                      color: "#fff",
                    },
                    width: "100%",
                    whiteSpace: "normal",
                    overflow: "visible",
                    textOverflow: "unset",
                    paddingX: "16px",
                  }}
                >
                  <MenuItem value="Category">
                    <em>Category</em>
                  </MenuItem>
                  <MenuItem value={10} sx={{ whiteSpace: "normal" }}>
                    Applied
                  </MenuItem>
                  <MenuItem value={20} sx={{ whiteSpace: "normal" }}>
                    Interviewing
                  </MenuItem>
                  <MenuItem value={30} sx={{ whiteSpace: "normal" }}>
                    Offered
                  </MenuItem>
                  <MenuItem value={40} sx={{ whiteSpace: "normal" }}>
                    Hired
                  </MenuItem>
                  <MenuItem value={50} sx={{ whiteSpace: "normal" }}>
                    Not Selected
                  </MenuItem>
                  <MenuItem value={60} sx={{ whiteSpace: "normal" }}>
                    No Response
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box className="lg:w-[70%] w-[100%] bg-white md:px-16 py-14">
          <Typography className="font-extrabold text-teal-400 text-center md:text-start pb-4 font-serif text-5xl md:text-7xl">
            Bicycles
          </Typography>

          <Box className="flex justify-start items-center gap-5 flex-wrap">
            {data.products.map((item) => (
              <Box
                key={item.id}
                className="relative group w-full md:w-[48%] lg:w-[30%] overflow-hidden"
              >
                {/* Image Section */}
                <Image
                  width={400}
                  height={400}
                  src={item.image}
                  alt={item.title}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <Box className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-3">
                  <button
                   className="bg-white hover:bg-teal-500 shadow-md transition-transform duration-200 text-black hover:text-white 
                  w-16 md:w-16 lg:w-12 h-16 lg:h-12 md:h-16"
                  >
                    <VisibilityIcon className="text-4xl lg:text-3xl" />
                  </button>

                  <button
                    className="bg-white hover:bg-teal-500 shadow-md transition-transform duration-200 text-black hover:text-white 
                  w-16 md:w-16 lg:w-12 h-16 lg:h-12 md:h-16"
                  >
                    <LocalMallIcon className="text-4xl lg:text-3xl" />
                  </button>
                </Box>

                <Box className="flex flex-col justify-center items-center py-5">
                  <Typography className="font-extrabold text-2xl font-serif italic">
                    {item.brand}
                  </Typography>
                  <Typography className="font-bold text-base text-gray-700">
                    $ {item.price}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Bicycles;
