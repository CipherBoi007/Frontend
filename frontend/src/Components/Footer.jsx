import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 z-0 pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-16">
                    <div>
                        <Link to="/" className="flex items-center mb-4">
                            <img src="/Trans_Erp_logo.png" alt="EduERP" className="h-[100px] w-auto object-contain origin-left scale-110 brightness-0 invert" />
                        </Link>
                        <p className="text-slate-400 mt-4 text-[0.95rem] max-w-[320px] leading-relaxed">
                            A complete college management system built for Indian institutions — from admissions to alumni management.
                        </p>
                        <div className="flex gap-3 mt-6">
                            <span className="text-[0.75rem] font-semibold bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-full">200+ Colleges</span>
                            <span className="text-[0.75rem] font-semibold bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-full">5L+ Students</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-white text-[0.9rem] uppercase tracking-wider">Modules</h4>
                        <ul>
                            <li className="mb-3"><a href="/#admissions" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Admissions</a></li>
                            <li className="mb-3"><a href="/#academics" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Academics & Timetable</a></li>
                            <li className="mb-3"><a href="/#fee-finance" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Fee & Finance</a></li>
                            <li className="mb-3"><a href="/#examination" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Examination & Results</a></li>
                            <li className="mb-3"><a href="/#library" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Library & Hostel</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-white text-[0.9rem] uppercase tracking-wider">Company</h4>
                        <ul>
                            <li className="mb-3"><Link to="/about" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">About Us</Link></li>
                            <li className="mb-3"><a href="/#testimonials" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Success Stories</a></li>
                            <li className="mb-3"><Link to="/" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Careers</Link></li>
                            <li className="mb-3"><Link to="/" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Blog & Resources</Link></li>
                            <li className="mb-3"><Link to="/" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-white text-[0.9rem] uppercase tracking-wider">Support</h4>
                        <ul>
                            <li className="mb-3"><Link to="/" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Help Center</Link></li>
                            <li className="mb-3"><Link to="/" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Onboarding Guide</Link></li>
                            <li className="mb-3"><Link to="/" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Training Videos</Link></li>
                            <li className="mb-3"><Link to="/" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">Request a Demo</Link></li>
                            <li className="mb-3"><Link to="/" className="text-slate-400 text-[0.95rem] transition-colors duration-200 hover:text-emerald-400">System Status</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[0.875rem]">
                    <p>© 2026 EduERP Systems Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Data Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
