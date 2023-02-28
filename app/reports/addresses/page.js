"use client"
import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import SubDashboardNav from '../../Components/subdashboardNav/page'
import { useState } from 'react'

const page = () => {

  const [form, setForm] = useState({
    title: "",
    streetName:'',
    streetNumber:'',
    apartmentNumber:'',
    postalCode:'',
    city:'',
  });

  const {title,streetName,streetNumber,apartmentNumber,postalCode,city}=form

  const formDetails = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addressSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    
    myForm.set("title", title);
    myForm.set("street_number", streetNumber);
    myForm.set("street_name", streetName);
    myForm.set("postal_code", postalCode);
    myForm.set("city", city);
    myForm.set("apartment_number", apartmentNumber);
    setFormToggle(!formToggle)
    //dispatch(register(myForm));
  };

  const [formToggle,setFormToggle]=useState(false)

  function editToggle(){
  setFormToggle(!formToggle)
  }



  return (
    <>
{formToggle && <section className='sticky top-0 left-0  h-screen z-50 flex items-center justify-center   bg-dashoverlay overflow-hidden'>
<form className='flex flex-col gap-[22px]  rounded-[16px] h-max w-[564px] bg-soothingyellow p-7' onSubmit={addressSubmit}>
<h6 className='text-[20px] font-semibold mb-2'>Edit Address 1</h6>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Save as</h6>
<input style={{border:'1px solid #C8CACD'}} name='title' required value={title} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none '/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Street Name</h6>
<input style={{border:'1px solid #C8CACD'}} name='streetName' required value={streetName} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Street Number</h6>
<input style={{border:'1px solid #C8CACD'}} type='number' name='streetNumber' required value={streetNumber} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Apartment Number(optional)</h6>
<input style={{border:'1px solid #C8CACD'}}  name='apartmentNumber' value={apartmentNumber} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>


<section className='flex gap-4 '>
<div className='w-[50%]'>
<h6 className='text-[14px] mb-[6px]'>Postal Code</h6>
<input style={{border:'1px solid #C8CACD'}} name='postalCode' required value={postalCode} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className='w-[50%]'>
<h6 className='text-[14px] mb-[6px]'>City / Town</h6>
<input style={{border:'1px solid #C8CACD'}} name='city' required value={city}  onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>
</section>

<section className='flex justify-end gap-[10px] mt-[20px]'>
<button className='p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' onClick={editToggle}>CANCEL</button>
<input type='submit' className='bg-dashyellow p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' value='SAVE' />
</section>

</form>

</section>}









<div className='bg-specialbg h-screen absolute top-0 w-full '>
<Head title='Reports' />
<main className='pt-8 ml-auto mr-auto w-[92%]'>
<DashboardNav navTitle='Reports'/>

<SubDashboardNav/>
<section className='flex gap-6 mt-10 flex-wrap'>

<div className='bg-white px-6 py-6 w-[245px] rounded-[14px] shadow-md cursor-pointer'>
  <h6 className='flex font-semibold text-[20px] mb-2'>Address 1</h6>
  <h6 className='text-xs mb-2 text-[20px] w-[80%] leading-4 tracking-wider'>Targowa 20a, 03-727 Warszawa, Poland</h6>
  <div className='flex mt-4'><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg'/><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg' onClick={editToggle}/></div>
</div>

</section>
</main>
</div>

    </>
  )
}

export default page