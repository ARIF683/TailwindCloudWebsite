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
          <div className = "flex items-center justify-center text-center mt-[-120px] md:mt-0  px-[50px] ">
          <div className = "bg-zinc-200 border border-slate-300 shadow-xl rounded-xl space-y-3 py-5  mx-auto flex flex-col md:w-[50%]  ">
            <p className = "text-lg font-bold py-2 ">Data Services</p>
            <div className = "flex flex-wrap justify-between items-center px-5  text-left ">
              <p className = "flex px-4 py-2 text-slate-500 ">App Security</p>
              <p className = "flex px-4 py-2 text-slate-500  ">Dashboard Design</p>
              <p className = "flex px-4 py-2 text-slate-500 ">Cloud Data</p>
              <p className = "flex px-4 py-2 text-slate-500 ">API</p>
            </div>
            </div>
          </div>

        
      </div>
    </>
  );
};

export default Hero;
