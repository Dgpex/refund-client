import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <hr />
      <footer class="relative z-10 lg:p-5 bg-white dark:bg-dark pb-10 pt-5 lg:pt-[50px]">
        <div class="container mx-auto">
          <div class="flex flex-wrap lg:gap-20">
            <div class="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div class="w-full mb-10 lg:ml-10">
                <a
                  href="#"
                  class="mb-6 text-green-600 text-xl font-bold inline-block"
                >
                  DARWESH GROUP
                </a>
                <div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot />

                    <a className="font-bold"> RAICHUR </a>
                  </div>
                  <p class="text-base text-body-color dark:text-dark-6 mb-7">
                    Near Toyota Showroom, OPP : RIMS Gate, Hydarabad Road,
                    Raichur. 584102.
                  </p>
                </div>
                {/* <p class="flex items-center text-sm font-medium text-dark dark:text-white">
                  <span class="mr-3 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_941_15626)">
                        <path
                          d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_15626">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <a href="tel:+911234568765">+91 1234568765</a>
                </p>
                <a href="mailto:example@example.com" className="flex gap-2 items-center mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                      fill="#000"
                    />
                  </svg>
                  example@example.com
                </a> */}
              </div>
            </div>

            <div class="w-full  sm:w-1/2 lg:w-2/12">
              <div class="w-full mb-10 lg:p-0 p-5">
                <h4 class="text-lg font-bold text-dark dark:text-white mb-4">
                  Get in touch{" "}
                </h4>
                <ul>
                  <li className="flex items-center gap-2 mt-3">
                    <MdEmail />
                    <a
                      href="mailto:example@example.com"
                      className="flex items-center"
                    >
                      example@example.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2 mt-3">
                    <MdOutlineLocalPhone />
                    <a
                      href="tel:+911234568765"
                      className="flex items-center text-sm font-medium text-dark dark:text-white"
                    >
                      +91 1234568765
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div class="w-full mb-10">
                <h4 class="text-lg font-bold text-dark dark:text-white mb-4">
                  Quick Links
                </h4>
                <ul class="space-y-3">
                  <li>
                    <a
                      href="/claims"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                    >
                      Claims{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/track"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                    >
                      Track claims
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/contact"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                    >
                      Contact Us{" "}
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div class="w-full mb-10">
                <h4 class="text-lg font-bold text-dark dark:text-white mb-4">
                  Company{" "}
                </h4>
                <ul class="space-y-3">
                  <li>
                    <a
                      href="/privacy-policy"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                    >
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                    >
                      Terms & Conditions{" "}
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                    >
                      How To Apply ?
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <a className="font-bold">Darwesh Group Claim Portal</a>
          <br />
          <a className="font-sans font-semibold">
          Incorporated with: M/s LAPHRENIC (OPC) PVT LTD
          </a>
        </div>
        <hr />
        <div className="text-center mt-2 p-5">
          <a className=" font-semibold">Disclaimer</a>
          <br />
          <a className="font-thin mt-1 text-[14px]">
            The Darwesh Group Claim Portal is intended for the exclusive use of
            authorized users for the submission and processing of claims related
            to Darwesh Group services and products. All information provided
            within this portal is managed by the Legal and Fund Manager
            Department to ensure accuracy and confidentiality. By accessing this
            portal, users agree to comply with all relevant policies and
            procedures. Unauthorized use, distribution, or disclosure of
            information contained within this portal is strictly prohibited and
            may result in legal action. Darwesh Group is not responsible for any
            errors or omissions in the information provided by users. Users are
            encouraged to verify the accuracy of their submissions. The Darwesh
            Group reserves the right to modify, suspend, or discontinue the
            portal at any time without prior notice. For any questions or
            concerns, please contact the Legal and Fund Manager Department
            directly.
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
