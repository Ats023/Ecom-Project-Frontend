import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Layout() {
  return (
    <div>
         <NavBar/>
         <Outlet/>
    </div>
  )
}

export default Layout