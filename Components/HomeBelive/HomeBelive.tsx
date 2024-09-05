import React from "react";

function HomeBelive() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-4 lg:px-28">
      <div className="col-span-1 border-2 bg-white rounded-lg text-2xl py-5 px-10 text-black ">
        we Believe that our work creates shared value for customers and society.
      </div>
      <div className="col-span-2 ">
      <div className="w-[90%] flex justify-center items-start gap-2 text-lg lg:text-2xl text-white">
      <span className="text-customBlue text-xl lg:text-3xl">Atex</span> is always looking
        for customer satisfaction and finding the best way to transfer products.
        this is achieved after several years of experience.
      </div>
      </div>
      
    </div>
  );
}

export default HomeBelive;
