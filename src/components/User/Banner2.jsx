import React from "react";
import Banner from "/Banner3.png";

function Banner2() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#E1E7F74D]">
      <div className="lg:w-2/4 mt-2 lg:p-4 flex flex-col justify-center items-center h-auto lg:h-screen relative">
        <div className="lg:ml-10">
          <a className="font-bold text-3xl lg:ml-3 font-serif">
            Darwesh Group's <br />
            <span className="lg:ml-3">Online Investment Claim Portal!</span>
          </a>
          <br />
          <div className="text-left mt-5 p-4">
            <a>
              Since its formation, the Darwesh Group has taken significant steps to ensure the protection of investor interests and strengthen the cooperative movement. To address grievances from genuine investors regarding their legitimate refunds, the Darwesh Group has developed a transparent and efficient refund claim process. This initiative aims to uphold the trust and confidence of investors by providing a streamlined and accessible platform for submitting and processing refund claims.
            </a>
            <br />
            <br />
            <a className="mt-8">
              To facilitate this process, an online portal has been created for the submission of refund claims. This user-friendly portal allows investors to submit their claims digitally, ensuring a smooth and transparent process. The portal is designed to be efficient, reducing the need for physical visits and lengthy paperwork, thus making it easier for investors to get their claims processed in a timely manner.
            </a>
            <div className="flex justify-start items-start w-full">
              <a
                href="/how-to-apply"
                className="mt-4 px-4 py-2 overflow-hidden font-medium text-emerald-500 border-2 border-emerald-500 shadow-md group"
              >
                How To Apply?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/4 mt-2 flex justify-center lg:justify-end items-center">
        <img src={Banner} alt="" className="w-full lg:w-96 lg:mt-28 lg:ml-28 object-cover" />
      </div>
    </div>
  );
}

export default Banner2;
