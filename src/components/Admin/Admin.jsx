import { useState } from "react";
import AdminInside from "./AdminInside";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminTable from "./AdminTable";
import AdminSidebar from "./AdminSidebar";
import TokenGenerator from "./TokenGenerator";

function Admin() {
 

  return (
    <>
      <div className="flex  ">
        <AdminSidebar />
        <div className="w-full max-w-[1300px]  m-2 p-3">
          
          <Routes>
            <Route path="/" element={<AdminInside />} />
            <Route path="/table" element={<AdminTable />} />
            <Route path="/token" element={<TokenGenerator />} />
          </Routes>
       
        </div>
      </div>
    </>
  );
}

export default Admin;