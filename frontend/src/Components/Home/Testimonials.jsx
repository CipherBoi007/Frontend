import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "EduERP completely transformed how we manage our 4,000-student institution. What used to take our admin team 3 weeks — like fee collection and result publishing — now happens in a single day. The ROI is undeniable.",
        name: "Dr. Meena Krishnamurthy",
        title: "Principal, Loyola College of Arts & Science",
        location: "Chennai, Tamil Nadu",
        avatar: "https://i.pravatar.cc/100?img=47",
        stat: "3 weeks → 1 day",
        statLabel: "Result processing time",
    },
    {
        quote: "As a Finance Officer, I was drowning in spreadsheets. Now I can see real-time fee collection data, identify defaulters instantly, and generate the bursar's report in 5 minutes. The defaulter tracking alone saved us ₹12 lakhs this semester.",
        name: "Mr. Suresh Ramanathan",
        title: "Finance Officer, St. Joseph's College",
        location: "Bengaluru, Karnataka",
        avatar: "https://i.pravatar.cc/100?img=12",
        stat: "₹12L",
        statLabel: "Recovered from defaulters",
    },
    {
        quote: "The admissions module is exactly what we needed. Our counsellors can now see the entire applicant pipeline on one screen. From online application to seat confirmation, nothing falls through the cracks anymore.",
        name: "Dr. Anjali Sharma",
        title: "Registrar, Fergusson College",
        location: "Pune, Maharashtra",
        avatar: "https://i.pravatar.cc/100?img=32",
        stat: "100%",
        statLabel: "Paperless admissions",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-[120px] bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary-light rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-light rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2"></div>

            <div className="container-custom relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-[600px] mx-auto mb-16"
                >
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 font-extrabold text-[0.85rem] uppercase tracking-[0.2em] mb-4">
                        Success Stories
                    </div>
                    <h2 className="text-[2.25rem] font-bold mb-4 tracking-[-0.02em] text-text-main">
                        Trusted by administrators across India
                    </h2>
                    <p className="text-text-muted text-[1.1rem] leading-relaxed">
                        Hear directly from Principals, Finance Officers, and Registrars about the real-world impact of EduERP.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            key={i} 
                            className="bg-secondary border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6 group"
                        >
                            {/* Stars */}
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, j) => (
                                    <svg key={j} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-[0.95rem] text-slate-600 leading-relaxed flex-1 relative">
                                <span className="absolute -top-2 -left-1 text-5xl text-primary/10 font-serif leading-none">"</span>
                                <span className="relative">{t.quote}</span>
                            </blockquote>

                            {/* Impact Stat */}
                            <div className="bg-primary-light border border-primary/10 rounded-xl px-5 py-4 flex items-center gap-4">
                                <div>
                                    <p className="text-2xl font-extrabold text-primary tracking-tight">{t.stat}</p>
                                    <p className="text-[0.75rem] font-semibold text-primary/70 mt-0.5">{t.statLabel}</p>
                                </div>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-4 border-t border-border">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary-light" />
                                <div>
                                    <p className="font-bold text-text-main text-[0.95rem]">{t.name}</p>
                                    <p className="text-[0.8rem] text-text-muted font-medium">{t.title}</p>
                                    <p className="text-[0.75rem] text-primary font-semibold mt-0.5">{t.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
