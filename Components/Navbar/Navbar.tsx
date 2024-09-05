import React, { useState } from 'react'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import PhoneIcon from '../Icons/PhoneIcon/PhoneIcon'
import Link from 'next/link'
import MenuIcon from '../Icons/MenuIcon/MenuIcon'
import CustomBtn from '../CustomBtn/CustomBtn'
import Bars from '../Icons/Bars/Bars'
const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL || "https://api.atexlimited.com";
function Navbar() {

   const [mobileMenuTop, setMobileMenuTop] = useState('top-[-1000px]')

   const showMobileMenu = () => {
      if (mobileMenuTop == 'top-[-1000px]') {
         setMobileMenuTop("top-full")
      } else {
         setMobileMenuTop('top-[-1000px]')
      }
   }
   const mobileClickHandler = ()=>{
      setMobileMenuTop('top-[-1000px]')
   }
   return (
      <>
         <div className='flex justify-between items-center px-4 lg:px-24 py-5 relative bg-[#E2E7EB]'>
            <div className='block lg:hidden w-fit h-fit'>
               <CustomBtn icon={<PhoneIcon />} />
            </div>
            <Link href={'/'} className='w-fit h-fit'>
               <img src={`${baseURL}/atexLogo.png`} className='w-[120px] lg:w-[200px]' alt="" />
            </Link>
            <div className='w-fit h-fit relative hidden lg:block'>
               <input type="text" className='border border-gray-400 ps-8 pe-4 rounded-lg bg-transparent w-[30vw] py-2' placeholder='Search Your Product' />
               <div className='w-fit h-fit absolute left-2 top-3'>
                  <SearchIcon />
               </div>
            </div>
            <div className='hidden lg:block w-fit h-fit'>
               <CustomBtn title='Let’s Talk' icon={<PhoneIcon />} shadowColor='shadow-transparent' />
            </div>
            <div className='block lg:hidden w-fit h-fit' onClick={showMobileMenu}>
               <Bars />
            </div>

            <div className={`mobileMenuItems block lg:hidden absolute ${mobileMenuTop} t05 left-0 w-full z-40`}>
               <Link href={'/'} onClick={mobileClickHandler} className='flex justify-center items-center gap-2 py-4 bg-customBlack text-white'>
                  Home
               </Link>
               <Link href={'/products/1'} onClick={mobileClickHandler} className='flex justify-center items-center gap-2 py-4 bg-customBlack text-white'>
                  <MenuIcon /> Products
               </Link>
               <Link href={'/about-us'} onClick={mobileClickHandler} className='flex justify-center items-center gap-2 py-4 bg-customBlack text-white'>
                  About Us
               </Link>
               {/* <Link href={'/'} className='flex justify-center items-center gap-2 py-4 bg-customBlack text-white'>
                  Contact Us
               </Link>
               <Link href={'/'} className='flex justify-center items-center gap-2 py-4 bg-customBlack text-white'>
                  FAQ
               </Link> */}
            </div>



         </div>
         <div className='px-4 lg:px-24 bg-customBlack w-full hidden lg:flex  gap-8 '>
            <Link href={'/'} className='flex justify-center items-center gap-2 py-4 text-white'>
               Home
            </Link>
            <Link href={'/products/1'} className='flex justify-center items-center gap-2 py-4 text-white'>
               <MenuIcon /> Products
            </Link>
            <Link href={'/about-us'} className='flex justify-center items-center gap-2 py-4 text-white'>
               About Us
            </Link>
            {/* <Link href={'/'} className='flex justify-center items-center gap-2 py-4 text-white'>
               Contact Us
            </Link>
            <Link href={'/'} className='flex justify-center items-center gap-2 py-4 text-white'>
               FAQ
            </Link> */}
         </div>
         <div className='flex lg:hidden w-full justify-between items-center py-4 px-4 lg:px-24 bg-[#E2E7EB]'>
            <div className='w-full h-fit relative '>
               <input type="text" className='border border-gray-400 ps-8 pe-4 rounded-lg bg-transparent w-full py-2' placeholder='Search Your Product' />
               <div className='w-fit h-fit absolute left-2 top-3'>
                  <SearchIcon />
               </div>
            </div>

         </div>
      </>
   )
}

export default Navbar