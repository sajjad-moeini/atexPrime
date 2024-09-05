import BlackBtn from '@/Components/BlackBtn/BlackBtn'
import React from 'react'

function AboutExprince() {
   return (
      <div className='grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-24 my-10 aboutExp py-10'>
         <div className='flex flex-col gap-4'>
            <BlackBtn title='Our Expertise' />
            <p>
               With a wealth of experience in the textile industry, Atex has established itself as a leader known for reliability and cutting-edge solutions. We meticulously source our products from top manufacturers worldwide to ensure that our clients receive nothing but the best. Our comprehensive offerings include:
            </p>
         </div>


         <div className='flex justify-center items-center'>
            <img src="./about/exp.png" className='w-[250px] lg:w-[350px]' alt="" />
         </div>
      </div>
   )
}

export default AboutExprince