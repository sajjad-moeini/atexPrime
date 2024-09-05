import BlackBtn from '@/Components/BlackBtn/BlackBtn'
import React from 'react'

function AboutCommited() {
   return (
      <>
         <div className='grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-24 my-10 aboutExp py-10'>
            <div className='flex flex-col gap-4'>
               <BlackBtn title='Our Commitment' />
               <p>
                  At ATEX, we are committed to building lasting partnerships with our clients. Our team of experts is dedicated to providing personalized service and support, ensuring you navigate the complexities of the textile market with ease. We understand the critical importance of timely delivery and competitive pricing, and we strive to exceed your expectations in every aspect of our business.
               </p>
            </div>


            <div className='flex justify-center items-center'>
               <img src="./about/hand.png" className='w-[250px] lg:w-[350px]' alt="" />
            </div>
         </div>


         <div className='grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-24 my-10 aboutExp py-10'>
           <div className='flex justify-center items-center order-2 lg:order-1'>
               <img src="./about/flower.png" className='w-[250px] lg:w-[350px]' alt="" />
            </div>

            <div className='flex flex-col gap-4 order-1 lg:order-2'>
               <BlackBtn title='Sustainability and Innovation' />
               <p>
               Sustainability is at the heart of our operations. We are constantly exploring innovative solutions to minimize our environmental impact. By choosing ATEX, you are aligning with a company that prioritizes ethical sourcing and sustainable development practices.
               </p>
            </div>
         </div>

      </>
   )
}

export default AboutCommited