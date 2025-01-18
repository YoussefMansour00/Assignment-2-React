import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav id='NavBar' className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 z-2">
  <div className="container-fluid container-md p-4 position-relative">
    <Link className="navbar-brand fs-2" to="/">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav position-absolute end-0 d-flex justify-content-between">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Portfolio">PORTFOLIO</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactSec">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
