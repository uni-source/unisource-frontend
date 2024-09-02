import React from 'react'
import NavScrollExample from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import FacLogIn from '../components/dashboard/faculty-dashboard/faculty-login/faculty-login/fac_log'
import FacSign from '../components/dashboard/faculty-dashboard/faculty-signup/faculty-signup/fac_sign'

export default function CompLogin() {
  return (
    <>
    <NavScrollExample />
    <FacSign />
    <Footer />
    </>
  )
}
