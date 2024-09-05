"use client"
import React, { useEffect, useState } from 'react'
import TextileIcon from '../Icons/TextileIcon/TextileIcon'
import GarmentsIcon from '../Icons/GarmentsIcon/GarmentsIcon'
import MachineryIcon from '../Icons/MachineryIcon/MachineryIcon'
import RawMaterialsIcon from '../Icons/RawMaterialsIcon/RawMaterialsIcon'
import ChevTopRightWhiteIcon from '../Icons/ChevTopRightWhiteIcon/ChevTopRightWhiteIcon'
import BuildingMaterialsIcon from '../Icons/BuildingMaterialsIcon/BuildingMaterialsIcon'
import SpareParts from '../Icons/SpareParts/SpareParts'
import { category } from '@/Types/ts'
import { appAxios } from '@/configs/axios'
import Link from 'next/link'
const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL || "https://api.atexlimited.com";
function HomeCategories() {

   const [allCategory, setAllCategory] = useState<category[]>([])
   const [isError, setIsError] = useState(false)
 
useEffect(()=>{
   appAxios.get('/Category/GetAll')
   .then(response => {
      if (response.status === 200) setAllCategory(response.data);
   })
   .catch(err => {
      setIsError(true)
   })
},[])

   return (
      <div className='my-10 px-4 lg:px-24'>

         <div className='bg1 '>
         <div className='flex justify-center items-start lg:items-center flex-col lg:w-3/5 mx-auto '>
            <div className='font-bold text-xl lg:text-3xl text-white'>Products Of Atex
            </div>
            <p className='text-white text-base lg:text-center'>
               ATEX is always looking for customer satisfaction and finding the best way to transfer products. this is achieved after several years of experience.
            </p>
         </div>
         </div>

         <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-16'>
            {
               allCategory.map(item=>(
                  <div key={item.id} className='border border-gray-400  py-8 rounded-3xl hover:!bg-customBlue flex flex-col justify-between items-center gap-9'>
                  <div className='text-white text-2xl font-bold'>{item.title}</div>
                  <img src={`${baseURL}/${item.image as string}`} className='w-[75px] h-[75px]' alt="" />
                  <Link href={`products/${item.id}`} className='bg-customBlack px-8 py-2 rounded-lg shadow-lg shadow-customBlue flex justify-center items-center gap-2'>
                     <div className='text-white'>View All</div>
                     <ChevTopRightWhiteIcon/>
                  </Link>
               </div>
               ))
            }
          
         </div>



      </div>
   )
}

export default HomeCategories