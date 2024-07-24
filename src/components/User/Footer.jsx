import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

function Footer({ showForm }) {
  return (
    <div>
      <hr />
      <footer class="relative z-10 lg:p-5 bg-white pb-10 pt-5 lg:pt-[50px]">
        <div class="container mx-auto">
          <div class="flex flex-wrap lg:gap-16">
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
                  <p class="text-base text-body-color mb-7">
                    Near Toyota Showroom, OPP : RIMS Gate, Hydarabad Road,
                    Raichur. 584102.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-1/2 lg:w-2/12">
              <div class="w-full mb-10 lg:p-0 p-5">
                <h4 class="text-lg font-bold mb-4">Get in touch </h4>
                <ul>
                  <li className="flex items-center gap-1 mt-5">
                    <MdEmail />
                    <a
                      href="mailto:darweshgroup.help@gmail.com"
                      className="flex items-center"
                    >
                      darweshgroup.help@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2 mt-6">
                    <MdOutlineLocalPhone />
                    <a
                      href="tel:+917835082074"
                      className="flex items-center text-sm font-medium "
                    >
                      +91 7835082074
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div class="w-full mb-10">
                <h4 class="text-lg font-bold text-dark mb-4">Quick Links</h4>
                <ul class="space-y-3">
                  <li>
                    <a
                      href="/claims"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary "
                    >
                      Claims{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/track"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary "
                    >
                      Track claims
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/contact"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary "
                    >
                      Contact Us{" "}
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div class="w-full mb-10">
                <h4 class="text-lg font-bold text-dark mb-4">Company </h4>
                <ul class="space-y-3">
                  <li>
                    <a
                      href="/privacy-policy"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary "
                    >
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary "
                    >
                      Terms & Conditions{" "}
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      class="inline-block text-base leading-loose text-body-color hover:text-primary "
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
