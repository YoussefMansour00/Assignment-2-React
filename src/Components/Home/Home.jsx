import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <>
    <div className="home d-flex justify-content-center position-relative">
    <div className="content">
    <img src="/src/images/home.svg" alt="Hero Picture" className='d-block position-relative start-50 translate-middle-x'/>
    <div className="caption text-center">
    <h1 >Start React</h1>
    </div>
    <div className="editPosition position-absolute start-50 translate-middle">
    <div className="pseudo position-relative">
    <i className="fa-solid fa-star translate-middle-x fs-2 d-inline-block"></i>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
