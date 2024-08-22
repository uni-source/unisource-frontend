"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./std_sign.css";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomIcon from "../custom_icon/customicon";
import { useRegisterMutation } from "../../../../redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Student name must be at least 2 characters")
    .required("Student name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function StdSign() {
  const router = useRouter();
  const [register, { isLoading, isSuccess, error, isError }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("User sign up successful");
      // Redirect to the student dashboard
      router.push("/student-login");
    }
    if (isError) {
      if ("data" in error) {
        const errorData = (error as any) || "Registration Error";
        toast.error(errorData?.data?.message);
      }
    }
  }, [isSuccess, isError, error]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const user = {
        name: values.name,
        email: values.email,
        role: "STUDENT",
        password: values.password,
      };

      await register(user).unwrap();
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        className="form-border"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img className='login-img' src="https://res.cloudinary.com/driglvefm/image/upload/v1724343794/UniSourceLogo_vty7wl.png" alt="UniSource Logo" width="65" height="60" />
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className="custom-text-field-color"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Student Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            className="custom-text-field-color"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            className="custom-text-field-color"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <button className="submit-btn" type="submit" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "SIGN UP"}
          </button>
        </form>
      </Box>
    </Container>
  );
}
