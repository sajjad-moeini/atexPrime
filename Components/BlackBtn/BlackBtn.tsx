import React from 'react'

interface props{
   title:string
}

function BlackBtn({title}:props) {
  return (
   <button className='bg-black text-white font-bold text-xl lg:text-3xl rounded-lg px-4 py-2 w-fit'>{title}</button>
  )
}

export default BlackBtn