
import React from 'react'
import FullStarIcon from '../Icons/FullStarIcon/FullStarIcon'

type props = {
  name:string
  role:string
  img:string
}

function CustomerSaysBox({img,name,role}:props) {
  return (
   <div className="bg-white rounded-lg p-5">
   <div className="flex justify-start items-center gap-1">
     {Array.from([1, 2, 3, 4, 5]).map((item,index) => (
       <FullStarIcon key={index} />
     ))}
   </div>

   <div className="text-black my-5">
     We will also facilitate the business marketing of these products
     with our SEO experts so that they become a ready to use website &
     help sell product from company
   </div>

   <div className="flex justify-start items-center gap-2">
     <img
       src={img}
       className="w-[50px] rounded-full"
       alt=""
     />
     <div>
       <div className="text-black font-semibold">{name}</div>
       <div className="text-gray-600">{role}</div>
     </div>
   </div>
 </div>
  )
}

export default CustomerSaysBox