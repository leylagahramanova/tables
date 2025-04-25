import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCircle } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex gap-6 top-80">
      <NavLink 
        className="link" 
        to="/live"
        activeclassname="active"
      >
        <FaCircle className='icon' />Live
      </NavLink>
      <NavLink 
        className="link" 
        to="/starlist"
        activeclassname="active"
      >
        Starlist
      </NavLink>
      <NavLink 
        className="link" 
        to="/schedule"
        activeclassname="active"
      >
        Schedule
      </NavLink>
      <NavLink 
        className="link" 
        to="/results"
        activeclassname="active"
      >
        Results
      </NavLink>
      <NavLink 
        className="link" 
        to="/medals"
        activeclassname="active"
      >
        Medals
      </NavLink>
    </nav>
  )
}

export default Navbar
