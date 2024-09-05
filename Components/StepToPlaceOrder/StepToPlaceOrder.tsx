
import React from "react";
import YellowChevRight from "../Icons/YellowChevRight/YellowChevRight";

function StepToPlaceOrder() {
   const boxes = [
      {
         id:1,
         img:'./01.png',
         title:"send a request",
      },
      {
         id:2,
         img:'./02.png',
         title:"wait for it",
      },
      {
         id:3,
         img:'./03.png',
         title:"finish and rate us",
      },
   ]
  return (
    <div>
      <div className=" border-b-2 w-fit mx-auto border-customBlue text-2xl md:text-3xl lg:text-4xl font-semibold text-white px-4 py-2">
        Steps To Place Order
      </div>

<div className="grid grid-cols-1 lg:grid-cols-3 my-10 w-[90%] mx-auto" >
{
   boxes.map(item=>(
        <div key={item.id} className="w-[250px] mx-auto h-[250px]  border-mainBlue flex flex-col justify-around items-center border-b border-customBlue lg:border-b-0">
          <div>
            <img src={item.img} alt="" />
          </div>
          <div className="text-2xl text-white font-semibold capitalize">{item.title}</div>
          <div className="flex justify-center items-center gap-2">
            <div className="text-mainBlue font-bold text-white mb-1 capitalize">Learn More</div>
            <YellowChevRight />
          </div>
        </div>
   ))
}
      </div>
      


    </div>
  );
}

export default StepToPlaceOrder;
