import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from '../axiosConfig';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            return setError('Passwords do not match');
        }

        setLoading(true);
        try {
            await axios.post('/api/auth/register', {
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            });
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-white font-sans">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col lg:flex-row-reverse min-h-screen"
            >
                {/* Left Form Area (On right due to flex-row-reverse) */}
                <div className="w-full lg:w-1/2 p-8 sm:p-12 md:p-20 lg:p-24 flex flex-col justify-center relative bg-white min-h-screen">
                    <div className="max-w-[480px] w-full mx-auto mt-12 lg:mt-0">
                        <div className="mb-8 text-center lg:text-left">
                            <div className="flex justify-center lg:justify-start mb-6">
                                <img src="/Trans_Erp_logo.png" alt="EduERP" className="h-[72px] w-auto object-contain origin-left" />
                            </div>

                            <h2 className="text-[1.8rem] font-bold text-slate-900 tracking-tight mb-2">
                                Create your account
                            </h2>
                            <p className="text-slate-500 font-medium">
                                Join hundreds of institutions digitizing their campus.
                            </p>
                        </div>

                        {error && (
                            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                                <p>{error}</p>
                            </div>
                        )}

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </div>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-normal placeholder:text-slate-400"
                                    required
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-normal placeholder:text-slate-400"
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </div>
                                <input 
                                    type="password" 
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-normal placeholder:text-slate-400"
                                    required
                                />
                            </div>

                            {/* Confirm Password Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </div>
                                <input 
                                    type="password" 
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-normal placeholder:text-slate-400"
                                    required
                                />
                            </div>

                            <div className="pt-2">
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? 'Registering...' : 'Register'}
                                </button>
                            </div>
                        </form>
                        
                        <div className="mt-8 text-center lg:text-left">
                            <p className="text-sm text-slate-500">
                                Already have an account? <Link to="/login" className="font-bold text-primary hover:underline">Log in here</Link>
                            </p>
                        </div>
                    </div>

                    <Link to="/" className="absolute top-8 left-8 text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Home
                    </Link>
                </div>

                {/* Right Illustration Area */}
                <div className="hidden lg:block lg:w-1/2 relative min-h-screen">
                    <div className="absolute inset-0 bg-gradient-to-bl from-indigo-50 to-emerald-50">
                        <img 
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                            alt="Abstract Tech Illustration"
                            className="w-full h-full object-cover mix-blend-multiply opacity-90"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-color"></div>
                    </div>
                    
                    <div className="absolute bottom-16 left-16 text-left">
                        <h3 className="text-[2.5rem] font-bold text-white tracking-tight mb-2 drop-shadow-md">Get Started Today</h3>
                        <p className="text-white/90 text-[1.1rem] max-w-[400px] drop-shadow-md">Join a secure, scalable ecosystem built specifically for educators.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
