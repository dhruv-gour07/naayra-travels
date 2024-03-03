"use client";
import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState({
    name: "",
    phone: "",
    passenger: "",
    startDestination: "",
    endDestination: "",
    date: "",
    time: "",
  });

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setText({
      ...text,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post("/api/contact", text);
      toast.success("Message sent successfully!");
      setText({
        name: "",
        phone: "",
        passenger: "",
        startDestination: "",
        endDestination: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.log("Error in sending data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      text.name.length > 0 &&
      text.phone.length > 0 &&
      text.date.length > 0 &&
      text.time.length > 0 &&
      text.passenger.length > 0 &&
      text.startDestination.length > 0 &&
      text.endDestination.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [text]);
  return (
    <>
      <div className="mx-7 my-24 sm:mx-56 sm:my-32 object-cover border-transparent rounded-3xl bg-slate-100 bg-opacity-30">
        <div className="flex min-h-full flex-1 flex-col justify-center px-4 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-2xl pt-10 md:text-5xl font-semibold italic font-mono text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-100 to-yellow-600 bg-opacity-50">
              Share Your Details <br />
            </h1>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-4 flex-col"
              onSubmit={handleSubmit}
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    value={text.name}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    autoComplete="name"
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
                    value={text.phone}
                    onChange={handleChange}
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
                  htmlFor="passenger"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Passengers
                </label>
                <div className="mt-2">
                  <input
                    id="passenger"
                    value={text.passenger}
                    onChange={handleChange}
                    name="passenger"
                    type="number"
                    autoComplete="passenger"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="startDestination"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Start Destination
                </label>
                <div className="mt-2">
                  <input
                    id="startDestination"
                    value={text.startDestination}
                    onChange={handleChange}
                    name="startDestination"
                    type="text"
                    autoComplete="startDestination"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="endDestination"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  End Destination
                </label>
                <div className="mt-2">
                  <input
                    id="endDestination"
                    value={text.endDestination}
                    onChange={handleChange}
                    name="endDestination"
                    type="text"
                    autoComplete="endDestination"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Date
                </label>
                <div className="mt-2">
                  <input
                    id="date"
                    value={text.date}
                    onChange={handleChange}
                    name="date"
                    type="date"
                    autoComplete="date"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Time
                </label>
                <div className="mt-2">
                  <input
                    id="time"
                    value={text.time}
                    onChange={handleChange}
                    name="time"
                    type="time"
                    autoComplete="time"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center mt-4 rounded-md bg-slate-700 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {buttonDisabled ? "Fill details properly" : "Send"}
                </button>
                <p>{isLoading ? "Sending..." : ""}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
