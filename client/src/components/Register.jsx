import React, { useState } from 'react';
import Modal from 'react-modal';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    mobileNumber: false,
  });

  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
  });

  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);
  const [otpErrorMessage, setOtpErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: false });
    setErrorMessages({ ...errorMessages, [id]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      email: !formData.email,
      mobileNumber: !formData.mobileNumber,
    };

    const newErrorMessages = {
      firstName: !formData.firstName ? 'First Name is mandatory' : '',
      lastName: !formData.lastName ? 'Last Name is mandatory' : '',
      email: !formData.email ? 'Email Address is mandatory' : '',
      mobileNumber: !formData.mobileNumber ? 'Mobile Number is mandatory' : '',
    };

    setErrors(newErrors);
    setErrorMessages(newErrorMessages);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      // Open OTP modal
      setIsOtpModalOpen(true);
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setOtpError(false);
    setOtpErrorMessage('');
  };

  const handleVerifyOtp = () => {
    if (otp !== '123456') { // Assuming '123456' is the correct OTP for demonstration
      setOtpError(true);
      setOtpErrorMessage('Wrong OTP');
    } else {
      setOtpError(false);
      setOtpErrorMessage('');
      setIsOtpModalOpen(false);
      console.log('OTP verified successfully');
      // Proceed with form submission or further steps
    }
  };

  const handleResendOtp = () => {
    // Logic to resend OTP
    console.log('OTP resent');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="mb-4 text-2xl font-bold text-gray-700 text-center">Register New Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              Enter First Name*
            </label>
            <input
              className={`shadow appearance-none border ${errors.firstName ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="firstName"
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500 text-xs italic">{errorMessages.firstName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Enter Last Name*
            </label>
            <input
              className={`shadow appearance-none border ${errors.lastName ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="lastName"
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-xs italic">{errorMessages.lastName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Enter Email Address*
            </label>
            <input
              className={`shadow appearance-none border ${errors.email ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errorMessages.email}</p>}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
              type="button"
              onClick={handleSubmit}
            >
              VERIFY EMAIL
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="mobileNumber">
              Enter Mobile Number*
            </label>
            <input
              className={`shadow appearance-none border ${errors.mobileNumber ? 'border-red-500' : 'border-blue-500'} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="mobileNumber"
              type="text"
              placeholder="Enter Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {errors.mobileNumber && <p className="text-red-500 text-xs italic">{errorMessages.mobileNumber}</p>}
            <p className="text-gray-600 text-xs italic">
              Your mobile number will be used to avail benefits such as Jio Mart Cashback and ROne Loyalty Points and receive quick notifications.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              PROCEED
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-500 text-xs">
          Already Registered? <a href="#" className="text-red-500 hover:text-red-700">LOGIN</a>
        </p>
      </div>

      <Modal
        isOpen={isOtpModalOpen}
        onRequestClose={() => setIsOtpModalOpen(false)}
        contentLabel="OTP Modal"
        className="fixed inset-0 mt-40 flex items-center justify-center  bg-opacity-75"
      >
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl mb-4">Enter OTP</h2>
          <input
            className={`shadow appearance-none border ${otpError ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="otp"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
          />
          {otpError && <p className="text-red-500 text-xs italic">{otpErrorMessage}</p>}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleVerifyOtp}
          >
            VERIFY OTP
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold mx-5 py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleResendOtp}
          >
            RESEND OTP
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
