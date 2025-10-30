import React, { useState } from 'react';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // services dropdown
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  return (

    //navbar

    <div className="w-full font-sans">

      <header className="w-full shadow-sm">


        <nav className="bg-white py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">

            {/* logo in navbar */}
            <div className="shrink-0">
              <Link to="/">
                <img src="public/logo.png" className='h-15' alt="" />
              </Link>
            </div>

            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium text-lg">
                Home
              </Link>

              {/* dropdown for sevices section*/}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium text-lg"
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown
                    size={20}
                    className={`ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                {/* dropdown menu */}
                {isServicesOpen && !isMobileMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-9999 ring-1 ring-black ring-opacity-5">
                    <Link to="/" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Web Application Security Audits</Link>
                    <Link to="/" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">PCI DSS Gap Assessments</Link>
                    <Link to="/" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Cloud Security Assessments</Link>
                    <Link to="/" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Security Awareness Training</Link>
                  </div>
                )}
              </div>

              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium text-lg">
                Blogs
              </Link>
            </div>

            
            <div className="hidden md:block">
              <button className="bg-[rgb(51,135,190)] text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-[rgb(51,150,195)] transition-colors duration-200 shadow-md hover:shadow-lg">
                <Phone size={18} />
                <span><Link to={'/'}>Contact us</Link></span>
              </button>
            </div>

           
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                className="text-gray-700 hover:text-blue-600"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </nav>

       
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg pb-4">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg">
                Home
              </a>

              {/*services dropdown for small screen */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex justify-between w-full items-center text-gray-700 hover:text-blue-600 font-medium text-lg"
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown
                    size={20}
                    className={`ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 pl-4 flex flex-col space-y-2 border-l-2 border-gray-100">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">Service 1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">Service 2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">Service 3</a>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg">
                Blogs
              </a>

              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
                <Phone size={18} />
                <span>Contact us</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
