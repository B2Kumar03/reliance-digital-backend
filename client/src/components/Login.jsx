import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/user', { mobileNumber });
      if (response.data.userExists) {
        setShowOTP(true);
      } else {
        alert('User does not exist');
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
    }
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
    console.log('OTP entered:', otp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="w-1/2 bg-cover" style={{ backgroundImage: "url('https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg')" }}>
        </div>
        <div className="w-1/2 p-8">
          {!showOTP ? (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-4 text-center">Login / Register</h2>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                className="w-full p-2 mb-4 border rounded"
              />
              <button type="submit" className="w-full bg-red-600 text-white p-2 rounded">PROCEED</button>
            </form>
          ) : (
            <form onSubmit={handleOTPSubmit}>
              <h2 className="text-2xl font-bold mb-4 text-center">Login / Register</h2>
              <p className="mb-2">OTP Verification</p>
              <p className="mb-4">Please enter the OTP sent to your mobile number {mobileNumber}</p>
              <input
                type="text"
                placeholder="Enter OTP*"
                value={otp}
                onChange={handleOTPChange}
                className="w-full p-2 mb-4 border rounded"
              />
              <button type="submit" className="w-full bg-red-600 text-white p-2 rounded mb-2">LOGIN</button>
              <button type="button" className="w-full bg-gray-300 text-black p-2 rounded" onClick={() => setShowOTP(false)}>BACK</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
