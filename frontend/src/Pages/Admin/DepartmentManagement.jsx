import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

// Data now fetched from backend API

const DepartmentManagement = () => {
    const [departmentsList, setDepartmentsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDepartment, setEditingDepartment] = useState(null);
    const [formData, setFormData] = useState({ name: '', head: '', totalStaff: '', status: 'Active' });

    // Fetch departments on mount
    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            const response = await axios.get('/api/departments');
            setDepartmentsList(response.data);
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };

    // Filter departments
    const filteredDepartments = departmentsList.filter(dept => 
        dept.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        dept.head.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handlers
    const handleOpenModal = (dept = null) => {
        if (dept) {
            setEditingDepartment(dept);
            setFormData(dept);
        } else {
            setEditingDepartment(null);
            setFormData({ name: '', head: '', totalStaff: '', status: 'Active' });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingDepartment(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingDepartment) {
                const response = await axios.put(`/api/departments/${editingDepartment._id}`, { ...formData, totalStaff: Number(formData.totalStaff) });
                setDepartmentsList(departmentsList.map(d => d._id === editingDepartment._id ? response.data : d));
            } else {
                const response = await axios.post('/api/departments', { ...formData, totalStaff: Number(formData.totalStaff) });
                setDepartmentsList([...departmentsList, response.data]);
            }
            handleCloseModal();
        } catch (error) {
            console.error('Error saving department:', error);
            alert('Failed to save department');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this department?')) {
            try {
                await axios.delete(`/api/departments/${id}`);
                setDepartmentsList(departmentsList.filter(d => d._id !== id));
            } catch (error) {
                console.error('Error deleting department:', error);
                alert('Failed to delete department');
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Department Management</h1>
                    <p className="text-slate-500 mt-1">Manage institutional departments and faculties.</p>
                </div>
                <button 
                    onClick={() => handleOpenModal()}
                    className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg shadow-btn-primary transition-all flex items-center justify-center font-medium gap-2"
                >
                    <AddIcon fontSize="small" />
                    Add Department
                </button>
            </div>

            {/* Table Controls */}
            <div className="bg-white p-4 rounded-t-2xl border border-b-0 border-slate-200 flex items-center justify-between">
                <div className="relative w-full max-w-sm">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="Search departments..."
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
                                <th className="px-6 py-4">Department Name</th>
                                <th className="px-6 py-4">Head of Department</th>
                                <th className="px-6 py-4">Total Staff</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredDepartments.length > 0 ? (
                                filteredDepartments.map((dept) => (
                                    <tr key={dept._id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-900">{dept.name}</div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">{dept.head}</td>
                                        <td className="px-6 py-4 text-slate-500">{dept.totalStaff}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                dept.status === 'Active' 
                                                    ? 'bg-emerald-50 text-emerald-700' 
                                                    : 'bg-amber-50 text-amber-700'
                                            }`}>
                                                {dept.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button 
                                                onClick={() => handleOpenModal(dept)}
                                                className="text-slate-400 hover:text-primary transition-colors p-1"
                                                title="Edit"
                                            >
                                                <EditIcon fontSize="small" />
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(dept._id)}
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
                                        No departments found matching your search.
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
                                    {editingDepartment ? 'Edit Department' : 'Add New Department'}
                                </h3>
                                <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-700 bg-white hover:bg-slate-100 p-2 rounded-full transition-colors shadow-sm border border-slate-200 flex items-center justify-center">
                                    <CloseIcon fontSize="small" />
                                </button>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-white">
                                <div className="text-left">
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Department Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-400 placeholder:font-normal"
                                        placeholder="e.g. Computer Science"
                                    />
                                </div>
                                <div className="text-left">
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Head of Department</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.head}
                                        onChange={(e) => setFormData({...formData, head: e.target.value})}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-400 placeholder:font-normal"
                                        placeholder="e.g. Dr. Sarah Jenkins"
                                    />
                                </div>
                                <div className="text-left">
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Total Staff</label>
                                    <input 
                                        type="number" 
                                        required
                                        min="0"
                                        value={formData.totalStaff}
                                        onChange={(e) => setFormData({...formData, totalStaff: e.target.value})}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-400 placeholder:font-normal"
                                        placeholder="0"
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
                                        {editingDepartment ? 'Save Changes' : 'Add Department'}
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

export default DepartmentManagement;
