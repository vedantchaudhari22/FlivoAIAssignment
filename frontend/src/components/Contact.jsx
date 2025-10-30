import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, ShieldCheck, CalendarClock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const Contact = () => {

    // initial state of form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
        acceptTerms: false,
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        // backend api integration
        try {
            //i have deployed the project on render.com thats why using the deployed link of render
            // but for running the project on local machine then use this url "http://localhost:5000/api/contact" 
            // instead of render url
            const res = await axios.post('https://backend-o6hw.onrender.com', formData);

            if (res.data.success) {
                setStatus({ type: 'success', message: res.data.message || 'Message sent successfully!' });
                setIsModalOpen(true);

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    serviceType: '',
                    message: '',
                    acceptTerms: false,
                });
            } else {
                setStatus({ type: 'error', message: res.data.message || 'Submission failed.' });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus({
                type: 'error',
                message:
                    error.response?.data?.message ||
                    'Something went wrong. Please try again later.',
            });
            setIsModalOpen(false);
        } finally {
            setIsLoading(false);
        }
    };

    // function for closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
        //reset the state of type and message and make it clean
        setStatus({ type: '', message: '' });
    };

    return (
        <div
            className="w-full relative py-12 px-4 md:py-20 md:px-8 overflow-hidden"
            style={{
                background: `linear-gradient(
                    to bottom,
                    rgb(229, 245, 255),
                    rgb(148, 213, 255),
                    rgb(224, 243, 255)
                )`,
            }}
        >
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                {/* left side column */}
                <div className="relative z-10 flex flex-col text-gray-800 p-4">
                    <div className="relative z-10 p-6">
                        <div>
                            <span className="block text-sm font-semibold text-black tracking-wide">
                                Contact us
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[rgb(43,121,172)]">
                                Let's Secure Your Business
                            </h1>
                            <p className="text-gray-900 max-w-md">
                                Have questions about our services or need a custom security
                                solution? Fill out the form and our team will get back to you
                                within 24 hours.
                            </p>
                        </div>

                        <div className="mt-12 space-y-5">
                            <a
                                href="mailto:email@example.com"
                                className="flex items-center space-x-3 group"
                            >
                                <Mail size={20} className="text-black" />
                                <span className="text-black group-hover:text-blue-900 transition-colors">
                                    email@example.com
                                </span>
                            </a>

                            <a
                                href="tel:+1(555)000-0000"
                                className="flex items-center space-x-3 group"
                            >
                                <Phone size={20} className="text-black" />
                                <span className="text-black group-hover:text-blue-900 transition-colors">
                                    +1 (555) 000-0000
                                </span>
                            </a>

                            <div className="flex items-start space-x-3">
                                <MapPin size={20} className="text-black mt-1" />
                                <span className="text-black">
                                    123 Example St, Sydney NSW 2000 AU
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side column (form section) */}
                <div className="p-8 md:p-12 rounded-2xl relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-6 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    autoComplete='off'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-black shadow-sm
                                             bg-white text-black placeholder-gray-500
                                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    autoComplete='off'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-black shadow-sm
                                             bg-white text-black placeholder-gray-500
                                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete='off'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-black shadow-sm
                                             bg-white text-black placeholder-gray-500
                                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    autoComplete='off'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-black shadow-sm
                                             bg-white text-black placeholder-gray-500
                                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Service Type?
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                {[
                                    'Web Application Security Audits',
                                    'PCI DSS Gap Assessments',
                                    'Cloud Security Assessments',
                                    'Security Awareness Training',
                                ].map((service) => (
                                    <div key={service} className="flex items-center">
                                        <input
                                            type="radio"
                                            name="serviceType"
                                            id={service}
                                            value={service}
                                            checked={formData.serviceType === service}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 accent-blue-600"
                                        />
                                        <label htmlFor={service} className="ml-2 block text-sm text-gray-800">
                                            {service}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                autoComplete='off'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message..."
                                className="w-full px-4 py-3 border border-black shadow-sm
                                            bg-white text-black placeholder-gray-500
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            ></textarea>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="acceptTerms"
                                id="acceptTerms"
                                required
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 accent-blue-600"
                            />
                            <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-800">
                                I accept <Link to='/' className='underline'>Terms</Link>
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-auto px-8 py-3 bg-blue-500 text-white font-medium shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Book your call'}
                            </button>
                        </div>
                    </form>

                    {/* data sent to backend message */}
                    {status.message && !isModalOpen && (
                        <p
                            className={`mt-4 text-sm font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-600'
                                }`}
                        >
                            {status.message}
                        </p>
                    )}
                </div>
            </div>

            <img
                src="public/ball.png"
                alt="Decorative ball"
                className="absolute left-[150px] bottom-2 w-[200px] h-[200px] opacity-80 z-0"
            />

            <div className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-[rgb(60,120,160)] to-transparent shadow-[0_-10px_20px_rgba(0,0,0,0.2)]"></div>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default Contact;
