// src/components/Modal.jsx
import React from 'react';
import { Lock, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // dimmed background is contact form but made dimmed
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/30 backdrop-sm p-4 transition-opacity duration-300 ease-out">

      {/* modal container */}
      <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full text-center transform transition-all duration-300 scale-100 opacity-100 border-8 border-[rgb(19,135,251)] overflow-hidden">

        {/* section for images */}
        <img
          src="public/modalShield.png" 
          alt="Decorative left"
          className="absolute bottom-3 left-5 w-20 h-20 opacity-90"
        />
        <img
          src="public/modalComputer.png" 
          alt="Decorative right"
          className="absolute bottom-3 right-5 w-20 h-20 opacity-90"
        />

        {/* section for text */}
        <h1 className="text-3xl font-bold text-[rgb(43,121,172)] mb-2 relative z-10">
          Let's Secure Your Business
        </h1>
        <p className="text-gray-600 text-sm mb-8 relative z-10">
          Our team will get back to you within 24 hours.
        </p>

        {/* button section */}
        <div className="flex justify-center relative z-10">
          <button
            onClick={onClose}
            className="py-2.5 px-8 bg-[rgb(19,135,251)] text-white hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 hover:rounded-md focus:ring-blue-500 focus:ring-offset-2 text-base font-semibold shadow-md"
          >
            <Link to='/'>Continue</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
