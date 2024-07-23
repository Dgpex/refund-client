import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { IoClose } from "react-icons/io5";

const TrackApplication = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [verificationType, setVerificationType] = useState("");
  const [bankDetails, setBankDetails] = useState({
    beneficiaryAccount: "",
    beneficiaryIFSC: "",
    beneficiaryMobile: "",
    beneficiaryName: "",
  });
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [requestId, setRequestId] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [payment, setPayment] = useState([]);
  const [selectedClaimId, setSelectedClaimId] = useState(""); // New state for selected claim ID
  const [otpSentMessage, setOtpSentMessage] = useState(""); // New state for OTP sent message

  const api = process.env.REACT_APP_API_HOST;
  const token = useSelector((state) => state.auth.token);

  const fetchUserClaims = async () => {
    try {
      const response = await axios.get(`${api}/api/claim/get-user-claims`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const claimsArray = response.data.claims;
      if (Array.isArray(claimsArray)) {
        setPayment(claimsArray);
      } else {
        setPayment([]);
      }
    } catch (error) {
      console.error("Error fetching user claims:", error);
    }
  };

  useEffect(() => {
    fetchUserClaims();
  }, [api, token]);

  const openModal = (content, claimId) => {
    setModalContent(content);
    setVerificationType(content);
    setSelectedClaimId(claimId); // Set the selected claim ID
    setIsModalOpen(true);
    setOtpSentMessage(""); // Clear OTP sent message when opening modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
    setVerificationType("");
    setErrorMessage("");
    setAadhaarNumber("");
    setRequestId("");
    setOtp("");
    setBankDetails({
      beneficiaryAccount: "",
      beneficiaryIFSC: "",
      beneficiaryMobile: "",
      beneficiaryName: "",
    });
    setSelectedClaimId(""); // Reset the selected claim ID
    setOtpSentMessage(""); // Clear OTP sent message
  };

  const handleBankVerify = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${api}/api/claim/bank-verification`,
        {
          claimId: selectedClaimId,
          ac_no: bankDetails.beneficiaryAccount,
          ifsc: bankDetails.beneficiaryIFSC,
          mobno: bankDetails.beneficiaryMobile,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        closeModal();
        fetchUserClaims();
        await Swal.fire({
          title: "Success!",
          text: "Verification Done!",
          icon: "success",
        });
      } else {
        setErrorMessage("Failed to verify Bank Account. Please try again.");
      }
    } catch (error) {
      console.error("Verification Error:", error);
      setErrorMessage(
        "An error occurred during verification. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleAadhaarVerify = async () => {
    setIsLoading(true);
    setErrorMessage(""); // Clear previous errors when starting Aadhaar verification
    try {
      const response = await axios.post(`${api}/api/claim/send-aadhar-otp`, {
        aadharNumber: aadhaarNumber,
      });
      if (response.status === 200) {
        setRequestId(response.data.requestId);
        setModalContent("Enter OTP");
        setOtpSentMessage(
          "OTP sent successfully. Please check your registered mobile number."
        );
      } else {
        setErrorMessage("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpVerify = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${api}/api/claim/verify-aadhar-otp`,
        {
          claimId: selectedClaimId,
          requestId,
          otp,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        closeModal();
        await Swal.fire({
          title: "Success!",
          text: "Verification Done!",
          icon: "success",
        });
        fetchUserClaims();
      } else {
        setErrorMessage("Failed to verify OTP. Please try again.");
      }
    } catch (error) {
      console.error("Verification Error:", error);
      setErrorMessage(
        "An error occurred during verification. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAadhaarInputChange = (e) => {
    setAadhaarNumber(e.target.value);
    setErrorMessage(""); // Clear error message when user starts typing
  };

  return (
    <div className="flex flex-col items-center min-h-screen mt-12 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Track Your Refund Application
      </h2>
      <div className="overflow-x-auto w-3/4">
        <table className="min-w-full bg-white border-collapse rounded-lg">
          <thead>
            <tr className="bg-emerald-500 text-white border">
              <th className="px-4 py-2">Serial No.</th>
              <th className="px-4 py-2">Aadhaar</th>
              <th className="px-4 py-2">Bank</th>
              <th className="px-4 py-2">Application Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(payment) &&
              payment.map((refund, index) => {
                return (
                  <tr key={index} className="border-b text-center">
                    <td className="px-4 py-2">{refund._id}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => {
                          if (!refund.aadharDetails?.isVerified) {
                            openModal("Aadhaar", refund._id);
                          }
                        }}
                        className={`px-3 py-1 text-white rounded-lg ${
                          refund.aadharDetails?.isVerified
                            ? "bg-green-600"
                            : "bg-red-500"
                        }`}
                      >
                        {refund.aadharDetails?.isVerified
                          ? "Verified"
                          : "Not Verified"}
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => {
                          if (!refund.bankDetails?.isVerified) {
                            openModal("Bank", refund._id);
                          }
                        }}
                        className={`px-2 py-1 text-white rounded-lg ${
                          refund.bankDetails?.isVerified
                            ? "bg-green-600"
                            : "bg-red-500"
                        }`}
                      >
                        {refund.bankDetails?.isVerified
                          ? "Verified"
                          : "Not Verified"}
                      </button>
                    </td>

                    <td className="px-4 py-2">{refund.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">
              {modalContent === "Aadhaar"
                ? "Aadhaar Verification"
                : modalContent === "Bank"
                ? "Bank Verification"
                : "Enter OTP"}
            </h2>
            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                <span className="block sm:inline">{errorMessage}</span>
              </div>
            )}
            {otpSentMessage && (
              <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4">
                <span className="block sm:inline">{otpSentMessage}</span>
              </div>
            )}
            {modalContent === "Aadhaar" && (
              <div className="relative p-4">
                <button
                  onClick={closeModal} // Add a function to handle the close action
                  className="absolute -top-8 right-2 text-gray-500 hover:text-gray-800"
                >
                  <IoClose />
                </button>
                <label
                  className="block mb-2 text-sm font-medium text-gray-700"
                  htmlFor="aadhaarNumber"
                >
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value)}
                  className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Aadhaar Number"
                />
                <button
                  onClick={handleAadhaarVerify}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-md w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending OTP..." : "Send OTP"}
                </button>
              </div>
            )}
            {modalContent === "Enter OTP" && (
              <div className="relative p-4">
                <button
                  onClick={closeModal} // Add a function to handle the close action
                  className="absolute -top-8 right-2 text-gray-500 hover:text-gray-800"
                >
                  <IoClose />
                </button>
                <label
                  className="block mb-2 text-sm font-medium text-gray-700"
                  htmlFor="otp"
                >
                  OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                  placeholder="Enter OTP"
                />
                <button
                  onClick={handleOtpVerify}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-md w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying OTP..." : "Verify OTP"}
                </button>
              </div>
            )}
            {modalContent === "Bank" && (
              <div className="relative p-4">
                <button
                  onClick={closeModal} // Add a function to handle the close action
                  className="absolute -top-8 right-2 text-gray-500 hover:text-gray-800"
                >
                  <IoClose />
                </button>

                <div>
                  <label
                    htmlFor="beneficiaryAccount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="beneficiaryAccount"
                    name="beneficiaryAccount"
                    value={bankDetails.beneficiaryAccount}
                    onChange={handleInputChange}
                    placeholder="Enter Account number"
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label
                    htmlFor="beneficiaryIFSC"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Beneficiary IFSC
                  </label>
                  <input
                    type="text"
                    id="beneficiaryIFSC"
                    name="beneficiaryIFSC"
                    value={bankDetails.beneficiaryIFSC}
                    onChange={handleInputChange}
                    placeholder="Enter IFSC Code"
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label
                    htmlFor="beneficiaryMobile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="beneficiaryMobile"
                    name="beneficiaryMobile"
                    value={bankDetails.beneficiaryMobile}
                    onChange={handleInputChange}
                    placeholder="Enter Mobile Number"
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <button
                  onClick={handleBankVerify}
                  className="bg-emerald-400 text-white px-4 py-2 w-full rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackApplication;
