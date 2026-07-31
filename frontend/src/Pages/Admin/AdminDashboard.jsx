import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const AdminDashboard = () => {
    const [dashboardStats, setDashboardStats] = useState({ totalStaff: 0, totalDepartments: 0, activeStudents: 0 });
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const statsRes = await axios.get('/api/dashboard/stats');
                setDashboardStats(statsRes.data);
                
                const activityRes = await axios.get('/api/dashboard/activity');
                setActivities(activityRes.data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };
        fetchDashboardData();
    }, []);

    const stats = [
        {
            title: 'Total Staff',
            value: dashboardStats.totalStaff.toString(),
            change: '+12%',
            trend: 'up',
            icon: PeopleIcon,
            color: 'text-emerald-500',
            bg: 'bg-emerald-50',
        },
        {
            title: 'Departments',
            value: dashboardStats.totalDepartments.toString(),
            change: '+2',
            trend: 'up',
            icon: BusinessCenterIcon,
            color: 'text-primary',
            bg: 'bg-primary/10',
        },
        {
            title: 'Active Students',
            value: dashboardStats.activeStudents.toString(),
            change: '+18%',
            trend: 'up',
            icon: SchoolIcon,
            color: 'text-blue-500',
            bg: 'bg-blue-50',
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
                <p className="text-slate-500 mt-1">Welcome back, Admin. Here is what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                                    <Icon />
                                </div>
                                <div className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                                    <TrendingUpIcon className="w-4 h-4 mr-1" />
                                    {stat.change}
                                </div>
                            </div>
                            <h3 className="text-slate-500 font-medium text-sm">{stat.title}</h3>
                            <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Placeholder for Charts / Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm min-h-[400px] flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                            <TrendingUpIcon fontSize="large" />
                        </div>
                        <h3 className="text-slate-900 font-bold mb-1">Growth Analytics</h3>
                        <p className="text-slate-500 text-sm">Chart visualization will appear here.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm min-h-[400px]">
                    <h3 className="text-slate-900 font-bold mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {activities.length > 0 ? activities.map((item) => (
                            <div key={item._id} className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                                <div>
                                    <p className="text-sm text-slate-900 font-medium">{item.message}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{new Date(item.createdAt).toLocaleString()}</p>
                                </div>
                            </div>
                        )) : (
                            <p className="text-sm text-slate-500">No recent activity.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
