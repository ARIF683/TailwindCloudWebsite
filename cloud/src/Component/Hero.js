import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-zinc-200 w-full  flex flex-col justify-between pb-5  ">
        <div className="grid md:grid-cols-2  max-w-[1240px] m-auto px-5 ">
          <div className="flex flex-col md:items-start px-2 py-8 justify-center">
            <p className="text-2xl ">Unique Sequencing & Production</p>
            <h1 className="md:text-7xl font-bold text-5xl py-3 ">
              Cloud Management
            </h1>
            <p className="text-2xl  ">This is our Tech Brand</p>
            <button className="bg-indigo-600 rounded-md py-3 px-6  my-5  sm:w-[60%] text-white ">
              Get Started
            </button>
          </div>
          <div>
            <img className="w-full" src="/Image/cyber-bg.png" />
          </div>
        </div>
        <div className="flex items-center justify-center text-center mt-[-120px] md:mt-0  px-[50px] ">
          <div className="bg-zinc-200 border border-slate-300 shadow-xl rounded-xl space-y-3 py-5  mx-auto flex flex-col md:w-[50%]  w-full ">
            <p className="text-lg font-bold py-2 ">
              
              Data Services
            </p>
            <div className="flex flex-wrap justify-between items-center px-5  text-left ">
              <p className="flex px-4 py-2 text-slate-500  items-center  "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2  text-indigo-600  " viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>App Security</p>
              <p className="flex px-4 py-2 text-slate-500 items-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 mx-2 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
                Dashboard Design
              </p>
              <p className="flex items-center px-4 py-2 text-slate-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 mx-2 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                  <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                </svg>
                Cloud Data
              </p>
              <p className="flex px-4 py-2 text-slate-500 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 mx-2 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                API
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
