"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./comp_log.css";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomIcon from "../custom_icon/customicon";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Yup Validation
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const CompLogIn = () => {
  const router = useRouter();
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const { token,user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      const parsedUser = JSON.parse(localUser);
      const role = parsedUser?.role;
      if (role === "MENTOR") {
        router.push("/mentor-dashboard");
      } else if (role === "ORGANIZATION") {
        router.push("/organization-dashboard");
      }
    }
  }, [router]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login successful");
      const role = user?.role;
      if (role === "MENTOR") {
        router.push("/mentor-dashboard");
      } else if (role === "ORGANIZATION") {
        router.push("/organization-dashboard");
      }
    }
    if (isError) {
      if ("data" in error) {
        const errorData = (error as any) || "Login Error";
        toast.error(errorData?.data?.message);
      }
    }
  }, [isSuccess, isError, error, token, router]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(await login(values).unwrap());
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
        <CustomIcon />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit} noValidate>
          <TextField
            className="custom-text-field-color"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          <br />
          <button className="submit-btn" type="submit">
            {isLoading ? "Logging in..." : "LOG IN"}
          </button>
        </form>
      </Box>
    </Container>
  );
};

export default CompLogIn;
