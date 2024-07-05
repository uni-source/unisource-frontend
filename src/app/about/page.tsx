'use client';
import React from 'react'
import Topic from '../components/topics/topics';
import NavScrollExample from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import AboutHeader from '../components/AboutHeader/AboutHeader';
import Mission from '../components/Mission/Mission';

const About = () => {
  return (
    <>
    <NavScrollExample />
    <AboutHeader/>
    <Mission/>
    <Footer />
    </>
  )
}

export default About;
