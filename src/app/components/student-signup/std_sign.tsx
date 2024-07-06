"use client";
import  React,{useEffect} from "react";
import "./std_sign.css";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomIcon from "../custom_icon/customicon";
import { useRegisterMutation } from "../../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
export default function StdSign() {
  const [register, { isLoading, isSuccess,error, isError }] =useRegisterMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("User sign up Successful")
      //Redirect to the student dashboard
    }
    if (isError) {
      if ("data" in error) {
        const errorData = error as any || "Registration Error";
        toast.error(errorData?.data?.message);
      }
    }
  }, [isSuccess, isError, error]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      name: data.get("name"),
      email: data.get("email"),
      role: "STUDENT",
      password: data.get("password"),
    };

    try {
      await register(user).unwrap();
    } catch (err) {
      console.error("Failed to register user:", err);
    }
  };

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
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
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
          />
          <button className="submit-btn" type="submit" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "SIGN UP"}
          </button>
        </Box>
      </Box>
    </Container>
  );
}
