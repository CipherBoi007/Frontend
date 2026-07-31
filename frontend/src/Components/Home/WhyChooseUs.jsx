import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "100% Data Security & SOC2 Compliant",
        description: "Your institution's data is encrypted at rest and in transit. We use AWS Enterprise grade security to ensure student records are never compromised.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        )
    },
    {
        title: "Zero Hidden Costs",
        description: "Unlike legacy ERPs, we don't charge per-module or implementation fees. Enjoy a transparent, flat subscription model based purely on student count.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        )
    },
    {
        title: "24/7 Dedicated Support",
        description: "Every institution gets a dedicated Account Manager and priority technical support. We resolve 90% of tickets within 2 hours.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        )
    },
    {
        title: "99.99% Guaranteed Uptime",
        description: "Cloud-native architecture means EduERP never goes down during critical periods like admissions, fee deadlines, or result declarations.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        )
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-[120px] bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[500px]"
                    >
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 font-extrabold text-[0.85rem] uppercase tracking-[0.2em] mb-4">
                            The EduERP Advantage
                        </div>
                        <h2 className="text-[2.5rem] font-extrabold mb-6 tracking-tight leading-tight text-slate-900">
                            Why are institutions switching to us?
                        </h2>
                        <p className="text-slate-600 text-[1.125rem] leading-relaxed mb-8">
                            Legacy software is slow, hard to use, and expensive to maintain. We built EduERP on modern cloud infrastructure to give administrators a seamless, beautiful experience.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                                <img src="https://i.pravatar.cc/100?img=33" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                                <img src="https://i.pravatar.cc/100?img=44" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                                <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+200</div>
                            </div>
                            <span className="text-sm font-medium text-slate-500">Trusted by top administrators</span>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5">
                                    {feature.icon}
                                </div>
                                <h3 className="text-[1.1rem] font-bold mb-3 text-slate-900">{feature.title}</h3>
                                <p className="text-slate-500 text-[0.9rem] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
