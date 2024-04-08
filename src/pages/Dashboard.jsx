import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Retrieve user data from sessionStorage
        const userData = sessionStorage.getItem('existingUser');
        if (userData) {
            const existingUser = JSON.parse(userData);
            setUsername(existingUser.username);
        }
    }, []);

    return (
        <div className='d-flex justify-content-center p-5'>
            <h2 >Welcome, {username}!</h2>
            {/* Other dashboard content */}
        </div>
    );
};

export default Dashboard;
