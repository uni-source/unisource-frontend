"use client";
import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./fac_sign.css";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useRegisterMutation } from "../../../../../../../redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CustomIcon from "@/app/components/custom_icon/customicon";
// Yup Validation Schema
const validationSchema = Yup.object({
  admin: Yup.string()
    .trim()
    .min(2, "Admin name must be at least 2 characters")
    .required("Admin name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function FacSign() {
  const router = useRouter();
  const [register, { isLoading, isSuccess, error, isError }] =
    useRegisterMutation();

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Admin sign up successful");
      router.push("/faculty-login");
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
      admin: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const newAdmin = {
        name: values.admin,
        email: values.email,
        role: "ADMIN",
        password: values.password,
      };

      await register(newAdmin).unwrap();
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
            id="admin"
            name="admin"
            label="Admin Name"
            autoFocus
            value={formik.values.admin}
            onChange={formik.handleChange}
            error={formik.touched.admin && Boolean(formik.errors.admin)}
            helperText={formik.touched.admin && formik.errors.admin}
          />
          <TextField
            className="custom-text-field-color"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
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
          <br />
          <button className="submit-btn" type="submit">
            {isLoading ? "Signing Up..." : "SIGN UP"}
          </button>
        </form>
      </Box>
    </Container>
  );
}
