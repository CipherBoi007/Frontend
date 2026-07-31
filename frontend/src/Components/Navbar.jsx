import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-[1000] transition-all duration-300">
            <div className="container-custom flex justify-between items-center h-[72px]">
                <Link to="/" className="flex items-center">
                    <img src="/Trans_Erp_logo.png" alt="EduERP" className="h-[48px] w-auto object-contain scale-110 origin-left" />
                </Link>
                <ul className="flex gap-8">
                    <li><Link to="/" className="font-medium text-[0.95rem] text-text-muted transition-colors duration-200 hover:text-primary">Home</Link></li>
                    <li><Link to="/about" className="font-medium text-[0.95rem] text-text-muted transition-colors duration-200 hover:text-primary">About Us</Link></li>
                    <li><Link to="/privacy" className="font-medium text-[0.95rem] text-text-muted transition-colors duration-200 hover:text-primary">Privacy Policy</Link></li>
                    <li><Link to="/terms" className="font-medium text-[0.95rem] text-text-muted transition-colors duration-200 hover:text-primary">Terms of Service</Link></li>
                </ul>
                <div className="flex gap-4 items-center">
                    <Link to="/login" className="font-medium text-[0.95rem] text-text-muted hover:text-primary transition-colors">Sign In</Link>
                    <Link to="/register" className="btn btn-primary inline-block">Book a Free Demo</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
