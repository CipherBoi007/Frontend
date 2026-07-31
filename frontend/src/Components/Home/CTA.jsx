import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-20 pb-[120px] bg-background">
            <div className="container-custom">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-primary rounded-2xl py-20 px-12 text-center text-secondary shadow-xl relative overflow-hidden"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-8 h-[2px] bg-white/30"></div>
                            <span className="text-white/80 font-bold text-[0.8rem] uppercase tracking-widest">
                                Get Started — It's Free to Try
                            </span>
                            <div className="w-8 h-[2px] bg-white/30"></div>
                        </div>
                        <h2 className="text-[2.5rem] font-bold mb-4 leading-tight">
                            Ready to digitize your college?
                        </h2>
                        <p className="text-[1.125rem] text-primary-light mb-10 max-w-[600px] mx-auto leading-relaxed">
                            Join 200+ institutions that have eliminated administrative bottlenecks, reduced fee defaults, and given students a seamless digital experience — all with EduERP.
                        </p>
                        
                        <div className="flex gap-3 max-w-[520px] mx-auto mb-6">
                            <input 
                                type="email" 
                                placeholder="Enter your college email" 
                                className="flex-1 px-6 py-4 rounded-xl border-none text-base outline-none text-text-main placeholder:text-slate-400 shadow-sm" 
                            />
                            <button className="bg-text-main text-secondary border-none px-8 rounded-xl font-bold cursor-pointer transition-all duration-200 hover:bg-slate-800 whitespace-nowrap shadow-sm hover:scale-105 active:scale-95">
                                Book a Free Demo
                            </button>
                        </div>
                        <p className="text-[0.85rem] text-white/50 font-medium">
                            No credit card required · Setup in under 24 hours · Dedicated onboarding support
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
