import React from 'react'
import "./facilitie.css";
import vel1 from '../img/hidden/level1.jpg'
import vel3 from '../img/hidden/level3.jpg'

function facilitie() {
  return (
    <div>
        <h3 className='facilitie'>FACILITIES PLAN</h3>
        <div className='levelselect'>
            <p>Level1</p>
            <p>Level3</p>
        </div>
        <div className='levelplan'>
            <img className='levelimg' src={vel1}/>
        </div>
        <p className='disclaimer2'>Disclaimer: Whilst every care has been taken to ensure accuracy in the preparation of the information contained herein, 
            no warranties whatsoever are given, or legal representations provided in respect thereon. The Developer reserves the right 
            to modify information of the development, or any part thereof as may be approved or required by the relevant authorities.</p>
    </div>
  )
}

export default facilitie