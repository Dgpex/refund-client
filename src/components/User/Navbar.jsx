import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { clearToken } from '../../authSlice'; // Import the clearToken action

function Navbar({showForm}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Use useSelector to get the token from Redux state
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = !!token; // Check if token is present



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(clearToken()); 
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  return (
    <div className="mt-1">
      <nav className="relative px-2 py-4 flex justify-between items-center lg:mx-12 bg-white">
        <Link className="lg:text-2xl font-bold leading-none" to="/">
          <h1 className="text-green-700">DARWESH GROUP</h1>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="navbar-burger ml-10 flex items-center text-blue-600 p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:gap-5 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          {showForm &&
          <li>
            <Link
              to="/claims"
              className="relative inline-flex items-center px-5 py-2 overflow-hidden text-sm font-medium text-emerald-400 border-2 border-emerald-400 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-emerald-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-5 h-5 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
              <span className="relative">Claims</span>
            </Link>
          </li>}
          <li>
            <Link
              to="/track"
              className="relative inline-flex items-center px-6 py-2 overflow-hidden text-sm font-medium text-emerald-400 border-2 border-emerald-400 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-emerald-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-5 h-5 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
              <span className="relative">Track</span>
            </Link>
          </li>
          <li>
            <Link
              to="/how-to-apply"
              className="relative inline-flex items-center px-5 py-2 overflow-hidden text-sm font-medium text-emerald-400 border-2 border-emerald-400 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-emerald-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-5 h-5 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
              <span className="relative">How to Apply?</span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-8 lg:ml-auto">
          <a
            className="hidden lg:flex items-center text-emerald-500 gap-2"
            href="tel:+911234567890"
          >
            <MdOutlineLocalPhone />
            +91 1234567890
          </a>
          {!isLoggedIn ? (
            <Link
              className="hidden lg:inline-block lg:ml-3 py-3 text-[14px] px-4 border text-center font-bold bg-emerald-400 text-white rounded-xl"
              to="/login"
            >
              Register/Log In
            </Link>
          ) : (
            <button
              className="hidden lg:inline-block lg:ml-3 py-3 text-[14px] px-4 border text-center font-bold bg-red-400 text-white rounded-xl"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}
        </div>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "block" : "hidden"} lg:hidden`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link
              className="mr-auto text-xl font-bold text-green-700 leading-none"
              to="/"
            >
              DARWESH GROUP
            </Link>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleMenu}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul>
            <li className="mb-1">
              <Link
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/claims"
              >
                Claims
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/track"
              >
                Track
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="mt-auto">
            <div className="pt-6">
              {!isLoggedIn ? (
                <Link
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
                  to="/login"
                >
                  Sign In
                </Link>
              ) : (
                <button
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
