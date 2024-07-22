import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
// import Modal from './Modal'; // Assuming Modal component is in the same directory


const handleGenerateToken = () => {
  if (tokenCount < maxTokens && phoneNumber.trim() !== '' && /^\d{6}$/.test(otp) && selectedDate !== null) {
    const newToken = generateToken(6);
    setToken(newToken);
    setTokenCount(tokenCount + 1);
    Swal.fire({
      icon: 'success',
      title: 'Token Generated!',
      html: `Your E-token number is <b>#${newToken}</b>. Scheduled time is ${selectedDate.toLocaleString()}. Please bring your ID proof and proof of investments.`,
      showCloseButton: true,
      showConfirmButton: false,
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Validation Error',
      text: 'Please enter a valid OTP (exactly 6 digits), phone number, and select a date.',
    });
  }
};

const TokenGenerator = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [token, setToken] = useState('');
  const [tokenCount, setTokenCount] = useState(0);
  const maxTokens = 30;

  const generateToken = (length) => {
    const chars = '0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      token += chars[randomIndex];
    }
    return token;
  };

  const handleGenerateToken = () => {
    if (tokenCount < maxTokens && phoneNumber.trim() !== '' && /^\d{6}$/.test(otp) && selectedDate !== null) {
      const newToken = generateToken(6);
      setToken(newToken);
      setTokenCount(tokenCount + 1);
      Swal.fire({
        icon: 'success',
        title: 'Token Generated!',
        text: `Your E-token number is ${newToken}. Scheduled time ${selectedDate.toLocaleString()}. Please bring your ID proof and proof of investments. `,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please enter a valid OTP (exactly 6 digits), phone number, and select a date.',
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="md:text-4xl text-2xl font-bold mb-7 mt-3 text-center">E-Token Generator</h2>

      <div className="p-5 font-semibold border w-fit m-auto shadow-lg mb-2">
        <label htmlFor="phone" className="mb-2 block font-semibold">Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md mb-4"
        />
        <label htmlFor="otp" className="mb-2 block">OTP:</label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md mb-4"
        />
        <label htmlFor="date" className="mb-2 block">Date and Time:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          className="border border-gray-300 px-3 py-2 rounded-md mb-8"
        />
        <br />
        <button
          onClick={handleGenerateToken}
          disabled={`tokenCount >= maxTokens || phoneNumber.trim() === '' || !(/^\d{6}$/.test(otp)) || selectedDate === null`}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${tokenCount >= maxTokens || phoneNumber.trim() === '' || !(/^\d{6}$/.test(otp)) || selectedDate === null ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {tokenCount >= maxTokens ? 'Limit Reached' : 'Generate Token'}
        </button>
      </div>

      <div className="mt-4 text-lg text-gray-600">
        <p>Total Tokens Generated: {tokenCount}</p>
        <p>Remaining Tokens: {maxTokens - tokenCount}</p>
      </div>
    </div>
  );
};


export default TokenGenerator;