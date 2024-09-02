"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./fac_log.css";
import { useRouter } from "next/navigation";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../../../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import CustomIcon from "@/app/components/custom_icon/customicon";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const FacLogIn = () => {
  const router = useRouter();
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const { token } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
 
  useEffect(() => {
    if (isSuccess) {
      toast.success("User login successful");
      router.push("/faculty-dashboard");
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
        <img className='login-img' src="https://res.cloudinary.com/driglvefm/image/upload/v1724343794/UniSourceLogo_vty7wl.png" alt="UniSource Logo" width="65" height="60" />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
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
          <button className="submit-btn" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "LOG IN"}
          </button>
        </form>
      </Box>
    </Container>
  );
};

export default FacLogIn;
