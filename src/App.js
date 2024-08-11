import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import axios from 'axios';

const App = () => {
    const [bannerData, setBannerData] = useState(null);

    const fetchBannerData = () => {
        axios.get('http://localhost:5000/banner')
            .then(response => {
                setBannerData(response.data);
            });
    };

    useEffect(() => {
        fetchBannerData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-6">
            <div className="w-full max-w-4xl">
                {bannerData && <Banner data={bannerData} />}
                <Dashboard onUpdateBanner={fetchBannerData} />
            </div>
        </div>
    );
};

export default App;
