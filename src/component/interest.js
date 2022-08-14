import React from 'react'
import "./interest.css";
import gal5 from '../img/overview/gallery-5.jpeg'
import delogo from '../img/pointint/logo-menu.png'
import bgmap from '../img/pointint/background.png'


function interest() {
  return (
    <div>
        <img className='delogo' src={delogo}/>
        <img className='gal5' src={gal5}/>
        <h3 className='where'>DEFINE WHERE YOU STAY</h3>
        <div className='staymap'>
            <div className='bgmap'>
                <img src={bgmap}/>
            </div>
            <div className='point'>
                <p>SURROUNDING</p>
            </div>
        </div>
    </div>
  )
}

export default interest