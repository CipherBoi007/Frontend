import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Needs Assessment',
        description: 'Our onboarding experts analyze your current administrative workflows and map them to our digital modules.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
        )
    },
    {
        number: '02',
        title: 'Seamless Migration',
        description: 'We securely migrate all your legacy data (Excel, old DBs, paper records) into the EduERP cloud without zero downtime.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
        )
    },
    {
        number: '03',
        title: 'Go Live & Train',
        description: 'Your campus is fully digitized. We conduct deep-dive training sessions for your staff, faculty, and administrators.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        )
    }
];

const HowItWorks = () => {
    return (
        <section className="py-[100px] bg-white relative overflow-hidden">
            <div className="container-custom">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-[700px] mx-auto mb-20"
                >
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 font-extrabold text-[0.85rem] uppercase tracking-[0.2em] mb-4">
                        Onboarding Process
                    </div>
                    <h2 className="text-[2.5rem] font-extrabold mb-5 tracking-tight text-slate-900">
                        From paper to digital in 72 hours.
                    </h2>
                    <p className="text-slate-600 text-[1.125rem] leading-relaxed">
                        We handle the heavy lifting of digital transformation so your institution can focus on what matters most — education.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
                    {steps.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="bg-transparent text-left relative group"
                        >
                            <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {step.icon}
                            </div>
                            
                            <div className="flex items-center gap-4 mb-5">
                                <span className="text-[0.75rem] font-bold text-slate-400 uppercase tracking-widest">Step {step.number}</span>
                                <div className="h-px bg-slate-100 flex-1 transition-colors duration-300 group-hover:bg-primary/20"></div>
                            </div>
                            
                            <h3 className="text-[1.35rem] font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                            <p className="text-slate-500 text-[0.95rem] leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
