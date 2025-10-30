import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react'; // Import the ArrowRight icon
// Assuming you have a Webflow logo image. Adjust the path as necessary.
import WebflowLogo from '../../public/webflow.png';

const testimonials = [
    {
        quote: "Security Council transformed our cybersecurity posture, providing invaluable insights and support that exceeded our expectations.",
        author: "John Doe",
        title: "CISO, TechCorp",
        authorImage: null 
    },
    {
        quote: "Their expertise and proactive approach significantly strengthened our defenses. Highly recommended and a pleasure to work with!",
        author: "Jane Smith",
        title: "Head of IT, Global Solutions",
        authorImage: null
    },
    {
        quote: "An exceptional partner in navigating complex security challenges. The team is incredibly knowledgeable, responsive, and truly a cut above.",
        author: "Mike Johnson",
        title: "CTO, InnovateX",
        authorImage: null
    }
];

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const goToNextTestimonial = () => {
        setCurrentTestimonial((prevIndex) =>
            (prevIndex + 1) % testimonials.length
        );
    };

    const goToTestimonial = (index) => {
        setCurrentTestimonial(index);
    };

    const { quote, author, title, authorImage } = testimonials[currentTestimonial];

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="bg-white md:p-12 rounded-lg max-w-4xl w-full relative">
                {/* Webflow Logo */}
               
                <img src={WebflowLogo} alt="Webflow Logo" className="h-30 mx-auto mb-10" />

                {/* Testimonial Quote */}
                <p className="text-2xl md:text-3xl leading-relaxed text-center font-medium text-gray-800 max-w-2xl mx-auto mb-10">
                    "{quote}"
                </p>

                {/* Author Image */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    {authorImage ? (
                        <img src={authorImage} alt={author} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-gray-600 text-xl md:text-2xl font-semibold">
                            {author.charAt(0)}
                        </span>
                    )}
                </div>

                {/* Author Info */}
                <p className="text-lg md:text-xl font-semibold text-gray-900 mb-1 text-center">{author}</p>
                <p className="text-sm text-gray-600 mb-8 text-center">{title}</p>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-2 mt-4">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`block w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                                currentTestimonial === index ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            onClick={() => goToTestimonial(index)}
                        ></span>
                    ))}
                </div>

                {/* Right Arrow (Next Testimonial) using Lucid icon */}
                <button
                    onClick={goToNextTestimonial}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors shadow-md"
                    aria-label="Next testimonial"
                >
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-7" /> {/* Lucid icon */}
                </button>
            </div>
        </section>
    );
};

export default Testimonial;