import AboutCategories from '@/Components/AboutCategories/AboutCategories'
import AboutCommited from '@/Components/AboutCommited/AboutCommited'
import AboutExprince from '@/Components/AboutExprince/AboutExprince'
import AboutHeader from '@/Components/AboutHeader/AboutHeader'
import AboutJoinUs from '@/Components/AboutJoinUs/AboutJoinUs'
import React from 'react'


function index() {
  return (
   <>
   <AboutHeader/>
   <AboutExprince/>
   <AboutCategories/>
   <AboutCommited/>
   <AboutJoinUs/>
   </>
  )
}

export default index