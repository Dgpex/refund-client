import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <div className="mt-11">
        <p className="text-4xl text-emerald-600 font-bold mx-auto text-center uppercase">
          Darwesh Group
        </p>
      </div> */}
      <div className="max-w-2xl mt-2 ">
        <aside className="w-64" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 font-bold">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin/"
                  className="flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200  bg-emerald-400"
                >
                  Admin Dashbord
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/token"
                  className="flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200 "
                >
                 Token Generator
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200"
                >
                  All Applications
                </Link>
              </li>
              {/* <li>
              <Link
                to="/"
                className="flex items-center py-2 px-3 rounded hover:bg-gray-500 hover:text-white transition duration-200"
              >
                Verified-yes
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center py-2 px-3 rounded hover:bg-gray-500 hover:text-white transition duration-200"
              >
                Verified-No
              </Link>
            </li> */}
              <li>
                <Link
                  to="/"
                  className="flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200"
                >
                  Approved-Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200"
                >
                  Rejected-Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200"
                >
                  User Management
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200"
                >
                  <TbLogout className="mr-2" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AdminSidebar;
