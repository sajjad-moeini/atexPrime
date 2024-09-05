import BlackBtn from '@/Components/BlackBtn/BlackBtn'
import React from 'react'

function AboutHeader() {
  return (
    <div className='relative w-full'>
      <div className='absolute w-full top-0 left-0 right-0 h-[70%] overflow-hidden z-[-1]' >
        <img src="./about/header.png" className='w-full' alt="" />
      </div>
      <div className='px-4 lg:px-24 pt-20 flex flex-col gap-2'>
        <BlackBtn title='About Us' />
        <div className='py-10 px-4 lg:px-8 text-black aboutw rounded-xl'>
          <span className='font-semibold'>Welcome to ATEX</span>, where quality meets innovation across the entire textile and garment industry. At Atex, we are dedicated to excellence in the trade of Textile Garments, advanced Machinery, premium Raw Materials, essential Spare Parts, and top-tier Building Materials. Our mission is to empower our clients with superior products and outstanding service that surpass industry standards.
        </div>
      </div>
    </div>
  )
}

export default AboutHeader