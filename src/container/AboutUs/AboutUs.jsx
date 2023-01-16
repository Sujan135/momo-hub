import React from 'react';

import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
  <div className='app__aboutUs app__wrapper ' id='about'> 
    <div className='app__aboutus-content flex__center'>
      <div app__aboutus-content_about>
        <h1 className='headtext__cormorant' style={{color:'#0C0C0C'}}>About Us</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}>Momo is a dish with origins from Tibet or Nepal. They are bite-size dumplings made with a spoonful of stuffing wrapped in dough. 
        <br/>Usually steamed, though they are sometimes fried or steam-fried. The dish has spread to China, Nepal and India.</p>
        <button type='button' className='custom__button'>Know Me</button>

        <div className='app__aboutus-img'>
          <img  src={images.About} alt='momo'/>
        </div>
        
        <div>
          <ul className='app__aboutus-links'>
            <li className='p__opensans'><a href='#origin'>Origin</a></li>
            <li className='p__opensans'><a href='#description'>Description</a></li>
            <li className='p__opensans'><a href='#production'>Production</a></li>
            <li className='p__opensans'><a href='#varieties'>Varieties</a></li>
          </ul>
       </div>
     </div>
  </div>
</div>
);

export default AboutUs;
