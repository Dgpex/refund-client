import React from "react";
import Banner1 from "/Banner1.jpg"; // Ensure this path is correct
function Banner() {
  return (
    <div className="relative mb-40 text-center flex items-center justify-center flex-col">
      <div
        className="absolute inset-0 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner1})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-65"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 p-4 mt-[5%]">
        <h3 className="text-lg font-bold  text-emerald-300 lg:mt-16 mt-4">
          WELCOME TO DARWESH GROUP
        </h3>
       
        <h2 className="text-4xl font-bold text-white mt-2">
          "Your Investment is Safe with Us <br /> - Refund Assured"
        </h2>
        <p className="mt-4 font-semibold text-white">
          Our goal is to make the reclaiming process as simple and
          straightforward as possible for you.
          <br /> We aim to provide clear instructions and personalized support,
          ensuring your experience is smooth and hassle-free. <br />
          Our dedicated team is here to assist you, making the process efficient
          and stress-free. Your satisfaction is our top priority.
        </p>
        {/* <p className="mt-4 font-semibold text-white">
          Darwesh Group's Online Investment Claim Portal! <br /> Our goal is to
          provide you with a seamless and efficient way to manage your investment
          claims. <br /> Whether you’re filing a new claim or tracking the status of an
          existing one, our portal is designed to guide you every step of the way.
        </p> */}
        {/* <button className="bg-emerald-400 font-semibold rounded-md py-2 px-2 mt-4 text-white">Claim Now !</button> */}
        
        <a
          href="/claims"
          className="relative inline-flex items-center justify-center mt-4 p-4 px-6 py-3 overflow-hidden font-medium text-emerald-400 transition duration-300 ease-out border-2 border-emerald-400 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-emerald-400 group-hover:translate-x-0 ease">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex font-semibold items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Claim Now !
          </span>
          <span className="relative invisible">Claim Now !</span>
        </a>
      </div>
    </div>
  );
}

export default Banner;
