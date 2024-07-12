import React from 'react'
import NavScrollExample from '../components/navbar/navbar'
import Footer from '../components/footer/footer';
import EligibilityHeader from '../components/EligibilityHeader/EligibilityHeader';
import EligibilityStudent from '../components/EligibilityStudent/EligibilityStudent';
import EligibilityOrganization from '../components/EligibilityOrganization/EligibilityOrganization';


const Eligibility = () => {
  return (
    <>
    <NavScrollExample />
    <EligibilityHeader/>
    <EligibilityStudent/>
    <EligibilityOrganization/>
    <Footer />
    </>
  )
}

export default Eligibility;

