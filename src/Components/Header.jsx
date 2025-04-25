import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
const Header = () => {
  return (
    <>
    <div className='toggle'><FaBarsStaggered/></div>
      <div className="cont">
        <div className="arrow">
          <FaArrowLeft style={{ color: 'white' }} />
        </div>
 
      <div className="header">
        <h1 className="title">FIG ARTISTIC GYMNASTICS WORLD CUP</h1>
        <p className="date">
          Doha, Qatar 
          <span className="divider">|</span>
          12/03/2023 - 13/02/2023
        </p>
      </div>
      </div>
    </>
  );
}

export default Header;
