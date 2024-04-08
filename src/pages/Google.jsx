import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login success:', response);

        // Here you can access the credential token and other data from the response
        const { credential, clientId, select_by } = response;
        
        // Perform any actions you need with the response data
        // For example, you can store the credential token in the state
        // or use it to make authenticated requests to your backend server

        // Example: Storing the credential token in the localStorage
        localStorage.setItem('googleCredential', credential);

        // Redirect to the dashboard page
        navigate('/dashboard');
    };

    const handleGoogleLoginError = () => {
        console.log('Google login failed');
    };

    return (
        <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
        />
    );
};

export default GoogleLoginComponent;
