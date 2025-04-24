// import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import MainNavbar from './MainNavbar'

// import ScrollToTop from '../ScrollToTop'

const SharedLayout = () => {
  return (
    <div>
      <MainNavbar/>
        {/* <ScrollToTop /> */}
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout