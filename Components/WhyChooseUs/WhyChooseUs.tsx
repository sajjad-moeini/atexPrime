import React from "react";

function WhyChooseUs() {

   const options = [
      {
         id:1,
         title:"Global Responsibility",
         percent :80,
         count:1,
         width:"w-[80%]"
      },
      {
         id:2,
         title:"Narrow Specialization",
         percent :75,
         count:2,
         width:"w-[75%]"
      },
   ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  px-4 md:px-20 lg:px-24 my-10">
      <div
        className="col-span-1 font-bold text-2xl lg:text-4xl bg-customBlue rounded-2xl text-black flex flex-col w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] justify-center items-center
      "
      >
        <div>Why you</div>
        <div>should</div>
        <div>Choose Us</div>
      </div>


      <div className="col-span-2">


        <div className="flex gap-4">
          <span className="text-white font-bold">Atex</span>
          <div className="text-white lowercase">
            {" "}
            TEAME CONSISTS OF EXPERIENCED SPECIALISTS AND EXPERIENCED ENGINEERS.
            PROFESSIONALS ARE LOOKING FOR THE BEST PRODUCTS.
          </div>
        </div>

{
   options.map(item=>(
      <div className="flex justify-start items-center gap-4 w-full my-8" key={item.id}>
      <div className="text-white font-bold text-xl md:text-3xl pt-6">0{item.count}</div>
      <div className="flex justify-between px-4 py-2  items-center w-[90%] md:w-[70%] border-b border-gray-500 text-white relative">
      <div className="font-semibold text-sm text-nowrap lg:text-xl">{item.title}</div>
      <div className="font-semibold text-nowrap"> {item.percent}  %</div>
      <div className={`absolute top-[95%] ${item.width} h-1 left-0 bg-customBlue`}></div>
      </div>
   </div>
   ))
}
       



      </div>
    </div>
  );
}

export default WhyChooseUs;
