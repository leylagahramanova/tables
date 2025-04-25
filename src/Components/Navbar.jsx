import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCircle } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex gap-6 top-80">
      <NavLink 
        className="link" 
        to="/live"
        activeClassName="active"
      >
        <FaCircle className='icon' />Live
      </NavLink>
      <NavLink 
        className="link" 
        to="/starlist"
        activeClassName="active"
      >
        Starlist
      </NavLink>
      <NavLink 
        className="link" 
        to="/schedule"
        activeClassName="active"
      >
        Schedule
      </NavLink>
      <NavLink 
        className="link" 
        to="/results"
        activeClassName="active"
      >
        Results
      </NavLink>
      <NavLink 
        className="link" 
        to="/medals"
        activeClassName="active"
      >
        Medals
      </NavLink>
    </nav>
  )
}

export default Navbar
