import React from 'react';
import '../Assets/Css/Torquee.css'
import '../App.css'
import Tag from '../Assets/Images/tag.svg'

const BottomSlider = () => {
 

  return (
    <div className="looping-slider">
      <marquee className="looping-content">
        <span className='bellow-line'><img src={Tag} alt="" className='img-fluid' />
          <span className='text-stocks'> Vinith </span>
          <span className='text-opac'> Frontend </span>
          <span className='text-stocks'> developer</span>
        </span>
        <span className='bellow-line'><img src={Tag} alt="" className='bellow-line-imgs' />
          <span className='text-stocks'> Vinith </span>
          <span className='text-opac'> Frontend </span>
          <span className='text-stocks'> developer</span>
        </span>
        <span className='bellow-line'><img src={Tag} alt="" className='bellow-line-imgs' />
          <span className='text-stocks'> Vinith </span>
          <span className='text-opac'> Frontend </span>
          <span className='text-stocks'> developer</span>
        </span>
        <span className='bellow-line'><img src={Tag} alt="" className='bellow-line-imgs' />
          <span className='text-stocks'> Vinith </span>
          <span className='text-opac'> Frontend </span>
          <span className='text-stocks'> developer</span>
        </span>


      </marquee>
    </div>
  );
};


export default BottomSlider;
