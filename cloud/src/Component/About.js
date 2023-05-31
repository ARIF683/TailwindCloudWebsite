import React from "react";

const About = () => {
  return (
    <>
      <div className = "py-[100px] flex items-center justify-center flex-col  px-5  mx-auto w-full ">
        <div className = "text-center ">
          <h1 className = "text-5xl font-bold ">Trusted by developers across the world</h1>
          <p className = "text-3xl py-3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque.
          </p>
        </div>
        <div className = "grid md:grid-cols-3 text-center gap-2   py-3 ">
          <div className = "shadow-xl rounded-xl py-3  border px-[50px]">
            <h1 className = "text-5xl text-indigo-600 font-bold ">100%</h1>
            <p className = "text-gray-400 ">Completion</p>
          </div>
          <div className = "shadow-xl rounded-xl py-3 px-[50px] border ">
            <h1 className = "text-5xl text-indigo-600 font-bold ">24/7</h1>
            <p className = "text-gray-400 ">Delivery</p>
          </div>
          <div className = "rounded-xl shadow-xl py-3 px-[50px] border  ">
            <h1 className = "text-5xl text-indigo-600 font-bold ">100K</h1>
            <p className = "text-gray-400 ">Transitions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
