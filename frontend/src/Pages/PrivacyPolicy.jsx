import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const sections = ['intro', 'collect', 'use', 'security', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && 
                    element.offsetTop <= scrollPosition && 
                    (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    const navItems = [
        { id: 'intro', label: 'Introduction' },
        { id: 'collect', label: 'Information We Collect' },
        { id: 'use', label: 'How We Use Information' },
        { id: 'security', label: 'Data Security' },
        { id: 'contact', label: 'Contact Us' }
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <Navbar />
            
            <main className="pt-[72px] pb-[100px]">
                {/* Header */}
                <div className="bg-white border-b border-slate-200 py-20 mb-12">
                    <div className="container-custom max-w-[1200px] mx-auto px-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-[800px] mx-auto text-center"
                        >
                            <div className="text-primary font-bold text-[0.85rem] uppercase tracking-[0.2em] mb-4">
                                Legal & Compliance
                            </div>
                            <h1 className="text-[3.5rem] md:text-[4.5rem] font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                                Privacy Policy
                            </h1>
                            <div className="flex items-center justify-center gap-3 text-slate-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                <p className="text-[1.1rem] font-medium">
                                    Last updated: August 26, 2026
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="container-custom max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
                    
                    {/* Sticky Sidebar Navigation */}
                    <aside className="lg:w-[300px] hidden lg:block shrink-0">
                        <div className="sticky top-[120px]">
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Contents</h4>
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <button 
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                                            activeSection === item.id 
                                            ? 'bg-primary/10 text-primary font-semibold' 
                                            : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-900'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 max-w-[800px]">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-20 text-[1.1rem] text-slate-700 leading-[1.8]"
                        >
                            {/* Intro */}
                            <section id="intro" className="scroll-mt-32">
                                <h2 className="text-[2rem] font-bold text-slate-900 mb-6">Introduction</h2>
                                <p className="mb-6">
                                    At EduERP, we respect the privacy of your institution, staff, and students. We believe that privacy is a fundamental right, especially in the educational sector where sensitive data is handled daily.
                                </p>
                                <p>
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Enterprise College Management System platform. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                                </p>
                            </section>

                            <hr className="border-slate-200" />

                            {/* Collect */}
                            <section id="collect" className="scroll-mt-32">
                                <h2 className="text-[2rem] font-bold text-slate-900 mb-6">Information We Collect</h2>
                                <p className="mb-6">
                                    As a Data Processor for educational institutions, we collect data exclusively to provide our services. We do not mine your data for advertising purposes. The information we collect includes:
                                </p>
                                
                                <div className="space-y-6 mt-8">
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900">Institutional Data</h3>
                                        </div>
                                        <p className="text-slate-600">Names, contact details, role designations, and billing information of administrators and staff members using the platform.</p>
                                    </div>
                                    
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900">Student Data</h3>
                                        </div>
                                        <p className="text-slate-600">Records uploaded or managed by the institution, including academic performance, attendance records, health information, and fee payment history.</p>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-slate-200" />

                            {/* Use */}
                            <section id="use" className="scroll-mt-32">
                                <h2 className="text-[2rem] font-bold text-slate-900 mb-6">How We Use Information</h2>
                                <p className="mb-6">
                                    Our primary goal is to provide a seamless, secure experience for your institution. We use the information we collect strictly to facilitate the operations of the educational institution. 
                                </p>
                                <div className="bg-slate-100 p-6 rounded-xl mb-6">
                                    <strong className="text-slate-900 block mb-2">Our Promise:</strong>
                                    We <strong>never</strong> sell student or institutional data to third parties. We do not use your data to train public AI models or target advertising.
                                </div>
                                <p>
                                    Data is used solely for processing admissions, generating academic reports, managing fees, sending necessary platform notifications, and ensuring system reliability.
                                </p>
                            </section>

                            <hr className="border-slate-200" />

                            {/* Security */}
                            <section id="security" className="scroll-mt-32">
                                <h2 className="text-[2rem] font-bold text-slate-900 mb-6">Data Security</h2>
                                <p className="mb-6">
                                    We implement industry-standard security measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Encryption:</strong> AES-256 encryption at rest and TLS 1.3 in transit.</li>
                                    <li><strong>Infrastructure:</strong> Hosted on SOC2-compliant servers with multi-region failover capabilities.</li>
                                    <li><strong>Backups:</strong> Automated daily, encrypted backups stored in isolated environments to prevent data loss.</li>
                                    <li><strong>Access:</strong> Strict internal access controls and audit logging for all database queries.</li>
                                </ul>
                            </section>

                            <hr className="border-slate-200" />

                            {/* Contact */}
                            <section id="contact" className="scroll-mt-32">
                                <h2 className="text-[2rem] font-bold text-slate-900 mb-6">Contact Us</h2>
                                <p className="mb-6">
                                    If you have questions or comments about this Privacy Policy, our data practices, or if you would like to exercise your rights regarding your data, please contact our Data Protection Officer:
                                </p>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 flex items-start gap-6">
                                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">Data Protection Officer</h4>
                                        <p className="text-slate-600 mb-1">EduERP Systems Inc.</p>
                                        <a href="mailto:privacy@eduerp.com" className="text-primary font-semibold hover:underline">privacy@eduerp.com</a>
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
