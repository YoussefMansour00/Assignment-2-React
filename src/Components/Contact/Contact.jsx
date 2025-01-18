import React from 'react'
import "./Contact.js"
import "./Contact.css"
export default function Contact() {
  return (
    <>
    <section id='contactSec'>
    <h2 className='headingContact text-center text-uppercase'>contact me</h2>
    <div className="psodoContact mx-auto position-relative">
        <i className="fa-solid fa-star fs-2 start-50 translate-middle-x"></i>
        </div>
        <div className="inputs p-5 container-fluid container-md">
        <form id='myForm'>
        <div className="row d-flex justify-content-center g-4">
         <div className=" col-md-9">
         <input type="text" className=' p-2 ps-5 w-100' autoComplete='off' placeholder='Name' name='Name'/>
         </div>
         <div className=" col-md-9">
         <input type="email" className=' p-2 ps-5 w-100' autoComplete='off' placeholder='Email Address' name='EmailAddress'/>
         </div>
         <div className=" col-md-9">
         <input type="tel" className=' p-2 ps-5 w-100' autoComplete='off' placeholder='Phone Number' name='PhoneNumber'/>
         </div>
         <div className=" col-md-9">
         <input type="text" className=' p-2 ps-5 w-100' autoComplete='off' placeholder='Message' name='Message'/>
         </div>
         </div>
         <button id='submitBtn' type='submit'>Send</button>
         </form>
        </div>
        </section>
    </>
  )
}
