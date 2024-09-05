import Link from "next/link";
import React from "react";
const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL || "https://api.atexlimited.com";

function Footer() {
  return (
    <footer className=" bg-bg px-4 lg:px-20 relative">
      <div className="bg-[#DCF6FB] rounded-t-2xl px-4 lg:px-20 py-7">
        <div className="flex justify-center items-center">
        <img src={`${baseURL}/footerLogo.png`} alt="" />
        </div>
        <div className="flex justify-center items-center gap-4 my-5">
          <Link href={'/products?id=1'} className="text-customBlack font-semibold" >Products</Link>
          <div className="w-0.5 h-3 bg-customBlack"></div>
          <Link href={'/about-us'} className="text-customBlack font-semibold" >About Us</Link>
        </div>
        <p className="text-center text-black my-5">
          Flat 2401-16 Wing Shing Industrial Building, 26 Ng Fong Street, San Po Kong, KL (+852) 81932316
        </p>
        <Link href={'mail:info@atexlimited.com'} className="text-customBlack my-5 font-semibold flex justify-center items-center">info@atexlimited.com</Link>
        <div className="w-1/2 mx-auto flex justify-center items-center gap-4 my-5">
          <div className="w-4 h-0.5 bg-customBlack"></div>
          <div className="w-4 h-0.5 bg-customBlack"></div>
          <div className="w-4 h-0.5 bg-customBlack"></div>
          <div className="w-4 h-0.5 bg-customBlack"></div>
          <div className="w-4 h-0.5 bg-customBlack"></div>
          <div className="w-4 h-0.5 bg-customBlack"></div>
          <div className="w-4 h-0.5 bg-customBlack"></div>
          <div className="w-4 h-0.5 bg-customBlack"></div>
        </div>
        <p className="text-center text-customBlack font-semibold">
        ©2022 ATEX International Limited. All rights reserved.
        </p>
      </div>
      <Link className="w-fit h-fit absolute top-[-40px] right-[10%]" href={'#body'}>
        <img src={`${baseURL}/upCorsur.png`} alt="" />
      </Link>
    </footer>
  );
}

export default Footer;
