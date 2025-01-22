import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      img: "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-7.jpg",
      title: "Kryo X26 MTB – Model K",
      price: "350.00",
    },
    {
      id: 2,
      img: "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-1-800x800.jpg",
      title: "Kryo X26 MTB – Model X",
      price: "250.00",
    },
    {
      id: 3,
      img: "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-5-800x800.jpg",
      title: "Kryo X26 MTB – Model Y",
      price: "400.00",
    },
    {
      id: 4,
      img: "https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-4-800x800.jpg",
      title: "Kryo X26 MTB – Model Z",
      price: "230.00",
    },
  ];

  return (
    <section className="mt-24 px-3 md:px-8">
      <Typography className="text-black text-center md:text-5xl text-3xl font-serif font-bold mb-10 italic" >
        New Arrivals
      </Typography>
      <Box className="flex justify-between items-center gap-5 flex-wrap">
        {products.map((item)=>{
            return(
               <Box key={item.id} className="w-full md:w-[48%] lg:w-[23%] ">
               <Image width={400} height={400} src={item.img} alt={item.title}/>
               <Box className="flex flex-col justify-center items-center py-5">
                <Typography className="font-extrabold font-serif italic">{item.title}</Typography>
                <Typography className="font-bold text-gray-700" >$ {item.price}</Typography>
               </Box>
               </Box>
            )
        })}
      </Box>
    </section>
  );
};

export default NewArrivals;
