import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

const AdminSidebar = () => {
  // const location = useLocation();
  const [activeLink, setActiveLink] = useState("/admin/");

  const handleSetActiveLink = (index) => {
    setActiveLink(index);
  };

  return (
    <div>
      {/* <div className="mt-11">
        <p className="text-4xl text-emerald-600 font-bold mx-auto text-center uppercase">
          Darwesh Group
        </p>
      </div> */}
      <div className="max-w-2xl mt-2">
        <aside className="w-64" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 font-bold">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin/"
                  className={`flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200 ${activeLink === "/admin/" ? "bg-emerald-400 text-white" : ""}`}
                  onClick={() => handleSetActiveLink("/admin/")}
                >
                  Admin Dashbord
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/users"
                  className={`flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200 ${activeLink === "/admin/users" ? "bg-emerald-400 text-white" : ""}`}
                  onClick={() => handleSetActiveLink("/admin/users")}
                >
                  User Management
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/token"
                  className={`flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200 ${activeLink === "/admin/token" ? "bg-emerald-400 text-white" : ""}`}
                  onClick={() => handleSetActiveLink("/admin/token")}
                >
                  Token Generator
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`flex items-center py-2 px-3 rounded hover:bg-emerald-500 hover:text-white transition duration-200 ${activeLink === "/" ? "bg-emerald-400 text-white" : ""}`}
                  onClick={() => handleSetActiveLink("/")}
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