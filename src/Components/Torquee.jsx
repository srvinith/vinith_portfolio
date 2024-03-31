import React from 'react';
import '../Assets/Css/Torquee.css'
import Torqueestar from '../Assets/Images/torquue-star.svg'

const Torquee = () => {


    return (
        <div className="looping-slider">
          <marquee className="looping-content">
          <span><img src={Torqueestar} alt="" className='img-fluid' /> "Mad  <span className='text-stock'>Skills</span> I Master Like a Jedi!"</span>
          <span><img src={Torqueestar} alt="" className='img-fluid' /> "Mad  <span className='text-stock'>Skills</span> I Master Like a Jedi!"</span>
          <span><img src={Torqueestar} alt="" className='img-fluid' /> "Mad  <span className='text-stock'>Skills</span> I Master Like a Jedi!"</span>
          </marquee>
        </div>
      );
};

export default Torquee;
