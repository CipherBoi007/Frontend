import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[100px] bg-white relative overflow-hidden">
            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                
                {/* Left: Professional Copy */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-[600px] z-10"
                >
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 font-extrabold text-[0.85rem] uppercase tracking-[0.2em] mb-6">
                        Enterprise College ERP
                    </div>
                    
                    <h1 className="text-[2.5rem] lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.15] tracking-[-0.02em] mb-6">
                        Manage your institution with absolute precision.
                    </h1>
                    
                    <p className="text-[1.125rem] text-slate-600 mb-8 leading-[1.7]">
                        EduERP is a comprehensive college management platform designed to automate admissions, academics, fee collection, and HR workflows — eliminating data silos and operational inefficiencies.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-semibold text-[1rem] transition-all shadow-sm hover:shadow-md">
                            Schedule a Demo
                        </button>
                        <button className="bg-white border border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-3.5 rounded-lg font-semibold text-[1rem] transition-colors">
                            Explore Modules
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center gap-8 pt-6 border-t border-slate-100">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: true }}>
                            <p className="text-[1.75rem] font-bold text-slate-900 leading-none mb-1">200+</p>
                            <p className="text-[0.8rem] text-slate-500 font-medium uppercase tracking-wide">Institutions</p>
                        </motion.div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true }}>
                            <p className="text-[1.75rem] font-bold text-slate-900 leading-none mb-1">5L+</p>
                            <p className="text-[0.8rem] text-slate-500 font-medium uppercase tracking-wide">Students</p>
                        </motion.div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} viewport={{ once: true }}>
                            <p className="text-[1.75rem] font-bold text-emerald-600 leading-none mb-1">100%</p>
                            <p className="text-[0.8rem] text-slate-500 font-medium uppercase tracking-wide">Secure (SOC2)</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right: Clean Image Layout */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 z-10"
                >
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/068/948/947/non_2x/campus-life-university-building-with-students-on-a-sunny-day-free-photo.jpg" 
                        alt="Campus Life" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                    {/* Subtle overlay for brand feel */}
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default Hero;
