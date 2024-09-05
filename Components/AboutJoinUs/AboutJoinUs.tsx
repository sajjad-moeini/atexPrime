import BlackBtn from '@/Components/BlackBtn/BlackBtn'
import React from 'react'

function AboutJoinUs() {
  return (
   <div className='relative'>
   <div className='absolute w-full bottom-0 left-0 h-[60%] z-[-1]' >
     <img src="./about/header.png" className='w-full' alt="" />
   </div>
   <div className='px-4 lg:px-24  flex flex-col gap-2'>
     <BlackBtn title='Join Us' />
     <div className='py-10 px-4 lg:px-8 text-black aboutw rounded-xl'>
     Experience the Atex difference. Whether you are a manufacturer, retailer, or designer, we invite you to explore our diverse range of products and benefit from our exceptional service. Together, we can reach new heights in the textile industry.
     </div>
    <div className='w-full lg:w-1/2 mx-auto mt-5'>
    <p className='text-white text-center font-bold text-xl lg:text-3xl'>
     Thank you for choosing Atex. Your success is our foremost priority.
     </p>
    </div>
   </div>
 </div>
  )
}

export default AboutJoinUs