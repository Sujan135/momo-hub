import React from 'react';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.logo} alt='app logo'/>
    </div>
    <div className='app__navbar-search'>
    <input type='email' placeholder='Search For Foods'/>
    <button  type='button'>Search</button>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#blog'>Blog</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>Log In / Register</a>
      <div />
      <a href='/' className='p__opensans'>Book Table</a>
    </div>

  </nav>
);

export default Navbar;
