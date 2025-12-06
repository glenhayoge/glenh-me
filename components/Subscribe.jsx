import React, { useState } from "react";
export default function Subscribe() {
  const [openModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!openModal);
  };
  return (
    <div className="my-10">
      <div className="p-6 rounded text-center overflow-hidden">
        <h3 className="mb-2 text-xl font-bold sm:text-2xl">Newsletter</h3>
        <p className="mb-6 text-sm">
          Subscribe and be notified when new articles & stuff are posted here. I
          won't spam or publish your email addresses. Unsubscribe anytime.
        </p>
        <div href="/about" className="mb-10">
          <button
            onClick={handleModal}
            type="button"
            className="py-2 px-6 outline outline-1 font-bold hover:outline-2 rounded-full text-xs hover:text-cyan-700 dark:hover:text-cyan-700"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      {openModal && (
        <div className="fixed z-100 top-0 left-0 w-full dark:bg-black bg-white h-full flex justify-center items-center">
          <div className="max-w-[480px] border border-gray-600 bg-gray-100 dark:bg-black px-4 shadow-lg py-4 rounded-md">
            <div className="flex justify-between items-right">
              <button
                type="button"
                className="h-6 px-1 uppercase rounded-full items-right text-right bg-gray-700 dark:bg-yellow-400 text-white dark:text-black"
                onClick={handleModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x w-4 h-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h2 className="text-md uppercase font-medium  dark:text-gray-400 text-gray-900 text-center  px-4 ">
              Subscribe to My Newsletter
            </h2>
            <p className="text-xs mb-4 text-gray-500 dark:text-gray-600 text-center">
              I pinky promise not to spam or publish your email addresses.
            </p>
            <div>
              <label
                for="price"
                className="block text-sm font-medium leading-6 dark:text-gray-400 text-gray-900"
              >
                Email Address
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">@</span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Type Your Email Address"
                />
              </div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                className="h-8 px-2 text-xs tracking-wider uppercase rounded-md bg-gray-700 dark:bg-yellow-400 text-white dark:text-black"
                onClick={handleModal}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
