'use client';
import React from 'react'
import Topic from '../components/topics/topics';
import NavScrollExample from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const About = () => {
  return (
    <>
    <NavScrollExample />
    <Topic message='About Unisource' />
    <Footer />
    </>
  )
}

export default About;
