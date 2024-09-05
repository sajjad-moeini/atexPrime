import React, { useEffect, useState } from 'react'
import { appAxios } from '../../../../configs/axios'
import AskedQuestionsBoxItem from '@/Components/AskedQuestionsBoxItem/AskedQuestionsBoxItem'
import { GetStaticPropsContext } from 'next'
import { product } from '@/Types/ts';
import { useParams } from 'next/navigation';
const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL || "https://api.atexlimited.com";


function index() {
  const [selectedBox, setSelectedBox] = useState<number>(1);
  const [mainProduct, setMainProduct] = useState<any>()


  const params = useParams()
  const productId = params?.productId


  useEffect(() => {
   productId && getAllProduct()
  }, [productId])

  const getAllProduct = () => {
    appAxios.get(`/Product/GetById?id=${productId}`).then(res => {
      if (res.status === 200) {
        const data = res.data
        setMainProduct(data[0])
        // return res.data;
      }
    })
  }


  return (
    <div className=' py-10'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-24'>
        <div className='col-span-1 lg:col-span-1 '>
          <div className='w-full bg-gray-400 p-8 rounded-lg'>
            <img src={`${baseURL}/${mainProduct?.image}`} className='w-full h-full rounded-lg' alt="" />
          </div>
        </div>


        <div className='col-span-1 lg:col-span-2 '>

          <div className='text-customBlue text-xl lg:text-3xl font-semibold'>{mainProduct?.title}</div>
          <p className='text-gray-300 text-base lg:text-2xl my-5'>
            {mainProduct?.description}
          </p>

          <div className="flex items-center justify-between relative my-2">
            <div className="relative w-fit mt-[-1.00px]  font-light text-[#b6bdc5] text-lg lg:text-3xl tracking-[0] leading-[51.2px] whitespace-nowrap">
              Unit :
            </div>
            <div className="relative w-fit mt-[-1.00px]  font-semibold text-white text-lg lg:text-3xl tracking-[0] leading-[51.2px] whitespace-nowrap">
              {mainProduct?.unit}
            </div>
          </div>

          <div className="flex items-center justify-between relative my-2">
            <div className="relative w-fit mt-[-1.00px]  font-light text-[#b6bdc5] text-lg lg:text-3xl tracking-[0] leading-[51.2px] whitespace-nowrap">
              Unit Price :
            </div>
            <div className="relative w-fit mt-[-1.00px]  font-semibold text-white text-lg lg:text-3xl tracking-[0] leading-[51.2px] whitespace-nowrap">
              {mainProduct?.unitPrice}
            </div>
          </div>

        </div>
      </div>

      <div className='px-4 lg:px-24 bg-white w-full py-10 my-10'>
        <div className=' border border-gray-500 rounded-xl px-5 py-10 '>
          <div className='text-black font-semibold text-xl lg:text-3xl'>Technical features</div>
          <div className='grid grid-cols-1  gap-8'>
            {
              mainProduct?.features.map((feature:any,index:number) => (
                <div key={index} className='flex justify-between items-center py-4 border-b border-b-gray-500'>
                  <div className='text-gray-600'>{feature.feature}</div>
                  <div className='text-black font-medium'>{feature.value}</div>
                </div>
              ))
            }

          </div>
        </div>
      </div>

      <div className="px-4 lg:px-24">
        <div className=" flex flex-col justify-center items-center mt-10 xl:mt-24 ">
          <AskedQuestionsBoxItem
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
            item={1}
            title="What industries do you serve with your raw materials and industrial machinery?"
            desc="Atex is always focused on customer satisfaction and finding the most efficient ways to transfer products. This commitment is backed by several years of experience"
          />
          <AskedQuestionsBoxItem
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
            item={2}
            title="How can I place an order for products on your website?"
            desc="Placing an order with Atex Trading Limited is simple. First, browse our product catalogue to find the items you need. Once you’ve selected your products, please submit a request through our website or contact our sales team directly. We will then confirm your order details and provide you with the necessary information to complete the purchase."
          />
          <AskedQuestionsBoxItem
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
            item={3}
            title="Do you offer customization services for industrial machinery?"
            desc="Yes, we offer customization services for our industrial machinery. Our team of experienced engineers can work with you to tailor the machinery to your specific requirements. Please contact us with your customization needs, and we will provide you with a detailed proposal and timeline"
          />
          <AskedQuestionsBoxItem
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
            item={4}
            title="What are your shipping and delivery policies?"
            desc="Atex Trading Limited offers international shipping for all our products. We partner with reliable logistics companies to ensure timely and safe delivery. Shipping costs and delivery times vary based on the destination and order size. Once your order is confirmed, we will provide you with tracking information and an estimated delivery date."
          />
        </div>
      </div>


    </div>
  )
}


export default index

