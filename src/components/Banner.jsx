import React, { useEffect, useState } from 'react';

const Banner = ({ data }) => {
    const [timer, setTimer] = useState(data.timer);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) clearInterval(countdown);
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, [data]);

    if (!data.isVisible || timer <= 0) return null;

    return (
        <div className="bg-blue-500 text-white p-10 flex flex-col items-center justify-center text-center rounded-lg shadow-lg">
            <p className="text-2xl mb-4">{data.description}</p>
            <a href={data.link} className="text-blue-200 underline text-lg mb-4">Click Here</a>
            <p className="text-lg">Time left: {timer} seconds</p>
        </div>
    );
};

export default Banner;
