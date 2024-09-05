import PlusIcon2 from '@/Components/Icons/PlusIcon2/PlusIcon2'
import { allCategoriesNames } from '@/utils/siteInfos'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { appAxios } from '../../configs/axios'
import Skeleton from '@/Components/Skeleton/Skeleton'
import CheckIcon from '@/Components/Icons/CheckIcon/CheckIcon'
import Link from 'next/link'
import { category, products } from '@/Types/ts'
import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'
const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL || "https://api.atexlimited.com";


function index() {

   const router = useRouter()
   const { id } = router.query

   const params = useParams()
console.log(params)

   const [showProductsInCategoryMobile, setIsShowProductsInCategoryMobile] = useState(false)
   const [selectedCategory, setSelectedCategory] = useState<number>(Number(id) || 1)
   const [allCategory, setAllCategory] = useState<category[]>([])
   const [allProducts, setAllProducts] = useState<products>([])
   const [isError, setIsError] = useState(false)


   const openModalHandler = (id: number) => {
      getProducts(id)
      if (allProducts.length > 0) {
         setIsShowProductsInCategoryMobile(prev => !prev)
      }
   }
   const closeModalHandler = () => {
      setIsShowProductsInCategoryMobile(prev => !prev)
   };
   const reventPropgation: MouseEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();
   };
   useEffect(() => {
       id && setSelectedCategory(Number(id))
       getProducts(selectedCategory)
    }, [])
   useEffect(() => {

      appAxios.get('/Category/GetAll')
         .then(response => {
            if (response.status === 200) setAllCategory(response.data);
         })
         .catch(err => {
            setIsError(true)
         })

      selectedCategory && getProducts(selectedCategory)
   }, [selectedCategory, id])

   const getProducts = (categoryId: number) => {
      appAxios.post(`/Product/GetAll`, { categoryId })
         .then(response => {
            if (response.status === 200) {
               setAllProducts(response.data);
            }
         })
         .catch(err => {
            setIsError(true)
         });
   }

   const changeCategoryHandler = (category: number) => {
      router.push(`/products?id=${category}`)
      setSelectedCategory(category)
   }

   if (isError) return (
      <div className='w-full h-[80vh] text-white text-2xl lg:text-4xl flex justify-center items-center'>
         you have Connection Error
      </div>
   )
   if (allCategory.length > 0) return (
      <div className='px-4 lg:px-20  lg:py-10'>
         {/* <div className='hexagon'></div> */}
         <div className='flex justify-start items-center gap-4 my-5 lg:my-10'>
            <img src="./products/products.png" alt="" />
            <div className='text-white text-2xl lg:text-4xl font-semibold'>Products</div>
         </div>
         <div className='desktopProducts hidden lg:!grid grid-cols-8 gap-4'>
            <div className='col-span-2 w-full'>
               <div className='bg-white flex flex-col justify-center items-center py-4 rounded-3xl px-3'>
                  <div className='text-2xl font-semibold text-center text-black mb-5'>All Products</div>
                  {
                     allCategory ? (
                        allCategory?.map((category, index) => (
                           <div className='flex justify-between items-center w-full border-b border-b-gray-500 py-4' key={index}>
                              <div className='text-black font-medium'>{category?.title}</div>

                              <div className={`w-4 h-4 border border-gray-500 cursor-pointer relative`} onClick={() => { changeCategoryHandler(category.id) }}>
                                 <div className='w-fit h-fit absolute left-[-1px] bottom-0'>
                                    {
                                       category.id == Number(id) && <CheckIcon />
                                    }

                                 </div>
                              </div>
                           </div>
                        ))
                     ) : (
                        <Skeleton type='Text' colSpan={3} />
                     )

                  }
               </div>
            </div>
            <div className='col-span-6 w-full grid grid-cols-3 gap-4 h-[70vh] overflow-y-auto'>
               {
                  allProducts.length > 0 ? allProducts.map((product, index) => (
                     <div className='w-full bg-white rounded-xl flex flex-col justify-center items-center gap-8 px-4 h-fit py-5' key={index}>
                        <div className='w-11/12 mx-auto flex justify-center items-end rounded-lg bg-gray-300 pt-5'>
                           <img src={`${baseURL}/${product.image}`} className='w-3/4 !h-[90px]' alt="" />
                        </div>
                        <div className='text-black font-semibold self-start truncate w-full'>
                           {product.title}
                        </div>
                        <div className='text-gray-500 self-start'>
                           <Link href={`/products/${product.id}`} className='bg-customBlack text-white px-4 py-2 text-base lg:text-xl rounded-lg'>See More</Link>
                        </div>
                     </div>
                  )) : (
                     <div className='w-full col-span-3'>
                        <Skeleton type='Image' count={3} colSpan={3} />
                     </div>
                  )
               }
            </div>
         </div>

         <div className='mobileProducts lg:!hidden'>
            <div className='flex justify-center items-center text-black rounded-lg bg-[#DBF7FD] py-4 my-5 font-semibold'>Category of All Products</div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
               {
                  allCategory.map((category, index) => (
                     <div className='w-full bg-white rounded-xl flex flex-col justify-center items-center gap-8 px-4 h-fit py-5' onClick={() => { openModalHandler(category.id) }} key={index}>
                        <div className=' mx-auto flex justify-center items-end rounded-lg !h-24 !w-24 bg-gray-300 pt-5'>
                           <img src={`${baseURL}/${category.image as string}`} className=' !h-[75px] !w-[75px]' alt="" />
                        </div>
                        <div className='text-black font-semibold self-start'>
                           {category.title}
                        </div>
                     </div>
                  ))
               }
            </div>

            {
               showProductsInCategoryMobile && (


                  <div
                     className="fixed left-0 bottom-0 h-[100vh] w-full bg-[#8e8e8e81] z-[1000000]"
                     onClick={closeModalHandler}
                     onScroll={(e) => { e.preventDefault() }}
                  >
                     <div className="w-full h-full relative" >
                        <div className="w-fit h-fit" onClick={reventPropgation}>
                           <div className='fixed left-0 bottom-0 h-[70vh] w-full bg-white rounded-t-3xl px-4 overflow-y-auto'>
                              <div className='w-16 h-1 mx-auto bg-gray-400 my-3 rounded-xl'></div>
                              <div className='text-black font-semibold'>All Products</div>
                              <div className='border border-gray-400 rounded-lg border-b-0 h-full mt-3 px-2'>
                                 {
                                    allProducts.map((product, index) => (
                                       <div
                                          className='flex justify-between items-center w-full border-b border-b-gray-500 py-4'
                                          key={index}
                                       >
                                          <div className='text-black w-4/5 truncate'>{product.title}</div>
                                          <Link className='h-fit w-fit' href={`products/${product.id}`}>
                                             <PlusIcon2 />
                                          </Link>
                                       </div>
                                    ))
                                 }
                              </div>
                           </div>


                        </div>
                     </div>
                  </div>

               )
            }
         </div>
      </div>
   )
   else return (
      <div className='w-full h-[80vh] text-white text-2xl lg:text-4xl flex justify-center items-center'>
         <div className='w-32 h-32 rounded-full border-8 border-t-blue-600  border-b-blue-800 animate-spin'></div>
      </div>
   )
}

export default index
