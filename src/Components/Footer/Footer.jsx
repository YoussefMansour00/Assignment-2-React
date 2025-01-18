import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
    <section id='Footer'>
     <div className="container-fluid container-md">
     <div className="row">
            <div className=" col-lg-4 p-4">
                <div className="myContent text-center">
                <h4 className=' text-uppercase'>Location</h4>
                <div className="paraContext mx-auto">
                <p className='fs-6'>2215 John Daniel Drive
                Clark, MO 65243</p>
                </div>
                </div>
            </div>
            <div className=" col-lg-4 p-4">
                <div className="myContent text-center">
                <h4 className=' text-uppercase'>Around The Web</h4>
                <div className="logos">
                    <ul className=' p-3 pt-4 mx-auto d-flex justify-content-between align-items-center'>
                        <li className=' position-relative'><a target='_blank' href="https://www.facebook.com/"><i className=" position-absolute top-50 start-50 translate-middle fa-brands fa-facebook-f"></i></a></li>
                        <li className=' position-relative'><a target='_blank' href="https://x.com/"><i className=" position-absolute top-50 start-50 translate-middle fa-brands fa-twitter"></i></a></li>
                        <li className=' position-relative'><a target='_blank' href="https://www.linkedin.com/"><i className=" position-absolute top-50 start-50 translate-middle fa-brands fa-linkedin-in"></i></a></li>
                        <li className=' position-relative'><a target='_blank' href="https://www.youtube.com/"><i className=" position-absolute top-50 start-50 translate-middle fa-brands fa-youtube"></i></a></li>

                    </ul>
                </div>
                </div>
            </div>
            <div className=" col-lg-4 p-4">
                <div className="myContent text-center">
                <h4 className=' text-uppercase'>About Freelancer</h4>
                <p id='paraFooter' className=' fs-6 text-center mx-auto'>Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
                </div>
            </div>
        </div>
     </div>
    </section>
    </>
  )
}
