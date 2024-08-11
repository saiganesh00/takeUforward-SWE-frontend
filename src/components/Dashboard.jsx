import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ onUpdateBanner }) => {
    const [formData, setFormData] = useState({
        description: '',
        timer: 0,
        link: '',
        isVisible: true,
    });

    useEffect(() => {
        axios.get('http://localhost:5000/banner')
            .then(response => {
                setFormData(response.data);
            });
    }, []);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/update-banner', formData)
            .then(response => {
                alert(response.data);
                onUpdateBanner(); // Trigger the banner update in the parent component
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="max-w-xl mx-auto p-8 mt-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-lg text-gray-700">Description:</label>
                    <input 
                        type="text" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-lg"
                    />
                </div>
                <div>
                    <label className="block text-lg text-gray-700">Timer (seconds):</label>
                    <input 
                        type="number" 
                        name="timer" 
                        value={formData.timer} 
                        onChange={handleChange} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-lg"
                    />
                </div>
                <div>
                    <label className="block text-lg text-gray-700">Link:</label>
                    <input 
                        type="text" 
                        name="link" 
                        value={formData.link} 
                        onChange={handleChange} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-lg"
                    />
                </div>
                <div>
                    <label className="block text-lg text-gray-700">Banner Visibility:</label>
                    <input 
                        type="checkbox" 
                        name="isVisible" 
                        checked={formData.isVisible} 
                        onChange={e => setFormData({ ...formData, isVisible: e.target.checked })} 
                        className="mt-2 h-5 w-5"
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">
                    Update Banner
                </button>
            </form>
        </div>
    );
};

export default Dashboard;
