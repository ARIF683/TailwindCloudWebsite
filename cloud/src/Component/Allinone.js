import React from "react";

const Data = [
  {
    title: "Notification",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores maxime deserunt voluptatibus"
  },
];

const Allinone = () => {
  return (
    <>
      <div className = "w-full mt-32 ">
        <div className = "max-w-[1240px] text-center px-5 mx-auto ">
          <h1 className = "text-5xl font-bold ">All-in-One-Platform</h1>
          <p className = "text-center text-xl py-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Veritatis,ab. Officia sunt nulla aspernatur culpa, eaque tenetur
            excepturi nostrum tempore.
          </p>
        </div>
        <div className = "grid grid-cols-2 md:grid-cols-4 px-5 pt-4 ">
          {Data.map((item) => (
            <>
            <div>
              <div className = "flex space-x-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="green"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h1 className = "text-lg  font-bold  ">{item.title}</h1>
              </div>
              <div className = "pl-7  text-lg text-left  pt-2 pb-4 ">{item.para}</div>
            </div>
            <div>
                <div className = "flex space-x-2 items-center ">
                  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          
                          <h1 className = "text-lg font-bold ">{item.title}</h1>
                </div>
                <div className = "text-lg  pl-7 pt-2 pb-4 text-left ">{item.para}</div>
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Allinone;
