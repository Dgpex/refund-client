import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactUs() {
  return (
    <div class="container lg:pl-32 lg:pr-32 lg:pt-10 pt-5  ">
      <section class="mb-32">
        <div class="flex justify-center">
          <div class="text-center md:max-w-xl lg:max-w-3xl">
            <h2 class="mb-12 px-6 text-3xl font-bold">Contact us</h2>
          </div>
        </div>

        <div class="flex flex-wrap p-5">
          <form class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[2px] text-teal-700"
                htmlFor="exampleInput90"
              >
                Name
              </label>
              <input
                type="text"
                class="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Name"
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[2px] text-teal-700"
                htmlFor="exampleInput90"
              >
                Email
              </label>
              <input
                type="email"
                class="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Enter your email address"
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[2px] text-teal-700"
                htmlFor="exampleInput90"
              >
                Message
              </label>
              <textarea
                class="px-2 py-2 border rounded-[5px] w-full outline-none"
                name=""
                id=""
              ></textarea>
            </div>

            <button
              type="button"
              class="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
            >
              Send
            </button>
          </form>

          <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold">Technical support</p>
                    {/* <p class="text-neutral-500 ">support@example.com</p> */}
                    <p class="text-neutral-500 ">+1 234-567-89</p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <MdEmail className="text-2xl" />
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold ">Email</p>
                    <p class="text-neutral-500 ">darwesh@example.com</p>
                    {/* <p class="text-neutral-500 ">+1 234-567-89</p> */}
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <FaLocationDot className="text-2xl" />
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold ">Location</p>
                    <p class="text-neutral-500 ">
                      Near Toyota Showroom, OPP : RIMS Gate, Hydarabad Road,
                      Raichur. 584102.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold">Bug report</p>
                    <p class="text-neutral-500 ">bugs@example.com</p>
                    <p class="text-neutral-500">+1 234-567-89</p>
                  </div>
                </div> 
              </div>*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
