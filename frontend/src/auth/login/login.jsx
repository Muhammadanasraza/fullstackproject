import React from "react";
import { auth, provider, signInWithPopup } from "../utils/authutils";

const Login = () => {

  const googleLogin = () => {

    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if (result) {
        window.location.href = "/";
      }
    });
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
              className=" rounded-l-lg bg-center w-full  bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://img.freepik.com/free-vector/telecommuting-concept-with-man-home_23-2148488959.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid")',
              }}
            ></div>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div></div>
            <div className="mt-6 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
              <div className="w-full flex-1 mt-6">
                <div className="mx-auto gap-4 flex flex-col  max-w-xs">
                  <div className="gap-10 flex flex-col my-5">
                    <input
                      className="w-full px-4 py-2  text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                      id="email"
                      label="Email"
                      placeholder="Enter your email"
                      type="email"
                      value=''
                    />

                    <input
                      className="w-full px-4 py-2  text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                      id="password"
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      value=''
                    />
                  </div>
                  <div>
                    <button className="mt-5 tracking-wide font-semibold bg-yellow-300 text-black-100 w-full py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
                      <span className="ml-3">Sign In</span>
                    </button>
                  </div>
                  <p className=" text-center">
                    Don't have an account?{" "}
                    <a href="register" className="text-sm text-blue-600 ">
                      Sign Up
                    </a>
                  </p>
                  <div className=" border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      Or sign in with e-mail
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <button
                      className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                      onClick={() => {
                        googleLogin();
                      }}
                    >
                      <div className="bg-white p-2 rounded-full">
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                          <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4"
                          />
                          <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853"
                          />
                          <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04"
                          />
                          <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335"
                          />
                        </svg>
                      </div>
                      <span className="ml-4">Sign In with Google</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
