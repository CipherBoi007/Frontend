import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-[1000] transition-all duration-300 shadow-sm">
            <div className="w-full px-6 md:px-12 lg:px-20 xl:px-24 flex justify-between items-center h-[80px]">
                
                {/* Left Side: Logo & Navigation */}
                <div className="flex items-center gap-16 flex-1">
                    <Link to="/" className="flex items-center shrink-0">
                        <img src="/Trans_Erp_logo.png" alt="EduERP" className="h-[80px] w-auto object-contain scale-[1.3] origin-left" />
                    </Link>
                    
                    <ul className="hidden md:flex items-center gap-8">
                        <li><Link to="/" className="font-semibold text-[0.95rem] text-slate-600 transition-colors duration-200 hover:text-primary">Home</Link></li>
                        <li><Link to="/about" className="font-semibold text-[0.95rem] text-slate-600 transition-colors duration-200 hover:text-primary">About Us</Link></li>
                        <li><Link to="/privacy" className="font-semibold text-[0.95rem] text-slate-600 transition-colors duration-200 hover:text-primary">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="font-semibold text-[0.95rem] text-slate-600 transition-colors duration-200 hover:text-primary">Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Right Side: CTA & Auth */}
                <div className="flex gap-5 items-center shrink-0">
                    <Link to="/login" className="font-bold text-[0.95rem] text-slate-600 hover:text-primary transition-colors">Sign In</Link>
                    <Link to="/register" className="bg-gradient-to-r from-primary to-indigo-600 hover:from-indigo-600 hover:to-primary text-white font-bold py-2.5 px-6 rounded-full shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                        Book a Free Demo
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
