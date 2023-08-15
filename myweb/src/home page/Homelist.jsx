import React from 'react'
import { Link } from 'react-router-dom'

export default function Homelist() {
  return (
    <div>
    {/* <star section></star> */}
       <div className=''>
 {/* <gri section></gri> */}
 <div className='bg-pink-300  grid grid-cols-1 md:grid-cols-2 py-6 p-4 lg:4'>
 <div className='leading-6  flex items-center flex-col justify-center gap-8'>
 <div className='text-4xl'>
<span>petahoous Real Estate Website Concept</span>
 </div>
 <div className='md:text-2xl mt-1'>
    Lorem ipsum dolor sit amet conseomnis animi! Excepturi, repellat neque?
    <div className='md:mt-2 mb-3'>
    <Link to={'/about'}><button className='border border-blue-800 text-red-700 rounded px-6 p-2'>semore</button></Link>   
 </div>
 </div>

 
 </div>

 {/* imge */}
 <div>
    <img className='md:block' src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' ></img>
 </div>
</div>
 {/* <gri section end></gri> */}
<div className='bg-pink-200 border'>
<div className='px-8 py-2 items-center justify-center ml-20 grid grid-cols-1 md:grid-cols-2'>
    <div className='flex md:mr-10 items-center'>
        <img src='https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'></img>

        <img src='https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'></img>
    </div>
   <div>

   </div>
 </div>
</div>
<div>

</div>
<div></div>

       </div>

       {/* <end section></end> */}
    </div>
  )
}
