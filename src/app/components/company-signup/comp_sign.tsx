'use client';
import * as React from 'react';
import './comp_sign.css'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomIcon from '../custom_icon/customicon';


export default function CompSign() {

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
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
              className='custom-text-field-color'
              margin="normal"
              required
              fullWidth
              id="company"
              label="Company Name"
              name="company"
              autoFocus
            />
            <TextField
              className='custom-text-field-color'
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
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
            />
           <br />
            <button className="submit-btn">SIGN UP</button>
          </Box>
        </Box>
      </Container>
  );
}
