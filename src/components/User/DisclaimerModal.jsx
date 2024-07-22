import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./DisclaimerModal.css"

function DisclaimerModal({setModal}) {
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className=" fixed h-screen scroll overflow-y-auto bg-black bg-opacity-45  flex justify-center items-center   top-0 right-0 left-0 z-50  w-full md:inset-0  max-h-full"
    >
      <div className="relative  p-4 w-3/4 lg:w-2/4 max-h-full">
        <div className="relative  bg-sky-50 rounded-lg shadow">
          <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t text-center dark:border-gray-600">
            <h3 className=" text-2xl font-bold">
                DISCLAIMER 
            </h3>
            {/* <IoIosCloseCircle className="text-3xl absolute right-8 hover:text-gray-600 transition-colors duration-200" onClick={()=>setModal(false)} /> */}

          </div>

          <div className="p-4 md:p-5 space-y-4">
            <span className=" font-bold text-lg">Read Carefully Before Submitting</span>
            <ol className=" list-decimal pt-1  p-5 text-lg">
              <li className=" font-bold">
                Accuracy of Information:{" "}
                <span className=" font-normal">
                  Please provide all details correctly. Incorrect or incomplete
                  information will result in the rejection of the form or a
                  delay in the refund process.
                </span>
              </li>
              <li className=" font-bold">
                Application Limit:{" "}
                <span className="font-normal">
                  From a single mobile number, you can submit only up to three
                  applications. Ensure that your full name and Aadhaar card
                  details are accurate and match the bond agreement.
                </span>
              </li>
              <li className=" font-bold">
                Image Quality:
                <span className="font-normal">
                  {" "}
                  Do not upload blurry or unclear images of the bond agreement.
                  Poor quality images may lead to the rejection of the
                  application or delays in processing.
                </span>
              </li>
              <li className=" font-bold">
                Investment Details:{" "}
                <span className="font-normal">
                  Enter the correct invested amount and date as per the bond
                  agreement. Incorrect information will result in the rejection
                  of the application.
                </span>
              </li>
              <li className=" font-bold">
                Verification Process:{" "}
                <span className="font-normal">
                  All claims are subject to a verification process. Any
                  discrepancies found during verification may result in the
                  rejection of your claim.
                </span>
              </li>
              <li className=" font-bold">
                Confidentiality:{" "}
                <span className="font-normal">
                  {" "}
                  Keep your login credentials confidential. Darwesh Group is not
                  responsible for any unauthorized access to your account.
                </span>
              </li>
              <li className=" font-bold">
                Contact Information:
                <span className="font-normal">
                  {" "}
                  Provide valid contact information. We will use this to
                  communicate any issues or updates regarding your claim.
                </span>
              </li>
              <li className=" font-bold">
                Legal Compliance:
                <span className="font-normal">
                  {" "}
                  All claims must comply with the applicable laws and
                  regulations. Non-compliance may result in the rejection of the
                  claim.
                </span>
              </li>
              <li className=" font-bold">
                Review Period:{" "}
                <span className="font-normal">
                  The review and processing period for claims may vary. Please
                  be patient and refrain from submitting multiple queries
                  regarding the status.
                </span>
              </li>
              <li className=" font-bold">
                Notification of Changes:{" "}
                <span className="font-normal">
                  Notify us immediately if there are any changes to the details
                  provided in your application.
                </span>
              </li>
            </ol>
          </div>
          <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="default-modal"
              type="button"
              className="text-white text-lg w-1/4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={()=>setModal(false)}
            >
              I Agree
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerModal;