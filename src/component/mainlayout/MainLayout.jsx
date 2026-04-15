import React from 'react'
import NavBar from '../navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import ServiceCarousel from '../services/ServiceCarousel'

function MainLayout() {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <ServiceCarousel></ServiceCarousel>
          <Footer></Footer>
    </div>
  )
}

export default MainLayout