import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-3xl text-center">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Ac mattis
              <span className="dark:text-violet-400">senectus</span>erat
              pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to={"/login"}
                className="px-8 btn btn-secondary py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Log In
              </Link>
              <Link
                to={"/profile"}
                className="px-8 py-3 text-lg btn btn-secondary font-semibold border rounded dark:border-gray-100"
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=996&t=st=1665914700~exp=1665915300~hmac=c926b680758445d5a35a3e6ce2530c5b9000e1501fbce5745b7097520f730a1f"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
