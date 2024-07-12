'use client';
import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './comp_sign.css';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomIcon from '../custom_icon/customicon';

// Yup Validation Schema
const validationSchema = Yup.object({
  company: Yup.string()
    .trim()
    .min(2, 'Company name must be at least 2 characters')
    .required('Company name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default function CompSign() {
  const formik = useFormik({
    initialValues: {
      company: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className="form-border"
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CustomIcon />
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className='custom-text-field-color'
            margin="normal"
            required
            fullWidth
            id="company"
            name="company"
            label="Company Name"
            autoFocus
            value={formik.values.company}
            onChange={formik.handleChange}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={formik.touched.company && formik.errors.company}
          />
          <TextField
            className='custom-text-field-color'
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
            className='custom-text-field-color'
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
          <button className="submit-btn" type="submit">SIGN UP</button>
        </form>
      </Box>
    </Container>
  );
}
