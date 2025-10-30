import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Contact from '../components/Contact.jsx';
import Testimonial from '../components/Testimonial.jsx';
import Footer from '../components/Footer.jsx';


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Layout
