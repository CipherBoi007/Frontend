import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
    const services = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
            ),
            title: "Admissions & Enrollment",
            description: "End-to-end automation of your admission process, from student enquiry to final onboarding.",
            features: [
                "Custom online application forms",
                "Digital document verification",
                "Automated merit list generation",
                "Online fee collection & seat blocking"
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            ),
            title: "Student Information System",
            description: "A centralized, secure database for 360-degree student profiles and lifecycle management.",
            features: [
                "Comprehensive student profiles",
                "Disciplinary & achievement logs",
                "Alumni management & tracking",
                "Parent/Guardian portal access"
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            ),
            title: "Fee & Finance Management",
            description: "Streamline revenue collection, eliminate cash handling, and track every transaction accurately.",
            features: [
                "Automated fee demand generation",
                "Payment gateway integrations",
                "Scholarship & concession tracking",
                "Real-time defaulter reports & alerts"
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            ),
            title: "Examination & Results",
            description: "Digitize the complete examination workflow to ensure accuracy, security, and timely results.",
            features: [
                "Exam scheduling & hall tickets",
                "Online marks entry by faculty",
                "Automated grading & CGPA calculation",
                "Print-ready transcripts & certificates"
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            ),
            title: "Academics & Timetable",
            description: "Optimize faculty workloads, manage curriculums, and prevent scheduling conflicts.",
            features: [
                "Conflict-free timetable generation",
                "Subject & syllabus mapping",
                "Daily attendance tracking (App/Web)",
                "Faculty workload distribution"
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            ),
            title: "Human Resources (HRMS)",
            description: "Manage your entire staff and faculty lifecycle from a single, compliant dashboard.",
            features: [
                "Leave & attendance management",
                "Automated payroll & payslips",
                "Biometric device integration",
                "PF, TDS & statutory compliance"
            ]
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="modules" className="py-[120px] bg-[#F8FAFC]">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-[700px] mx-auto mb-16"
                >
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 font-extrabold text-[0.85rem] uppercase tracking-[0.2em] mb-4">
                        Core Services & Modules
                    </div>
                    <h2 className="text-[2.5rem] font-extrabold mb-5 tracking-tight text-slate-900">
                        Everything you need to run a modern campus.
                    </h2>
                    <p className="text-slate-600 text-[1.125rem] leading-relaxed">
                        We provide a comprehensive suite of digital services designed specifically to solve the administrative challenges of higher education institutions.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div variants={cardVariants} key={index} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full text-left">
                            
                            {/* Header Row (Icon + Title) */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm flex-shrink-0">
                                    {service.icon}
                                </div>
                                <h3 className="text-[1.25rem] font-bold text-slate-900 tracking-tight leading-tight text-left">
                                    {service.title}
                                </h3>
                            </div>
                            
                            {/* Description */}
                            <p className="text-slate-500 text-[0.95rem] mb-8 leading-relaxed flex-grow text-left">
                                {service.description}
                            </p>
                            
                            {/* Feature List */}
                            <ul className="space-y-3 mt-auto pt-6 border-t border-slate-100 text-left">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="text-slate-700 text-[0.9rem] font-medium leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
