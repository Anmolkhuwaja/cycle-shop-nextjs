"use client";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import "animate.css";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z]+$/, "First name can only contain letters")
    .required("First name is required"),
  lastName: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Last name can only contain letters")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "Thanks! We’ve received your message.",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
      confirmButtonText: "OK",
      customClass: {
        popup: "text-sm py-8 font-medium rounded-none",
        confirmButton:
          "bg-teal-400 text-white font-medium py-2 px-8 rounded-none hover:bg-teal-500",
      },
    });
    reset();
  };

  return (
    <>
      <section className="bg-[#f5f5f5] lg:h-[95vh] md:h-[55vh] flex flex-col md:flex-row justify-between md:px-3 lg:px-20 lg:mt-32">
        <Box className="md:w-[49%] shadow-xl px-3 md:px-10 lg:-mt-24 py-10 lg:py-16 md:h-[55vh] bg-white lg:h-[100vh]">
          <Typography className="font-extrabold font-serif text-4xl">
            Let's Get in Touch
          </Typography>

          <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
            <Box className="flex justify-between gap-4">
              <TextField
                {...register("firstName")}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                id="outlined-basic"
                variant="outlined"
                placeholder="First name"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0px",
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "#000",
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
              <TextField
                {...register("lastName")}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                id="outlined-basic"
                variant="outlined"
                placeholder="Last name"
                fullWidth
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
            </Box>
            <TextField
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter email address"
              type="email"
              className="mt-4"
              fullWidth
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

            <TextField
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter email address"
              className="mt-4"
              multiline
              rows={8}
              fullWidth
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
              size="large"
              variant="contained"
              type="submit"
              className="rounded-none font-bold bg-teal-400 hover:bg-teal-500 mt-4"
            >
              Send Message
            </Button>
          </form>
        </Box>

        <Box className="md:w-[49%] pb-10 sm:pb-0 pt-10 md:ps-16 ps-4 flex flex-col gap-10 bg-[#f5f5f5]">
          <Typography className="font-extrabold font-serif text-4xl">
            Contact Details
          </Typography>

          <Box>
            <Typography className="font-extrabold text-xl font-serif">
              Our Hours
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-600 font-bold mb-1 mt-3"
            >
              01:00 PM – 10:00 PM
            </Typography>
            <Typography variant="body1" className="text-gray-600 font-bold">
              Monday – Friday
            </Typography>
          </Box>

          <Box>
            <Typography className="font-bold text-xl font-serif">
              Location
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-600 font-bold mt-3"
            >
              212 7th St SE, Washington, DC 20003, USA
            </Typography>
          </Box>

          <Box>
            <Typography className="font-bold text-xl font-serif">
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-600 font-bold mb-1 mt-3"
            >
              For inquiries, reach out to:
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-600 font-bold mb-1"
            >
              Email: anmolkhuwaja.xwave@gmail.com
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-600 font-bold mb-1"
            >
              Email: iqrahyderxwave@gmail.com
            </Typography>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default ContactDetails;
