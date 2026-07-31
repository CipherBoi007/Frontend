import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: "Built for scale.",
            text: "We understand that educational institutions are complex ecosystems. From managing thousands of daily attendances to processing complex fee structures, our platform is engineered to handle massive data loads without breaking a sweat. We didn't just build software; we built a foundation for your institution's future.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
            imageLeft: true
        },
        {
            title: "Uncompromising security.",
            text: "Student and financial data is highly sensitive. We treat your data with the same level of security as a top-tier bank. With end-to-end encryption, role-based access controls, and automated daily backups, you can sleep soundly knowing your institution's information is protected by industry-leading protocols.",
            image: "https://tse4.mm.bing.net/th/id/OIP.Apw47K-2cFnUdo1LqZb56AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            imageLeft: false
        },
        {
            title: "Empowering educators.",
            text: "Technology should get out of the way so educators can focus on what they do best: teaching. Our interfaces are designed to be intuitive and fast, minimizing the learning curve for your staff. We believe in building tools that people actually enjoy using, replacing frustration with productivity.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
            imageLeft: true
        },
        {
            title: "Always by your side.",
            text: "Implementing a new ERP is a journey, and we're with you every step of the way. Our dedicated onboarding specialists and 24/7 support team ensure that you're never left in the dark. Whether it's a minor query or a major customization request, we're just a message away.",
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop",
            imageLeft: false
        }
    ];

    return (
        <div className="bg-background min-h-screen font-sans">
            <Navbar />
            
            <main className="pt-[140px] pb-0">
                {/* Hero Section */}
                <section className="container-custom max-w-[900px] mx-auto text-center mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[2.5rem] md:text-[3.5rem] font-bold text-slate-900 leading-tight mb-8"
                    >
                        👋, we're EduERP!<br/>
                        <span className="font-light text-slate-600 text-[1.5rem] md:text-[2rem] block mt-4 leading-relaxed">
                            We're leading a digital revolution for colleges, and reimagining the tools that help educators shine.
                        </span>
                    </motion.h1>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12 border border-slate-200/50"
                    >
                        <img 
                            src="https://wallpaperaccess.com/full/8066764.jpg" 
                            alt="EduERP Campus" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-[700px] mx-auto text-[1.1rem] text-slate-600 leading-relaxed"
                    >
                        We started with a simple idea: administrative tasks shouldn't consume an educator's day. What began as a small project to automate fee collection has blossomed into a comprehensive enterprise platform. Today, we're proud to support hundreds of institutions across the country.
                        <div className="mt-4 font-semibold text-primary cursor-pointer hover:underline">
                            Read our Founding Story &rarr;
                        </div>
                    </motion.div>
                </section>

                {/* Z-Pattern Sections */}
                <section className="container-custom max-w-[1000px] mx-auto py-16 space-y-24 md:space-y-32">
                    {sections.map((sec, idx) => (
                        <div key={idx} className={`flex flex-col gap-10 items-center ${sec.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Image Half */}
                            <motion.div 
                                initial={{ opacity: 0, x: sec.imageLeft ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="w-full md:w-1/2"
                            >
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200/50">
                                    <img src={sec.image} alt={sec.title} className="w-full h-full object-cover" />
                                </div>
                            </motion.div>

                            {/* Text Half */}
                            <motion.div 
                                initial={{ opacity: 0, x: sec.imageLeft ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="w-full md:w-1/2 px-4 md:px-8"
                            >
                                <h2 className="text-[2rem] font-bold text-slate-900 mb-6 tracking-tight">{sec.title}</h2>
                                <p className="text-[1.05rem] text-slate-600 leading-relaxed">
                                    {sec.text}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </section>

                {/* Overlapping CTA Banner */}
                <div className="container-custom max-w-[800px] mx-auto relative z-10 -mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary rounded-3xl p-10 md:p-14 text-center shadow-2xl border border-white/10"
                    >
                        <h2 className="text-[2.25rem] font-bold text-white mb-4">
                            Ready to transform your campus?
                        </h2>
                        <p className="text-primary-light text-[1.1rem] mb-8 max-w-[500px] mx-auto">
                            Join over 200+ institutions that have eliminated paperwork and embraced digital efficiency.
                        </p>
                        <button className="bg-white text-primary font-bold text-[1.1rem] px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform active:scale-95 mb-8">
                            Book a Free Demo
                        </button>

                        {/* Contact Tags */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="bg-white/10 hover:bg-white/20 transition-colors text-white px-5 py-2.5 rounded-full font-medium text-sm border border-white/20 flex items-center gap-2.5 shadow-sm backdrop-blur-sm cursor-pointer">
                                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                9047796739
                            </div>
                            <div className="bg-white/10 hover:bg-white/20 transition-colors text-white px-5 py-2.5 rounded-full font-medium text-sm border border-white/20 flex items-center gap-2.5 shadow-sm backdrop-blur-sm cursor-pointer">
                                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                cipherboi007@gmail.com
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            
            <div className="pt-32">
                <Footer />
            </div>
        </div>
    );
};

export default About;
