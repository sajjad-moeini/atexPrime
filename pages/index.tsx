import Image from "next/image";
import { Inter } from "next/font/google";
import HomePageBanner from "@/Components/HomePageBanner/HomePageBanner";
import StepToPlaceOrder from "@/Components/StepToPlaceOrder/StepToPlaceOrder";
import HomeBelive from "@/Components/HomeBelive/HomeBelive";
import HomeCompanyOptions from "@/Components/HomeCompanyOptions/HomeCompanyOptions";
import WhyChooseUs from "@/Components/WhyChooseUs/WhyChooseUs";
import AskedQuestions from "@/Components/AskedQuestions/AskedQuestions";
import CustomerSays from "@/Components/CustomerSays/CustomerSays";
import dynamic from "next/dynamic";
const HomeCategories = dynamic(() => import('@/Components/HomeCategories/HomeCategories'),{ssr:false});


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <HomePageBanner/>
   <HomeCategories />
   <StepToPlaceOrder/>
   <HomeBelive/>
   <HomeCompanyOptions/>
   <WhyChooseUs/>
   <AskedQuestions/>
   <CustomerSays/>
   </>
  );
}
