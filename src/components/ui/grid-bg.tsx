import React from "react";

export function GridBackgroundDemo() {
  return (
    <>
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
          Book Your Cab
        </p>
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute mt-15 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"> */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-100"
          >
            Phone
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="number"
              autoComplete="phone"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-100"
          >
            Phone
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="number"
              autoComplete="phone"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-100"
          >
            Phone
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="number"
              autoComplete="phone"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-100"
          >
            Phone
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="number"
              autoComplete="phone"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-100"
          >
            Phone
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="number"
              autoComplete="phone"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-100"
          >
            Phone
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="number"
              autoComplete="phone"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-100"
          >
            Phone
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="number"
              autoComplete="phone"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* </p> */}
      </div>
    </>
  );
}
