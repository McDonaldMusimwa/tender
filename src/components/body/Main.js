import React from 'react';
import './Main.css';
import coffee from '../../assets/coffee.jpg';
import location from '../../assets/location.jpg';
import ipad from '../../assets/ipad.jpg';

const Main = () => {
  return (
    <div className='main'>
        <h2>What are you looking for</h2>
        <div className='outter'>
            <div className='container'>
                <img src={coffee} alt='coffee' className='image'/>
                <div className="overlay">My Name is John</div>
            </div>
            <div className='container'>
                <img src={location} alt='location' className='image'/>
                <div className="overlay">My Name is John</div>
            </div>
            <div className='container'>
                <img src={ipad} alt='ipad' className='image'/>
                <div className="overlay">My Name is John</div>
            </div>

            
        </div>

    </div>
  )
}

export default Main