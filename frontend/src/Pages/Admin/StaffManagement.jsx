import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { motion, AnimatePresence } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

// Data now fetched from backend API

const StaffManagement = () => {
    const [staffList, setStaffList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingStaff, setEditingStaff] = useState(null);
    const [formData, setFormData] = useState({ name: '', role: '', department: '', status: 'Active' });

    // Fetch staff on mount
    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {
        try {
            const response = await axios.get('/api/staff');
            setStaffList(response.data);
        } catch (error) {
            console.error('Error fetching staff:', error);
        }
    };

    // Filter staff
    const filteredStaff = staffList.filter(staff => 
        staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        staff.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handlers
    const handleOpenModal = (staff = null) => {
        if (staff) {
            setEditingStaff(staff);
            setFormData(staff);
        } else {
            setEditingStaff(null);
            setFormData({ name: '', role: '', department: '', status: 'Active' });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingStaff(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingStaff) {
                const response = await axios.put(`/api/staff/${editingStaff._id}`, formData);
                setStaffList(staffList.map(s => s._id === editingStaff._id ? response.data : s));
            } else {
                const response = await axios.post('/api/staff', formData);
                setStaffList([...staffList, response.data]);
            }
            handleCloseModal();
        } catch (error) {
            console.error('Error saving staff member:', error);
            alert('Failed to save staff member');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this staff member?')) {
            try {
                await axios.delete(`/api/staff/${id}`);
                setStaffList(staffList.filter(s => s._id !== id));
            } catch (error) {
                console.error('Error deleting staff member:', error);
                alert('Failed to delete staff member');
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Staff Management</h1>
                    <p className="text-slate-500 mt-1">Manage institutional staff accounts and roles.</p>
                </div>
                <button 
                    onClick={() => handleOpenModal()}
                    className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg shadow-btn-primary transition-all flex items-center justify-center font-medium gap-2"
                >
                    <AddIcon fontSize="small" />
                    Add Staff
                </button>
            </div>

            {/* Table Controls */}
            <div className="bg-white p-4 rounded-t-2xl border border-b-0 border-slate-200 flex items-center justify-between">
                <div className="relative w-full max-w-sm">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="Search staff by name or department..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white border border-slate-200 rounded-b-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider font-semibold">
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Department</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredStaff.length > 0 ? (
                                filteredStaff.map((staff) => (
                                    <tr key={staff._id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-900">{staff.name}</div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">{staff.role}</td>
                                        <td className="px-6 py-4 text-slate-500">{staff.department}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                staff.status === 'Active' 
                                                    ? 'bg-emerald-50 text-emerald-700' 
                                                    : 'bg-amber-50 text-amber-700'
                                            }`}>
                                                {staff.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button 
                                                onClick={() => handleOpenModal(staff)}
                                                className="text-slate-400 hover:text-primary transition-colors p-1"
                                                title="Edit"
                                            >
                                                <EditIcon fontSize="small" />
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(staff._id)}
                                                className="text-slate-400 hover:text-red-500 transition-colors p-1 ml-2"
                                                title="Delete"
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                                        No staff members found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Modal Overlay */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                            onClick={handleCloseModal}
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden border border-slate-100"
                        >
                            {/* Decorative header gradient */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-emerald-400"></div>
                            
                            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                                    {editingStaff ? 'Edit Staff Member' : 'Add New Staff'}
                                </h3>
                                <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-700 bg-white hover:bg-slate-100 p-2 rounded-full transition-colors shadow-sm border border-slate-200 flex items-center justify-center">
                                    <CloseIcon fontSize="small" />
                                </button>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-white">
                                <div className="text-left">
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-400 placeholder:font-normal"
                                        placeholder="e.g. John Doe"
                                    />
                                </div>
                                <div className="text-left">
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Role</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.role}
                                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-400 placeholder:font-normal"
                                        placeholder="e.g. Professor"
                                    />
                                </div>
                                <div className="text-left">
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Department</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.department}
                                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-400 placeholder:font-normal"
                                        placeholder="e.g. Mathematics"
                                    />
                                </div>
                                <div className="text-left">
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Status</label>
                                    <select 
                                        value={formData.status}
                                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="On Leave">On Leave</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                                
                                <div className="pt-6 flex gap-3 justify-end border-t border-slate-100 mt-6">
                                    <button 
                                        type="button"
                                        onClick={handleCloseModal}
                                        className="px-6 py-2.5 text-slate-600 font-semibold hover:bg-slate-100 rounded-xl transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit"
                                        className="px-6 py-2.5 bg-gradient-to-r from-primary to-indigo-600 hover:from-indigo-600 hover:to-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                                    >
                                        {editingStaff ? 'Save Changes' : 'Add Staff'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StaffManagement;
