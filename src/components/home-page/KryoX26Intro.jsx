import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const KryoX26Intro = () => {
  return (
    <>
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
  )
}

export default KryoX26Intro
