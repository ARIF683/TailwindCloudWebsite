import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-zinc-200 w-full  flex flex-col justify-between  ">
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
          {/** 
          <div className = "bg-zinc-200 absolute top-[25%] border border-slate-500 shadow-xl rounded-xl mx-1 flex flex-col text-center ">
            <p>Data Services</p>
            <div>
              <p>App Security</p>
              <p>Dashboard Design</p>
              <p>Cloud Data</p>
              <p>Api</p>
            </div>
          </div>
  */}
        </div>
      </div>
    </>
  );
};

export default Hero;
