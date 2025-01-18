import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CopyRight from '../CopyRight/CopyRight'
import {Outlet} from 'react-router-dom'


export default function Layout() {
  return (
    <>
    <header>
        <Navbar/>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer>
        <Footer/>
        <CopyRight/>
    </footer>
    </>
  )
}
