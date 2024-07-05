'use client';
import React, {useState,useEffect} from 'react';
import './std_log.css'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomIcon from '../custom_icon/customicon';
import { useSelector } from 'react-redux';
import { useLoginMutation } from '../../../../redux/features/auth/authApi';

export default function StdLogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const { token } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      console.log("User login Success");
      console.log(token);
      //Redirect to the student dashboard
    }
    if (isError) {
      if ("data" in error) {
        const errorData = error as any || "Registration Error";
        console.log(errorData?.data?.message);
      }
    }
  }, [isSuccess, isError, error, token]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login({ email, password }).unwrap();
    } catch (err) {
      console.error('Failed to log in: ', err);
    }
  };

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
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            className='custom-text-field-color'
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit-btn" type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'LOG IN'}
          </button>
        </Box>
      </Box>
    </Container>
  );
}
