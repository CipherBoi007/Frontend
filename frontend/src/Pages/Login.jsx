import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex bg-white font-sans">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col lg:flex-row min-h-screen"
            >
                {/* Left Form Area */}
                <div className="w-full lg:w-1/2 p-8 sm:p-12 md:p-20 lg:p-24 flex flex-col justify-center relative bg-white min-h-screen">
                    <div className="max-w-[480px] w-full mx-auto mt-12 lg:mt-0">
                        <div className="mb-10 text-center lg:text-left">
                            <div className="flex justify-center lg:justify-start mb-8">
                                <img src="/Trans_Erp_logo.png" alt="EduERP" className="h-[72px] w-auto object-contain origin-left" />
                            </div>

                            <div className="w-20 h-20 bg-slate-50 rounded-full mx-auto lg:mx-0 flex items-center justify-center mb-6 border border-slate-100 shadow-sm">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </div>
                            </div>
                            <h2 className="text-[1.5rem] font-bold text-slate-900 tracking-tight mb-2">
                                Welcome back
                            </h2>
                            <p className="text-slate-500 font-medium">Please enter your details to sign in.</p>
                            {error && <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>}
                        </div>

                        <form className="space-y-5" onSubmit={async (e) => {
                            e.preventDefault();
                            setError('');
                            try {
                                const res = await axios.post('/api/auth/login', { username, password });
                                if (res.data.token) {
                                    localStorage.setItem('adminToken', res.data.token);
                                    navigate('/admin');
                                }
                            } catch (err) {
                                setError('Invalid Username or Password');
                            }
                        }}>
                            {/* Username Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:font-normal placeholder:text-slate-400"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <button 
                                    type="submit"
                                    className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-10 rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    Login
                                </button>
                                <Link to="/forgot-password" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                                    Forget Password?
                                </Link>
                            </div>
                        </form>
                        
                        <div className="mt-12 text-center lg:text-left">
                            <p className="text-sm text-slate-500">
                                Don't have an account? <Link to="/register" className="font-bold text-primary hover:underline">Register here</Link>
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
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-emerald-50">
                        <img 
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                            alt="Abstract Tech Illustration"
                            className="w-full h-full object-cover mix-blend-multiply opacity-90"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-color"></div>
                    </div>
                    
                    {/* Decorative overlays inspired by the reference */}
                    <div className="absolute bottom-16 right-16 text-right">
                        <p className="text-white/90 text-[1.1rem] max-w-[400px] drop-shadow-md">The all-in-one enterprise platform for modern educational institutions.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
