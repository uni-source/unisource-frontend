'use client';
import './navbar.css';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

const NavScrollExample: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentRoute(window.location.pathname);
    }
  }, []);

  let logoSrc = './assets/UniSourceLogo.png';
  let buttonText = 'Sign Up';
  let buttonLink = '/getstart';

  if (currentRoute === '/student-login') {
    logoSrc = './assets/USJ.png';
    buttonText = 'Sign Up';
    buttonLink = '/student-signup';
  } else if (currentRoute === '/company-login') {
    logoSrc = './assets/USJ.png';
    buttonText = 'Sign Up';
    buttonLink = '/company-signup';
  } else if (currentRoute === '/student-signup') {
    logoSrc = './assets/USJ.png';
    buttonText = 'Log In';
    buttonLink = '/student-login';
  } else if (currentRoute === '/company-signup') {
    logoSrc = './assets/USJ.png';
    buttonText = 'Log In';
    buttonLink = '/company-login';
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container fluid>
        <Navbar.Brand>
          <div className="logo-images">
            <img src={logoSrc} alt="" className="logo" />
            <h1 className="logo-text">UNISOURCE</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px', fontWeight: 'bold' }}>
               <Nav.Link href="/" className='nav-link-content'>Home</Nav.Link>
               <Nav.Link href="/about" className='nav-link-content'>About</Nav.Link>
               <Nav.Link href="/eligibility" className='nav-link-content'>Eligibility</Nav.Link>
               <Nav.Link href="/terms" className='nav-link-content'>Terms</Nav.Link>
          </Nav>
          <Form className="d-flex form-btn">
            <Link href={buttonLink} passHref>
              <button className="navbar-btn">{buttonText}</button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
