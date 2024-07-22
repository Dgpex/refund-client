import React, { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const dummyData = [
  {
    title: "Earnings",
    image: "https://via.placeholder.com/50",
    start: 875.039,
    end: 0,
    prefix: "₹",
    description: "Previous earnings →",
    url: "/profile/previous-earnings",
  },
  {
    title: "Properties",
    image: "https://via.placeholder.com/50", 
    start: -10,
    end: 5, 
    prefix: "",
    description: "Properties owned →",
    url: "/profile/properties-owned",
  },
  {
    title: "Investments",
    image: "https://via.placeholder.com/50",
    start: 1,
    end: 0,
    prefix: "",
    description: "Investments made →",
  },
];

// Dummy data for properties
const dummyProperties = [
  {
    name: "amruth",
    phone_no: "987576212",
    ref_no: "562364",
    created_at: new Date(),
    payment_structure: [
      {
        next_payment: new Date(),
        amount: 2354,
        status: "Select",
        verify: "Yes",
      },
      {
        next_payment: new Date(),
        amount: 2452,
        status: "Select",
        verify: "No",
      },
      {
        next_payment: new Date(),
        amount: 3245,
        status: "Select",
        verify: "Yes",
      },
    ],
  },
  {
    name: "shaheen",
    phone_no: "98746612",
    ref_no: "562364",
    created_at: new Date(),
    payment_structure: [
      {
        next_payment: new Date(),
        amount: 2365,
        status: "Select",
        verify: "Yes",
      },
      {
        next_payment: new Date(),
        amount: 1245,
        status: "Select",
        verify: "No",
      },
      {
        next_payment: new Date(),
        amount: 5264,
        status: "Select",
        verify: "No",
      },
    ],
  },
];

function AdminInside() {
  const [properties, setProperties] = useState(dummyProperties);
  const [expandedRows, setExpandedRows] = useState({});
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState({});

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleStatusChange = (propertyIndex, paymentIndex, newStatus) => {
    const updatedProperties = [...properties];
    updatedProperties[propertyIndex].payment_structure[paymentIndex].status =
      newStatus;
    setProperties(updatedProperties);
    toggleDropdown(null); // Close dropdown after status change
  };

  const TableHeader = () => (
    <thead className="text-xs text-gray-500 uppercase bg-gray-200">
      <tr>
        <th scope="col" className="px-6 py-3">
          SI NO
        </th>
        <th scope="col" className="px-6 py-3">
          Phone No
        </th>
        <th scope="col" className="px-6 py-3">
          Form Applied Date
        </th>
        <th scope="col" className="px-6 py-3">
          View
        </th>
      </tr>
    </thead>
  );

  return (
    <div className="w-full justify-center">
      <div >
        <h2 className="text-5xl font-bold text-center py-10 bg-emerald-400">
          Admin Dashboard
        </h2>
        <div className="overflow-x-auto bg-white rounded-md shadow-lg">
          <table className="w-full text-sm text-left rtl:text-right">
            <TableHeader />
            <tbody>
              {properties.map((property, propertyIndex) => (
                <React.Fragment key={propertyIndex}>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">{propertyIndex + 1}</td>
                    <td className="px-6 py-4 font-bold text-blue-500">
                      {property.phone_no}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 ">
                        {new Date(property.created_at).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="">
                      <button
                        className="font-bold text-2xl ml-8"
                        onClick={() => toggleRow(propertyIndex)}
                      >
                        {expandedRows[propertyIndex] ? (
                          <HiOutlineChevronUp />
                        ) : (
                          <HiOutlineChevronDown />
                        )}
                      </button>
                    </td>
                  </tr>
                  {expandedRows[propertyIndex] && (
                    <tr className="bg-gray-100 border-b">
                      <td colSpan="7">
                        <div className="expandableContent expanded">
                          <table className="w-full text-sm text-left rtl:text-right">
                            <tbody>
                              <tr>
                                <td colSpan="7" className="px-6">
                                  <h3 className="text-lg font-bold mb-3 ml-3">
                                    Applications
                                  </h3>
                                  <div className="max-h-48 overflow-y-auto">
                                    <table className="w-full text-sm text-left rtl:text-right">
                                      <thead className="text-xs text-gray-500 uppercase bg-gray-200">
                                        <tr>
                                          <th scope="col" className="px-6 py-3">
                                            No.
                                          </th>
                                          <th scope="col" className="px-6 py-3">
                                            Name
                                          </th>
                                          <th scope="col" className="px-6 py-3">
                                            Bond Reference
                                          </th>
                                          <th scope="col" className="px-6 py-3">
                                            Invested Amt
                                          </th>
                                          <th scope="col" className="px-6 py-3">
                                            Verified
                                          </th>
                                          <th scope="col" className="px-6 py-3">
                                            View Form
                                          </th>
                                          <th scope="col" className="px-6 py-3">
                                            Status
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {property.payment_structure.map(
                                          (payment, paymentIndex) => (
                                            <tr key={paymentIndex}>
                                              <td className="px-6 py-4">
                                                {paymentIndex + 1}
                                              </td>
                                              <td className="px-6 py-4">
                                                {property.name}
                                              </td>
                                              <td className="px-12 py-4">
                                                {property.ref_no}
                                              </td>
                                              <td className="px-12 py-4">
                                                {payment.amount}
                                              </td>
                                              <td className="px-7 py-4">
                                                <span
                                                  className={`px-2 font-bold ${
                                                    payment.verify === "Yes"
                                                      ? "text-green-500"
                                                      : "text-red-500"
                                                  }`}
                                                >
                                                  {payment.verify}
                                                </span>
                                              </td>
                                              <td className="px-11 py-4 text-blue-400 font-bold cursor-pointer">
                                                <Link to={"/table"}>View</Link>
                                              </td>
                                              <td>
                                                <div className="relative">
                                                  <button
                                                    className={`flex text-center items-center w-32 space-x-1 text-white rounded-lg px-4 py-2 ${
                                                      payment.status ===
                                                      "Accepted"
                                                        ? "bg-green-600"
                                                        : payment.status ===
                                                          "Processing"
                                                        ? "bg-yellow-500"
                                                        : payment.status ===
                                                          "Rejected"
                                                        ? "bg-red-600"
                                                        : "bg-blue-500"
                                                    }`}
                                                    onClick={() =>
                                                      toggleDropdown(
                                                        paymentIndex
                                                      )
                                                    }
                                                  >
                                                    <span>
                                                      {payment.status}
                                                    </span>
                                                    {openDropdownIndex ===
                                                    paymentIndex ? (
                                                      <HiOutlineChevronUp className="w-4 h-4" />
                                                    ) : (
                                                      <HiOutlineChevronDown className="w-4 h-4" />
                                                    )}
                                                  </button>
                                                  {openDropdownIndex ===
                                                    paymentIndex && (
                                                    <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
                                                      <ul className="py-1">
                                                        {[
                                                          "Accepted",
                                                          "Processing",
                                                          "Rejected",
                                                        ].map(
                                                          (status, index) => (
                                                            <li
                                                              key={index}
                                                              className="cursor-pointer select-none relative py-2 pl-3 pr-9"
                                                              onClick={() =>
                                                                handleStatusChange(
                                                                  propertyIndex,
                                                                  paymentIndex,
                                                                  status
                                                                )
                                                              }
                                                            >
                                                              <span
                                                                className={`${
                                                                  payment.status ===
                                                                  status
                                                                    ? "font-semibold"
                                                                    : "font-normal"
                                                                } block truncate`}
                                                              >
                                                                {status}
                                                              </span>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    </div>
                                                  )}
                                                </div>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminInside;