import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'

import {createBrowserRouter ,createHashRouter,RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import CopyRight from './Components/CopyRight/CopyRight.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'

export default function App() {

  const router = createHashRouter([
  {path:'' ,element:<Layout/> ,children:[{path:'', element:<Home/>},
    {path:'Portfolio', element:<Portfolio/>},
    {path:'About', element:<About/>},
    {path:'contactSec', element:<Contact/>},
    {path:'*', element:<NotFound/>}]}
  ])

  return (
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
  )
}

{/* <Home/>
<Portfolio/>
<About/>
<Contact/> */}