import React from "react";

function HomeCompanyOptions() {
   const tabletBorderId = [2,4]
  const options = [
    {
      id: 1,
      title: "93%",
      subTitle: "",
      desc: "Customer satisfaction",
      img: "./o1.png",
    },
    {
      id: 2,
      title: "+27",
      subTitle: "",
      desc: "project done",
      img: "./o2.png",
    },
    {
      id: 3,
      title: "+5",
      subTitle: "Years of",
      desc: "work experience",
      img: "./o3.png",
    },
    {
      id: 4,
      title: "86%",
      subTitle: "",
      desc: "completed project",
      img: "./o4.png",
    },
  ];
  return (
    <div className="md:px-10">
      <div className="hidden md:!grid grid-cols-4">
         {
            options.map((item)=>(
               <div className={`flex flex-col justify-center items-center gap-2 my-8 md:my-10 lg:my-20 ${item.id !==1 && 'border-s-2 border-customBlue'} `} key={item.id}>
               <img src={item.img} alt="" />
               <div className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
                  {item.title}
                  {item.subTitle.length >0 &&(
                     <span className="text-white text-sm md:text-base lg:text-lg capitalize">{item.subTitle}</span>
                  )}
               </div>
               <div className="text-white text-lg md:text-xl lg:text-2xl text-center capitalize">{item.desc}</div>
              </div>
            ))
         }
       
         </div>


         <div className="hidden sm:!grid md:!hidden grid-cols-2">
         {
            options.map((item)=>(
               <div className={`flex flex-col justify-center items-center gap-2 my-8 md:my-10 lg:my-20 ${tabletBorderId.includes(item.id) && 'border-s-2 border-customBlue'} `} key={item.id}>
               <img src={item.img} alt="" />
               <div className="text-mainYellow font-bold text-xl md:text-2xl lg:text-3xl">
                  {item.title}
                  {item.subTitle.length >0 &&(
                     <span className="text-white text-sm md:text-base lg:text-lg capitalize">{item.subTitle}</span>
                  )}
               </div>
               <div className="text-white text-lg md:text-xl lg:text-2xl text-center capitalize">{item.desc}</div>
              </div>
            ))
         }
       
         </div>


         <div className="grid sm:!hidden grid-cols-1">
         {
            options.map((item)=>(
               <div className="flex flex-col justify-center items-center gap-2 my-8 md:my-10 lg:my-20" key={item.id}>
               <img src={item.img} alt="" />
               <div className="!text-mainYellow font-bold text-xl md:text-2xl lg:text-3xl">
                  {item.title}
                  {item.subTitle.length >0 &&(
                     <span className="text-white text-sm md:text-base lg:text-lg capitalize">{item.subTitle}</span>
                  )}
               </div>
               <div className="text-white text-lg md:text-xl lg:text-2xl text-center capitalize">{item.desc}</div>
              </div>
            ))
         }
       
         </div>

    </div>
  );
}

export default HomeCompanyOptions;
