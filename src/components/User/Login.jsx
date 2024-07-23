import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearToken, setToken } from '../../authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const api = process.env.REACT_APP_API_URL;

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(`${api}/user/login`, { phone });
      if (response.status === 200) {
        setIsOtpSent(true);
        setMessage(response.data.msg);
        setMessageType('success');
        
      } else {
        setMessage(response.data.msg || 'Failed to send OTP');
        setMessageType('error');
      }
    } catch (error) {
      console.log(error.response.data);
      console.error('Error sending OTP:', error);
      setMessage('Error sending OTP');
      setMessageType('error');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(`${api}/user/verify`, { phone, otp });
      if (response.status === 200) {
        setMessage('Login successful');
        setMessageType('success');
        dispatch(setToken(response.data.token));
        navigate('/');
      } else {
        setMessage(response.data.msg || 'Invalid OTP');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setMessage('Error verifying OTP');
      setMessageType('error');
    }
  };




  return (
    <div className="h-[500px] mt-20">
      <div className="flex items-center justify-center mt-8 w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-2xl font-bold text-gray-600 text-center">Login</p>
            {message && (
              <p className={`text-center ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="number"
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            {isOtpSent && (
              <div className="mt-4 flex flex-col justify-between">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    OTP
                  </label>
                </div>
                <input
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  type="password"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}
            <div className="mt-8">
              {!isOtpSent ? (
                <button
                  className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
                  onClick={handleSendOtp}
                >
                  Send OTP
                </button>
              ) : (
                <button
                  className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
