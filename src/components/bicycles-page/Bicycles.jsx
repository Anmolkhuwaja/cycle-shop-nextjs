import { Box, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import SelectDropdown from "./SelectDropdown";

const getProducts = async (category) => {
  const res = await fetch("https://fakestoreapi.in/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();
  const products = Array.isArray(data) ? data : data.products || [];
  const categories = ["All", ...new Set(products.map((item) => item.category))];

  const filteredProducts =
    category !== "All"
      ? products.filter((item) => item.category === category)
      : products;

  return { products: filteredProducts, categories };
};

const Bicycles = async ({ searchParams }) => {
  const selectedCategory = searchParams?.category || "All";
  const { products, categories } = await getProducts(selectedCategory);

  return (
    <>
      <Box className="flex flex-col lg:flex-row justify-between gap-10 bg-[#f5f5f5] pt-32 px-3 md:px-8">
        <Box className="lg:w-[30%] w-[100%]">
          <Box className="flex justify-center items-center">
            <Box className="bg-white w-[100%] md:w-[55%] lg:w-[100%] px-6 py-9 ">
              <SelectDropdown categories={categories} />
            </Box>
          </Box>
        </Box>

        <Box className="lg:w-[70%] w-[100%] bg-white md:px-16 py-14">
          <Typography className="font-extrabold text-teal-400 text-center md:text-start pb-4 font-serif text-5xl md:text-7xl">
            Bicycles
          </Typography>

          <Box className="flex justify-start items-center gap-5 flex-wrap">
            {products.length > 0 ? (
              products.map((item) => (
                <Box
                  key={item.id}
                  className="relative group w-full md:w-[48%] lg:w-[30%] overflow-hidden"
                >
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
              ))
            ) : (
              <p className="text-gray-500">
                No products found in this category.
              </p>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Bicycles;
