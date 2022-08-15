import React from 'react'
import "./choices.css";
import delogo from '../img/pointint/logo-menu.png'
import Floor from '../img/luxury/floor.jpg'
import Floor3 from '../img/luxury/floorlv3.png'
import Floor4 from '../img/luxury/floorlv4.jpg'
import Floor15 from '../img/luxury/floorlv15.jpg'
import Floor25 from '../img/luxury/floorlv25.jpg'
import Typical1 from '../img/luxury/typical1.jpg'
import Typical2 from '../img/luxury/typical2.jpg'

function choices() {

  function changelv3() {
    document.getElementById("floorselect").src = Floor3
    document.getElementById("floor3").style.color = "#bf5c40"
    document.getElementById("floor4").style.color = "black"
    document.getElementById("typ1").style.color = "black"
    document.getElementById("typ2").style.color = "black"
    document.getElementById("floor15").style.color = "black"
    document.getElementById("floor25").style.color = "black"
  }
  function changelv4() {
    document.getElementById("floorselect").src = Floor4
    document.getElementById("floor3").style.color = "black"
    document.getElementById("floor4").style.color = "#bf5c40"
    document.getElementById("typ1").style.color = "black"
    document.getElementById("typ2").style.color = "black"
    document.getElementById("floor15").style.color = "black"
    document.getElementById("floor25").style.color = "black"
  }
  function changetyp1() {
    document.getElementById("floorselect").src = Typical1
    document.getElementById("floor3").style.color = "black"
    document.getElementById("floor4").style.color = "black"
    document.getElementById("typ1").style.color = "#bf5c40"
    document.getElementById("typ2").style.color = "black"
    document.getElementById("floor15").style.color = "black"
    document.getElementById("floor25").style.color = "black"
  }
  function changetyp2() {
    document.getElementById("floorselect").src = Typical2
    document.getElementById("floor3").style.color = "black"
    document.getElementById("floor4").style.color = "black"
    document.getElementById("typ1").style.color = "black"
    document.getElementById("typ2").style.color = "#bf5c40"
    document.getElementById("floor15").style.color = "black"
    document.getElementById("floor25").style.color = "black"
  }
  function changelv15() {
    document.getElementById("floorselect").src = Floor15
    document.getElementById("floor3").style.color = "black"
    document.getElementById("floor4").style.color = "black"
    document.getElementById("typ1").style.color = "black"
    document.getElementById("typ2").style.color = "black"
    document.getElementById("floor15").style.color = "#bf5c40"
    document.getElementById("floor25").style.color = "black"
  }
  function changelv25() {
    document.getElementById("floorselect").src = Floor25
    document.getElementById("floor3").style.color = "black"
    document.getElementById("floor4").style.color = "black"
    document.getElementById("typ1").style.color = "black"
    document.getElementById("typ2").style.color = "black"
    document.getElementById("floor15").style.color = "black"
    document.getElementById("floor25").style.color = "#bf5c40"
  }
  return (
    <div>
      <img className='delogo' src={delogo} />
      <img className='floorbg' src={Floor} />
      <h3 className='yourown'>DEFINE A PLACE TO CALL YOUR OWN</h3>
      <div className='floorplan'>
        <div className='selectlevel'>
            <h4>FLOOR PLAN</h4>
            <p onClick={changelv3} id="floor3">LEVEL3</p>
            <p onClick={changelv4} id="floor4">LEVEL4</p>
            <p onClick={changetyp1} id="typ1">TYPICAL 1</p>
            <p onClick={changetyp2} id="typ2">TYPICAL 2</p>
            <p onClick={changelv15} id="floor15">LEVEL15</p>
            <p onClick={changelv25} id="floor25">LEVEL25</p>
        </div>
        <div className='imglevel'>
          <img src={Floor3} id="floorselect"/>
        </div>
      </div>
      <p className='disclaimer3'>Disclaimer: Whilst every care has been taken to ensure accuracy in the preparation of the information contained herein, no warranties whatsoever are given, or legal representations provided in respect thereon.</p>
    </div>
  )
}

export default choices