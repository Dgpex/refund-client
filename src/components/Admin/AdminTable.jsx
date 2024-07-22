import React from "react";
import {Link} from 'react-router-dom';

function AdminTable() {
  return (
    <div className="max-w-3xl mx-auto p-5 border rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-center mb-5">Application Details</h2>
        <div className="flex justify-between my-3 border-y border-black py-3 ">
          <tr>
            <th>Application No :</th>
            <td>102030</td>
          </tr>
          <tr>
            <th>Applied Date :</th>
            <td>12/07/2024</td>
          </tr>
        </div>
      </div>
      <div className="mb-4 border-b border-black pb-3">
        <div className="mb-2">
          <tr>
            <th>Bond Reference No :</th>
            <td>102030</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>Mobile No :</th>
            <td>1234567890</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>Name :</th>
            <td>Shaheen</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>Verification Status :</th>
            <td>Yes</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>Aadhar No :</th>
            <td>102030</td>
          </tr>
        </div>
      </div>
      <div className="mb-4 border-b border-black pb-4" >
        <div  className="mb-2">
          <tr>
            <th>Invested Amount :</th>
            <td>100000</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>Invested Date:</th>
            <td>02/03/2024</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>Monthly Recived Amt :</th>
            <td>4000</td>
          </tr>
        </div>
      </div>
      <div className="mb-4 border-b border-black pb-3">
        <div className="mb-2">
          <tr>
            <th>Agent Name :</th>
            <td>Akash</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>Agent Phone No :</th>
            <td>0123456788</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>Sub Agent Name :</th>
            <td>Xyz</td>
          </tr>
        </div>
      </div>
      <div className="mb-4 border-b border-black pb-3">
        <div className="mb-2">
          <tr>
            <th>Father Name :</th>
            <td>ABCD</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>Address :</th>
            <td>1st Cross Main road 9th block Jayanagar, Bangaluru-560021</td>
          </tr>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-center">Bank Details:</h3>
        <div className="mb-2">
          <tr>
            <th>Account No :</th>
            <td>1020302010</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>IFSC Code :</th>
            <td>SBIN002345</td>
          </tr>
        </div>
        <div className="mb-2">
          <tr>
            <th>Name as per Bond :</th>
            <td>102030</td>
          </tr>
        </div>
        {/* <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Save Comment
        </button> */}
      </div>
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">
          Approve
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md">
          Reject
        </button>
        <Link to={"/"}  className="px-4 py-2 bg-gray-500 text-white rounded-md">
          Close
        </Link>
      </div>
    </div>
  );
}

export default AdminTable;