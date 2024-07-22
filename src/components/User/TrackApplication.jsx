import React from "react";

const TrackApplication = () => {
  const payment = [
    {
      Name: "Shahin",
      BondReferenceNo: "123456789",
      PaymentStatus: "Confirmed",
    },
    {
      Name: "Shahin",
      BondReferenceNo: "123456789",
      PaymentStatus: "Processing",
    },
    {
      Name: "Shahin",
      BondReferenceNo: "123456789",
      PaymentStatus: "Rejected",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen mt-12 ">
      <h2 className="md:text-4xl text-2xl font-bold mb-4 mt-3 text-center md:ml-0 ml-40">
        Track Your Refund Application
      </h2>
      <div className="overflow-x-auto p-5 w-fit md:w-[1000px] h-full md:ml-0 ml-44">
        <table className="min-w-full bg-white border-collapse  rounded-lg justify-between">
          <thead>
            <tr className="bg-emerald-500 text-white border">
              <th className="md:px-10 py-4">Serial No.</th>
              <th className="md:px-10 py-4">Name</th>
              <th className="md:px-10 py-4">Bond Reference No</th>
              <th className="md:px-10 py-5">Application Status</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((refund, index) => (
              <tr key={index} className="border-b  text-center">
                <td className="px-10 py-3">{index + 1}</td>
                <td className="px-10 py-3">{refund.Name}</td>
                <td className="px-10 py-3">{refund.BondReferenceNo}</td>
                <td className="px-10 py-3">
                  <button
                    className={`px-4 py-2 w-28 text-white rounded-lg ${
                      refund.PaymentStatus === "Confirmed"
                        ? "bg-green-600"
                        : refund.PaymentStatus === "Processing"
                        ? "bg-yellow-500"
                        : refund.PaymentStatus === "Rejected"
                        ? "bg-red-600"
                        : ""
                    }`}
                  >
                    {refund.PaymentStatus}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackApplication;
