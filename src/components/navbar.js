import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    // const navLinkStyles = ({isActive})=>{
    //     return {
    //         fontWeight: isActive? 'bold': 'normal'
    //     }
    // }
  return (
     <nav className='primary-nav' >
        <NavLink to="/home"  >Home</NavLink>
        <NavLink to="/about"  >About</NavLink>
        <NavLink to="/products/featured"  >Products</NavLink>
     </nav>
  )
}

