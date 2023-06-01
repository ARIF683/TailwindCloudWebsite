import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-24 bg-slate-900 px-5 ">
        <div className="max-w-[1240px] px-5 mx-auto grid  md:grid-cols-6 grid-cols-2 py-8 border-b-2 border-gray-600 text-gray-300  ">
          <div className="pb-4 pt-2 ">
            <h1 className="font-bold uppercase ">Solutions</h1>
            <div>
              <h1 className="py-1 ">Marketing</h1>
              <h1 className="py-1 ">Analytics</h1>
              <h1 className="py-1 ">Commerce</h1>
              <h1 className="py-1 ">Data</h1>
              <h1 className="py-1 ">Cloud</h1>
            </div>
          </div>
          <div className="pb-4 pt-2 ">
            <h1 className="font-bold uppercase ">Support</h1>
            <div>
              <h1 className="py-1 ">Pricing</h1>
              <h1 className="py-1 ">Documentation</h1>
              <h1 className="py-1 ">Guide</h1>
              <h1 className="py-1 ">API Status</h1>
            </div>
          </div>
          <div className="pb-4 pt-2 ">
            <h1 className="uppercase font-bold">Company</h1>
            <div>
              <h1 className="py-1 ">About</h1>
              <h1 className="py-1 ">Blog</h1>
              <h1 className="py-1 ">Jobs</h1>
              <h1 className="py-1 ">Press</h1>
              <h1 className="py-1 ">Partners</h1>
            </div>
          </div>
          <div className="pb-4 pt-2 ">
            <h1 className="uppercase font-bold ">Legal</h1>
            <div>
              <h1 className="py-1 ">Claim</h1>
              <h1 className="py-1 ">Private</h1>
              <h1 className="py-1 ">Policies</h1>
              <h1 className="py-1 ">Terms</h1>
            </div>
          </div>
          <div className="space-y-5 col-span-2 pt-8 md:pt-2 ">
            <h1 className="uppercase font-bold ">
              Subscribe to our NewsLetter
            </h1>
            <p className="text-left ">
              The latest news,articles and resources,send to your inbox weekly
            </p>
            <form className="flex flex-col sm:flex-row  ">
              <input
                className="p-3 rounded-md  w-full  text-black"
                placeholder="Enter your email"
                type="text"
              />
              <button className="ml-2 p-3  bg-indigo-600 text-white rounded-md  ">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className = "flex items-center justify-between text-gray-500 px-5 py-4 mx-auto flex-col sm:flex-row space-y-4 md:space-y-0 ">
          <div>
            <p className = "">2022 Workflow, LLC. All rights reserved</p>
          </div>
          <div className = "flex justify-between space-x-4 text-2xl ">

            <FaFacebook />
            <FaGithub />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
