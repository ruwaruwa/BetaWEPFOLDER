import React, { useState } from 'react'
import { FaBuffer, FaEquals, FaHome } from 'react-icons/fa';

import {Link} from 'react-router-dom'
import Homelist from '../home page/Homelist';
export default function   Headers(){
  const[menu,setmenu]=useState()
  return (
    <>
    <div className=''>
<div className=' bg-pink-300 py-1 h-full md:px-2'>
      {/* <! header mennu> */}
     <div className='flex justify-between items-center  px-4 p-4  bg-pink-200 border  '>
     
  <div className='text-6xl flex gap-4  '>
  {/* logo icon /> */}
<FaHome className='text-pink-800  text-4xl'/>
    <span className='text-pink-800 text-4xl md:text-3xl font-semibold'>BetaLogo</span>
  </div>
       <div>
  <div className='flex gap-4 text-2xl md:justify-between'>
        <ul className=' text-lg font-serif hidden md:flex gap-5 '>
          {/* {menu.map((items,index)=>{
            return  <Link key={index} to={items.path}>  <li className='hover:text-blue-600  hover:border-b py-2'>home</li> </Link>
            
          })} */}
        <Link to={'/home'}><li className='hover:text-red-500  hover:border-b py-2'>Home</li></Link> 
     <Link to={'/guryaha'}><li className='hover:text-red-500  hover:border-b py-2'>Guryaha</li></Link> 
         <Link to={'gellary'}>   <li className='hover:text-red-500  hover:border-b py-2'> gellary</li></Link>
         <Link to={'/about'}>  <li className='hover:text-pink-800  hover:border-b py-2'>about</li></Link>
         <Link to={'/service'}>  <li className='hover:text-blue-900  hover:border-b py-2'>service</li></Link>
         <Link to={'/contact'}>    <li className='hover:text-blue-700 hover:border-b py-2'>contact</li></Link>
        </ul>
    <button className='px-8 p-1.5 bg-white border-2 rounded-2xl border-blue-400
     hover:text-white hover:bg-red-600 text-2xl md:border-b-2 text-sm md:font-semibold   md:block'>login
   {/* <FaEquals className='text-3xl block md:hidden' /> */}
     </button>
     {/* <button> <FaEquals className='text-3xl block md:hidden' /> </button> */}
     </div>
     </div> 
     {/* </// menu end/ */}
   <div className=''> 

<div>

</div>

   </div>

     </div>
     {/* <///end menu> */}
     
     </div>
     <div>
<Homelist/>
</div>
     </div>
   

   
    </>
   
  )
}
