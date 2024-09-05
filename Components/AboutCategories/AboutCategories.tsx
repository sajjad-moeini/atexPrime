import React from 'react'

function AboutCategories() {


   const categories = [
      { id: 1, title: "Textile", img: "c1.png", desc: "We provide a wide range of garments, from everyday essentials to high-fashion pieces, tailored to meet diverse market demands and consumer preferences." },
      { id: 2, title: "Machinery", img: "c2.png", desc: "Our state-of-the-art machinery enhances production efficiency and quality, encompassing everything from spinning and weaving equipment to advanced sewing and finishing machines." },
      { id: 3, title: "Spare Parts", img: "c3.png", desc: "To keep your operations running smoothly, we supply a full range of spare parts for all types of textile machinery, ensuring minimal downtime and sustained productivity." },
      { id: 4, title: "Garments", img: "c4.png", desc: "We provide a wide range of garments, from everyday essentials to high-fashion pieces, tailored to meet diverse market demands and consumer preferences." },
      { id: 5, title: "Garments", img: "c5.png", desc: "We provide a wide range of garments, from everyday essentials to high-fashion pieces, tailored to meet diverse market demands and consumer preferences." },
      { id: 6, title: "Raw Materials", img: "c6.png", desc: "We offer an extensive selection of raw materials, including both natural and synthetic fibers, guaranteeing a consistent and high-quality supply for your manufacturing needs." },
   ]

   return (
      <div className='grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-24 gap-4'>
         {
            categories.map(item => (
               <div className='bg-white flex flex-col justify-around items-start gap-4 rounded-lg px-4 py-4 cursor-pointer' key={item.id}>
                  <div className='bg-customBlue rounded-lg p-2'>
                  <img src={`./about/${item.img}`} alt="" />
                  </div>
                  <div className='text-black font-medium text-xl lg:text-3xl'>
                     {item.title}
                  </div>
                  <p className='text-black'>
                     {item.desc}
                  </p>
               </div>
            ))
         }
      </div>
   )
}

export default AboutCategories