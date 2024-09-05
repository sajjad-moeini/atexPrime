import React from 'react'

type props = {
   type: "Image" | "Title" | "Text"
   count?: number
   colSpan?: number
}

function Skeleton({ type, count, colSpan }: props) {

   const counter = new Array(count).fill(0)

   console.log(counter.length)

   if (type == "Image") return (
      count ? (
         <div className={`w-full flex  col-span-${colSpan} gap-4`}>
            {counter.map((i, index) => (
               <div key={index} className="p-6 w-full h-56 mx-auto bg-white rounded-xl shadow-md space-y-4">
                  <div className="animate-pulse">
                     <div className="bg-gray-300 h-40 w-full rounded"></div>
                  </div>
               </div>
            ))}
         </div>
      ) : (<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
         <div className="animate-pulse">
            <div className="bg-gray-300 h-40 w-full rounded"></div>
         </div>
      </div>)
   )
   if (type == "Title") return (
      count ? (
         <div className={`w-full flex col-span-${colSpan} gap-4`}>
            {counter.map((i, index) => (
               <div key={index} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
                  <div className="animate-pulse">
                     <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
                  </div>
               </div>
            ))}
         </div>
      ) : (<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
         <div className="animate-pulse">
            <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
         </div>
      </div>)
   )
   if (type == "Text") return (
      count ? (
         <div className={`w-full flex col-span-${colSpan} gap-4`}>
            {counter.map((i, index) => (
               <div key={index} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
                  <div className="animate-pulse space-y-2">
                     <div className="bg-gray-300 h-4 w-full rounded"></div>
                     <div className="bg-gray-300 h-4 w-5/6 rounded"></div>
                     <div className="bg-gray-300 h-4 w-4/5 rounded"></div>
                  </div>
               </div>
            ))}
         </div>
      ) : (<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
         <div className="animate-pulse space-y-2">
            <div className="bg-gray-300 h-4 w-full rounded"></div>
            <div className="bg-gray-300 h-4 w-5/6 rounded"></div>
            <div className="bg-gray-300 h-4 w-4/5 rounded"></div>
         </div>
      </div>)
   )
}

export default Skeleton