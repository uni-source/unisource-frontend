'use client';
import React from 'react'
import Topic from '../components/topics/topics';
import NavScrollExample from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import AboutHeader from '../components/AboutHeader/AboutHeader';
import Mission from '../components/Mission/Mission';
import ForWhom from '../components/ForWhom/ForWhom';
import GetStart from '../components/GetStart/GetStart';
import ContactUs from '../components/ContactUs/ContactUs';


const About = () => {
  return (
    <>
    <NavScrollExample />
    <AboutHeader/>
    <Mission/>
    <Topic message='For Whom'/>
    <ForWhom/>
    <Topic message='How to Get start'/>
    <GetStart/>
    <ContactUs/>
    <Footer />
    </>
  )
}

export default About;
