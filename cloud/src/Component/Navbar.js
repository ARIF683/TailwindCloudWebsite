import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="w-screen h-[80px] z-10 fixed ">
        <div className="flex items-center  justify-between bg-zinc-200 px-2  mx-auto py-5 shadow-lg w-full h-full ">
          <div className="flex items-center ">
            <h1 className="text-3xl font-bold pr-5 sm:text-4xl ">Brand.</h1>
            <div className="hidden md:block ">
              <a className="pr-4 text-lg" href="#">
                Home
              </a>

              <a className="pr-4 text-lg " href="#">
                About
              </a>

              <a className="pr-4 text-lg" href="#">
                Pricing
              </a>

              <a className="pr-4 text-lg " href="#">
                Platform
              </a>

              <a className="pr-4 text-lg " href="#">
                Community
              </a>
            </div>
          </div>
          <div className="space-x-5 hidden md:flex  text-lg  ">
            <button className = "text-indigo-600 ">
              <a href="#">Sign Up</a>
            </button>
            <button className="bg-indigo-600 hover:bg-transparent hover:text-indigo-600  rounded-md px-5 py-2 text-white ">
              <a href="#">Sign In</a>
            </button>
          </div>

          <div
            onClick={() => setToggle(!toggle)}
            className="md:hidden text-3xl "
          >
            <ion-icon
              className="text-black "
              name={toggle ? "close" : "menu"}
            ></ion-icon>
          </div>
        </div>
        <div onClick = {() => setToggle(!toggle)}
          className={`rounded-xl py-5  px-4 md:hidden flex flex-col absolute text-lg bg-zinc-200 ${
            toggle ? "top-[90px]" : "top-[-500px]"
          } text-center  w-full transition-all duration-500 ease-in `}
        >
          <a className="border-b-2 border-zinc-300 w-full p-3 " href="#">
            Home
          </a>
          <a className="border-b-2 border-zinc-300 w-full p-3 " href="#">
            About
          </a>
          <a className="border-b-2 border-zinc-300 w-full p-3 " href="#">
            Support
          </a>
          <a className="border-b-2 border-zinc-300 w-full p-3 " href="#">
            Pricing
          </a>
          <a className="border-b-2 border-zinc-300 w-full p-3 " href="#">
            Platform
          </a>

          <button className="bg-transparent text-indigo-600 border border-indigo-600 rounded-md  my-3  px-8 py-3 mb-4">
            Sign In
          </button>
          <button
            className="text-white border bg-indigo-600 border-indigo-600
                hover:bg-transparent hover:text-indigo-600 rounded-md px-8 py-3"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
