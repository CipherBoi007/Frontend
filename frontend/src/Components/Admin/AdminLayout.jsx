import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navigation = [
        { name: 'Overview', href: '/admin', icon: DashboardIcon },
        { name: 'Staff', href: '/admin/staff', icon: PeopleIcon },
        { name: 'Departments', href: '/admin/departments', icon: BusinessIcon },
    ];

    const isActive = (path) => {
        if (path === '/admin') {
            return location.pathname === '/admin';
        }
        return location.pathname.startsWith(path);
    };

    const handleLogout = async () => {
        try {
            await axios.post('/api/auth/logout');
        } catch (error) {
            console.error('Logout failed on backend:', error);
        } finally {
            localStorage.removeItem('adminToken');
            navigate('/login');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                flex flex-col
                fixed inset-y-0 left-0 z-50 w-64 bg-white text-slate-900 border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:flex-shrink-0
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="h-20 flex-shrink-0 flex items-center px-6 border-b border-slate-200">
                    <img src="/Trans_Erp_logo.png" alt="EduERP" className="h-[78px] w-auto" />
                </div>

                <nav className="p-4 space-y-2 mt-4 flex-1 overflow-y-auto">
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium
                                    ${active
                                        ? 'bg-primary/10 text-primary shadow-sm'
                                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                                    }
                                `}
                            >
                                <Icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
                
                {/* Logout Button */}
                <div className="p-4 border-t border-slate-200 mt-auto flex-shrink-0">
                    <button
                        onClick={handleLogout}
                        className="flex items-center justify-center w-full gap-2 px-4 py-3 rounded-lg text-red-600 font-medium hover:bg-red-50 transition-colors"
                    >
                        <LogoutIcon className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Header */}
                <header className="h-20 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between z-30">
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden text-slate-500 hover:text-slate-900"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <MenuIcon />
                        </button>

                        {/* Search Bar Placeholder */}
                        <div className="hidden sm:flex items-center bg-slate-100 px-4 py-2 rounded-lg">
                            <SearchIcon className="text-slate-400 w-5 h-5 mr-2" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-sm text-slate-700 w-64 placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <button className="text-slate-400 hover:text-primary relative">
                            <NotificationsIcon />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                AD
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-sm font-bold text-slate-900 leading-tight">Admin User</p>
                                <p className="text-xs text-slate-500 font-medium">Super Admin</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main View Area */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-4 sm:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
