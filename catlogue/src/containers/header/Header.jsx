import React, { useState } from 'react';

import ai from '../../assets/ai.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [inp,setInput]=useState('');
  const handleChange=(event)=>{
    setInput(event.target.value);
  }

  return(
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Empowering Seamless Shopping Experiences with Unmatched Catalog Quality Assurance.</h1>

      <div className="header-content__input">
        <input type="text" onChange={handleChange} placeholder="Enter website link" />
        {/* <button type="button" onClick={}>Evaluate</button> */}
        <button type="button" ><Link to={`/evaluate/${inp}`}>Evaluate</Link></button>
      </div>
    </div>

    <div className="header-image">
      <img src={ai} />
    </div>
  </div>
);
}

export default Header;