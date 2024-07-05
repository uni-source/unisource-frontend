'use client';
import './navbar.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';


const NavScrollExample: React.FC = () => {

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <div className="logo-images">
              <img src="./assets/UniSourceLogo.png" alt="" className="logo" />
              <h1 className="logo-text">UNISOURCE</h1>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px', fontWeight: 'bold' }}

            >
              <Nav.Link href="/" className='nav-link-content'>Home</Nav.Link>
              <Nav.Link href="/about" className='nav-link-content'>About</Nav.Link>
              <Nav.Link href="/eligibility" className='nav-link-content'>Eligibility</Nav.Link>
              <Nav.Link href="/terms" className='nav-link-content'>Terms</Nav.Link>
            </Nav>
            <Form className="d-flex form-btn">
            <Link href="/getstart" passHref>
              <button className="navbar-btn">Sign Up</button>
            </Link> 
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavScrollExample;
