import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 bg-secondary border-t border-border">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-16">
                    <div>
                        <Link to="/" className="flex items-center mb-4">
                            <img src="/Trans_Erp_logo.png" alt="EduERP" className="h-[100px] w-auto object-contain origin-left scale-110" />
                        </Link>
                        <p className="text-text-muted mt-4 text-[0.95rem] max-w-[320px] leading-relaxed">
                            A complete college management system built for Indian institutions — from admissions to alumni management.
                        </p>
                        <div className="flex gap-3 mt-6">
                            <span className="text-[0.75rem] font-semibold bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full">200+ Colleges</span>
                            <span className="text-[0.75rem] font-semibold bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full">5L+ Students</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-text-main text-[0.9rem] uppercase tracking-wider">Modules</h4>
                        <ul>
                            <li className="mb-3"><a href="/#admissions" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Admissions</a></li>
                            <li className="mb-3"><a href="/#academics" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Academics & Timetable</a></li>
                            <li className="mb-3"><a href="/#fee-finance" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Fee & Finance</a></li>
                            <li className="mb-3"><a href="/#examination" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Examination & Results</a></li>
                            <li className="mb-3"><a href="/#library" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Library & Hostel</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-text-main text-[0.9rem] uppercase tracking-wider">Company</h4>
                        <ul>
                            <li className="mb-3"><Link to="/about" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">About Us</Link></li>
                            <li className="mb-3"><a href="/#testimonials" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Success Stories</a></li>
                            <li className="mb-3"><Link to="/" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Careers</Link></li>
                            <li className="mb-3"><Link to="/" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Blog & Resources</Link></li>
                            <li className="mb-3"><Link to="/" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-text-main text-[0.9rem] uppercase tracking-wider">Support</h4>
                        <ul>
                            <li className="mb-3"><Link to="/" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Help Center</Link></li>
                            <li className="mb-3"><Link to="/" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Onboarding Guide</Link></li>
                            <li className="mb-3"><Link to="/" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Training Videos</Link></li>
                            <li className="mb-3"><Link to="/" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">Request a Demo</Link></li>
                            <li className="mb-3"><Link to="/" className="text-text-muted text-[0.95rem] transition-colors duration-200 hover:text-primary">System Status</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-text-muted text-[0.875rem]">
                    <p>© 2026 EduERP Systems Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-primary transition-colors">Data Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
