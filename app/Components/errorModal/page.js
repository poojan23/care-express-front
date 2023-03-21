"use client"
import Link from 'next/link'
import { useState, useEffect , useRef } from 'react'

const page = ({text ,errorState}) => {

  const [errorModal, setErrorModal]= useState(errorState)

  const closeErrorRef = useRef(null);
  
  const handleErrorClose = (e) => {   
  if(closeErrorRef.current === e.target) setErrorModal(false) 
  }

  useEffect(()=>{
    document.addEventListener("click", handleErrorClose, true);
    return () => document.removeEventListener("click", handleErrorClose , true) 
  },[])
  

  return (
    <>
{ errorModal &&
<section className='fixed top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%] w-full h-full  z-50 flex items-center justify-center   bg-dashoverlay overflow-hidden' ref={closeErrorRef}> 
<main className='flex flex-col gap-[12px]  rounded-[8px] h-max w-[564px] bg-soothingyellow py-4 px-6 shadow-dashshadow' >

  <div className='flex items-center gap-3'>
  <img src='../images/booking/infoIcon.svg' className='w-5 h-5'/>
  <h6 className='text-[15px] font-bold '>NOTE</h6>
  </div>

<h6 className=''>{text}</h6>

</main>
</section> 
}

</>
 )
}

export default page