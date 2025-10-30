import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-7xl w-full text-center">

                {/* top section */}
                <hr className="border-gray-50 mb-8 max-w-4xl mx-auto" />

                <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-4"> 

                    {/* left side section: contains the logo */}
                    <div className="flex items-center mb-6 md:mb-0 md:justify-start w-full md:w-auto">
                        
                        <span className="font-script text-3xl font-semibold text-gray-800 tracking-tight"><img className='h-15' src="public/logo.png" alt="" /></span>
                    </div>

                    {/* middle section: navigation links */}
                    <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-base font-medium text-gray-700 w-full md:w-auto">
                        <Link to="/" className="hover:text-gray-900 transition-colors">Contact Us</Link>
                        <Link to="/" className="hover:text-gray-900 transition-colors">About Us</Link>
                        <Link to="/" className="hover:text-gray-900 transition-colors">Our Services</Link>
                        <Link to="/" className="hover:text-gray-900 transition-colors">Blog Insights</Link>
                    </nav>

                    {/* right side section: social site icons */}
                    <div className="flex justify-center md:justify-end gap-3 mt-6 md:mt-0 w-full md:w-auto">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                         <a
                            href="https://youtube.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                            aria-label="Youtube"
                        >
                            <Youtube className="w-4 h-4" /> 
                        </a>
                    </div>
                </div>

                {/* bottom section */}
                <hr className="border-black mb-6 max-w-4xl mx-auto" />

                {/* copyright and policy links */}
                <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-900 gap-y-2 md:gap-x-4">
                    <span>© 2025 Security Council. All rights reserved.</span>
                    <span className="hidden md:inline-block">|</span> 
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                        <Link to="/" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
                        <span className="text-gray-400">|</span>
                        <Link to="/" className="hover:text-gray-700 transition-colors">Terms of Use</Link>
                        <span className="text-gray-400">|</span>
                        <Link to="/" className="hover:text-gray-700 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;