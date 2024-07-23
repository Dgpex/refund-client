import React from "react";
import { IoLogInOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";

function HowToApply() {
  return (
    <div className="lg:pl-32 lg:pr-32 pt-10 p-4">
      <div className=" lg:bg-[#E1E7F74D] lg:pb-10">
        <div className="lg:pl-20 lg:pr-20 lg:pt-8">
          <div className="text-start lg:-ml-8">
            <a className=" text-3xl font-bold text-emerald-600">
              Steps for Submitting a Refund Claim
            </a>
          </div>
          <ol class="relative mt-10 border-s border-gray-200 ">
            <li class="mb-10 ms-4 ">
              <IoLogInOutline className=" absolute lg:w-14 lg:h-14 w-8 h-8 text-white bg-emerald-500 rounded-full p-2 mt-1.5 lg:-start-7 -start-1 border border-white " />
              <div className="ml-12">
                <time class="mb-1 text-xl font-normal leading-none ">
                  Step 1
                </time>
                <h3 class="text-lg font-semibold text-gray-900 ">
                  Access the Portal:
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 ">
                  Visit the Darwesh Group Claim Portal and log in with your
                  credentials.
                </p>
              </div>
            </li>
            <li class="mb-10 ms-4">
              <TiTickOutline className=" absolute lg:w-14 lg:h-14 w-8 h-8 text-white bg-emerald-500 rounded-full p-2 mt-1.5 lg:-start-7 -start-1 border border-white " />
              <div className="ml-12">
                <time class="mb-1 text-xl font-normal leading-none ">
                  Step 2
                </time>
                <h3 class="text-lg font-semibold text-gray-900 ">
                  Submit a Claim:{" "}
                </h3>
                <p class="text-base font-normal text-gray-500 ">
                  Fill out the online application form and upload the necessary
                  documents, including proof of identity and claim details. Make
                  sure all information is accurate and complete to avoid delays.
                </p>
              </div>
            </li>
            <li class="mb-10 ms-4">
              <HiOutlineDocumentMagnifyingGlass className=" absolute lg:w-14 lg:h-14 w-8 h-8 text-white bg-emerald-500 rounded-full p-2 mt-1.5 lg:-start-7 -start-1 border border-white " />
              <div className="ml-12">
                <time class="mb-1 text-xl font-normal leading-none     ">
                  Step 3{" "}
                </time>
                <h3 class="text-lg font-semibold text-gray-900 ">
                  Verification:{" "}
                </h3>
                <p class="text-base font-normal text-gray-500 ">
                  Claims will be verified by the Darwesh Group within 30 days of
                  submission. The verification team in Raichur will review up to
                  30 claims daily, ensuring each claim is thoroughly checked.
                </p>
              </div>
            </li>
            <li class="mb-10 ms-4">
              <IoIosNotifications className=" absolute lg:w-14 lg:h-14 w-8 h-8 text-white bg-emerald-500 rounded-full p-2 mt-1.5 lg:-start-7 -start-1 border border-white " />
              <div className="ml-12">
                <time class="mb-1 text-xl font-normal leading-none     ">
                  Step 4{" "}
                </time>
                <h3 class="text-lg font-semibold text-gray-900 ">
                  Notification:{" "}
                </h3>
                <p class="text-base font-normal text-gray-500 ">
                  Investors will receive a decision via SMS or through the
                  portal within 45 days of filing the claim. This communication
                  will include details on the status of the claim and any
                  further actions required.
                </p>
              </div>
            </li>
            <li class="mb-10 ms-4">
              <MdOutlinePayments className=" absolute lg:w-14 lg:h-14 w-8 h-8 text-white bg-emerald-500 rounded-full p-2 mt-1.5 lg:-start-7 -start-1 border border-white " />
              <div className="ml-12">
                <time class="mb-1 text-xl font-normal leading-none     ">
                  Step 5{" "}
                </time>
                <h3 class="text-lg font-semibold text-gray-900 ">Payment: </h3>
                <p class="text-base font-normal text-gray-500 ">
                  Verified claims will be processed promptly, and refunds will
                  be directly deposited into the investor's bank account. The
                  payment details, along with the customer’s picture, will be
                  updated in the backend system for transparency and
                  record-keeping.{" "}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default HowToApply;
