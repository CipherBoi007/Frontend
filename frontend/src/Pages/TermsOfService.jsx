import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <Navbar />
            <main className="pt-[140px] pb-[100px]">
                <div className="container-custom max-w-[800px] mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-slate-200">
                    <div className="mb-12 border-b border-slate-100 pb-8">
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 font-extrabold text-[0.85rem] uppercase tracking-[0.2em] mb-4">
                            Legal & Compliance
                        </div>
                        <h1 className="text-[2.5rem] font-extrabold text-slate-900 mb-4">Terms of Service</h1>
                        <p className="text-slate-500 font-medium">Last updated: August 2026</p>
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-600">
                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h3>
                        <p className="mb-6 leading-relaxed">
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("the Institution") and EduERP, concerning your access to and use of the EduERP software platform and related services.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Intellectual Property Rights</h3>
                        <p className="mb-6 leading-relaxed">
                            Unless otherwise indicated, the platform is our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us. The Institution retains full ownership of all data uploaded to the platform.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. User Representations</h3>
                        <p className="mb-4 leading-relaxed">
                            By using the platform, you represent and warrant that:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You are an authorized representative of the educational institution.</li>
                            <li>You will not use the platform for any illegal or unauthorized purpose.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Subscription and Billing</h3>
                        <p className="mb-6 leading-relaxed">
                            EduERP is provided as a Software-as-a-Service (SaaS). Billing is conducted annually based on the number of active students managed in the system. Failure to remit payment within 30 days of the invoice date may result in a suspension of services.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Service Level Agreement (SLA)</h3>
                        <p className="mb-6 leading-relaxed">
                            We guarantee a 99.9% uptime for core services. Scheduled maintenance will be communicated at least 48 hours in advance and will be performed during low-traffic weekend hours.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
