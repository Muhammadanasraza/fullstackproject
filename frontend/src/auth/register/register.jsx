'use client'

import { useState, FormEvent } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="fom">
      <div
        className="min-h-screen bg-no-repeat bg-cover text-gray-900 flex justify-center"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/table-with-plate-mug_23-2147680122.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid")',
        }}
      >
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 rounded-l-lg  bg-indigo-100 text-center hidden lg:flex">
            <div
              className="rounded-l-lg  bg-center w-full  bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://img.freepik.com/free-vector/telecommuting-concept-with-man-home_23-2148488959.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid")',
              }}
            ></div>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div></div>
            <div className=" flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
              <form onSubmit={handleSubmit} className="w-full flex-1 mt-5">
                <div className="mx-auto flex flex-col my-5 gap-8 max-w-xs">
                  <input
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                    id="fullName"
                    placeholder="Enter your Full Name"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />

                  <input

                    className="w-full px-4 py-2  text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                    id="email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />

                  <input
                   className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                    id="phoneNumber"
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />

                  <input
                    className="w-full px-4 py-2  text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                    id="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />

                  <button type="submit" className="mt-3 tracking-wide font-semibold bg-yellow-300 text-black-100 w-full py-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <div className=" border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      If you have already an account-
                      <a href="login" className=" text-blue-900">Login</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

