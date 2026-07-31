import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Home/Hero';
import Marquee from '../Components/Home/Marquee';
import Features from '../Components/Home/Features';
import HowItWorks from '../Components/Home/HowItWorks';
import WhyChooseUs from '../Components/Home/WhyChooseUs';
import Testimonials from '../Components/Home/Testimonials';
import FAQ from '../Components/Home/FAQ';
import CTA from '../Components/Home/CTA';
import Footer from '../Components/Footer';

const Homepage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <Marquee />
            <Features />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    );
};

export default Homepage;
