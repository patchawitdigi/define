import React from 'react'
import "./choices.css";
import delogo from '../img/pointint/logo-menu.png'
import Floor from '../img/luxury/floor.jpg'

function choices() {
  return (
    <div>
      <img className='delogo' src={delogo} />
      <img className='floorbg' src={Floor} />
      <h3 className='yourown'>DEFINE A PLACE TO CALL YOUR OWN</h3>
      <div className='floorplan'>
        <div className='selectlevel'>
            <h4>FLOOR PLAN</h4>
        </div>
        <div className='imglevel'>

        </div>
      </div>
    </div>
  )
}

export default choices