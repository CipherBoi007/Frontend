import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "How long does it take to migrate our existing data?",
        answer: "Our dedicated onboarding team ensures a complete migration of all your historical data (Excel sheets, legacy ERP data, paper records) within 3 to 7 working days, ensuring zero downtime for your ongoing academic sessions."
    },
    {
        question: "Is there a limit to the number of staff or administrative users?",
        answer: "Absolutely not! We charge purely based on the active student headcount. You can add unlimited faculty members, administrators, and staff accounts at no extra cost."
    },
    {
        question: "Who owns the data stored on EduERP?",
        answer: "Your institution owns 100% of the data. We act purely as the data processor. You can export all your data in standard formats (CSV/Excel) at any time with a single click."
    },
    {
        question: "Do you provide on-campus training for our faculty?",
        answer: "Yes, we provide both extensive virtual training and optional on-site training sessions. We also offer 24/7 priority chat and email support to resolve any doubts instantly."
    },
    {
        question: "Can we integrate EduERP with our existing biometric attendance devices?",
        answer: "Yes, our HRMS module comes with API endpoints that seamlessly integrate with 95% of standard biometric (RFID/Fingerprint/Face) devices to automate staff attendance and payroll calculations."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-[120px] bg-[#F8FAFC]">
            <div className="container-custom max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 font-extrabold text-[0.85rem] uppercase tracking-[0.2em] mb-4">
                        Got Questions?
                    </div>
                    <h2 className="text-[2.5rem] font-extrabold mb-5 tracking-tight text-slate-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 text-[1.125rem] leading-relaxed">
                        Everything you need to know about the product and billing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm h-max"
                            >
                                <button 
                                    className="w-full px-6 py-5 flex items-start justify-between text-left focus:outline-none"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-bold text-[1.05rem] text-slate-900 pr-4 leading-tight">{faq.question}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-slate-50 text-slate-400'}`}>
                                        <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-slate-500 leading-relaxed text-[0.95rem] border-t border-slate-100 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
