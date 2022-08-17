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
import { BsPlusCircle } from "react-icons/bs"
import Lv3_1 from '../img/luxury/lv3unit1.jpg'
import Lv3_2 from '../img/luxury/lv3unit2.jpg'

function choices() {

  function changelv3() {
    document.getElementById("floorselect").src = Floor3
    document.getElementById("floor3").style.color = "#bf5c40"
    document.getElementById("floor4").style.color = "black"
    document.getElementById("typ1").style.color = "black"
    document.getElementById("typ2").style.color = "black"
    document.getElementById("floor15").style.color = "black"
    document.getElementById("floor25").style.color = "black"
    document.getElementById("plus3-1").style.display = "block"
    document.getElementById("plus3-2").style.display = "block"
    document.getElementById("plus4-1").style.display = "none"
    document.getElementById("plus4-2").style.display = "none"
    document.getElementById("plus4-3").style.display = "none"
    document.getElementById("plus4-4").style.display = "none"
    document.getElementById("plus1-1").style.display = "none"
    document.getElementById("plus1-2").style.display = "none"
    document.getElementById("plus1-3").style.display = "none"
    document.getElementById("plus1-4").style.display = "none"
    document.getElementById("plus2-1").style.display = "none"
    document.getElementById("plus2-2").style.display = "none"
    document.getElementById("plus2-3").style.display = "none"
    document.getElementById("plus2-4").style.display = "none"
    document.getElementById("plus15-1").style.display = "none"
    document.getElementById("plus15-2").style.display = "none"
    document.getElementById("plus15-3").style.display = "none"
    document.getElementById("plus15-4").style.display = "none"
    document.getElementById("plus25-1").style.display = "none"
    document.getElementById("plus25-2").style.display = "none"
  }
  function changelv4() {
    document.getElementById("floorselect").src = Floor4
    document.getElementById("floor3").style.color = "black"
    document.getElementById("floor4").style.color = "#bf5c40"
    document.getElementById("typ1").style.color = "black"
    document.getElementById("typ2").style.color = "black"
    document.getElementById("floor15").style.color = "black"
    document.getElementById("floor25").style.color = "black"
    document.getElementById("plus3-1").style.display = "none"
    document.getElementById("plus3-2").style.display = "none"
    document.getElementById("plus4-1").style.display = "block"
    document.getElementById("plus4-2").style.display = "block"
    document.getElementById("plus4-3").style.display = "block"
    document.getElementById("plus4-4").style.display = "block"
    document.getElementById("plus1-1").style.display = "none"
    document.getElementById("plus1-2").style.display = "none"
    document.getElementById("plus1-3").style.display = "none"
    document.getElementById("plus1-4").style.display = "none"
    document.getElementById("plus2-1").style.display = "none"
    document.getElementById("plus2-2").style.display = "none"
    document.getElementById("plus2-3").style.display = "none"
    document.getElementById("plus2-4").style.display = "none"
    document.getElementById("plus15-1").style.display = "none"
    document.getElementById("plus15-2").style.display = "none"
    document.getElementById("plus15-3").style.display = "none"
    document.getElementById("plus15-4").style.display = "none"
    document.getElementById("plus25-1").style.display = "none"
    document.getElementById("plus25-2").style.display = "none"

  }
  function changetyp1() {
    document.getElementById("floorselect").src = Typical1
    document.getElementById("floor3").style.color = "black"
    document.getElementById("floor4").style.color = "black"
    document.getElementById("typ1").style.color = "#bf5c40"
    document.getElementById("typ2").style.color = "black"
    document.getElementById("floor15").style.color = "black"
    document.getElementById("floor25").style.color = "black"
    document.getElementById("plus3-1").style.display = "none"
    document.getElementById("plus3-2").style.display = "none"
    document.getElementById("plus4-1").style.display = "none"
    document.getElementById("plus4-2").style.display = "none"
    document.getElementById("plus4-3").style.display = "none"
    document.getElementById("plus4-4").style.display = "none"
    document.getElementById("plus1-1").style.display = "block"
    document.getElementById("plus1-2").style.display = "block"
    document.getElementById("plus1-3").style.display = "block"
    document.getElementById("plus1-4").style.display = "block"
    document.getElementById("plus2-1").style.display = "none"
    document.getElementById("plus2-2").style.display = "none"
    document.getElementById("plus2-3").style.display = "none"
    document.getElementById("plus2-4").style.display = "none"
    document.getElementById("plus15-1").style.display = "none"
    document.getElementById("plus15-2").style.display = "none"
    document.getElementById("plus15-3").style.display = "none"
    document.getElementById("plus15-4").style.display = "none"
    document.getElementById("plus25-1").style.display = "none"
    document.getElementById("plus25-2").style.display = "none"

  }
  function changetyp2() {
    document.getElementById("floorselect").src = Typical2
    document.getElementById("floor3").style.color = "black"
    document.getElementById("floor4").style.color = "black"
    document.getElementById("typ1").style.color = "black"
    document.getElementById("typ2").style.color = "#bf5c40"
    document.getElementById("floor15").style.color = "black"
    document.getElementById("floor25").style.color = "black"
    document.getElementById("plus3-1").style.display = "none"
    document.getElementById("plus3-2").style.display = "none"
    document.getElementById("plus4-1").style.display = "none"
    document.getElementById("plus4-2").style.display = "none"
    document.getElementById("plus4-3").style.display = "none"
    document.getElementById("plus4-4").style.display = "none"
    document.getElementById("plus1-1").style.display = "none"
    document.getElementById("plus1-2").style.display = "none"
    document.getElementById("plus1-3").style.display = "none"
    document.getElementById("plus1-4").style.display = "none"
    document.getElementById("plus2-1").style.display = "block"
    document.getElementById("plus2-2").style.display = "block"
    document.getElementById("plus2-3").style.display = "block"
    document.getElementById("plus2-4").style.display = "block"
    document.getElementById("plus15-1").style.display = "none"
    document.getElementById("plus15-2").style.display = "none"
    document.getElementById("plus15-3").style.display = "none"
    document.getElementById("plus15-4").style.display = "none"
    document.getElementById("plus25-1").style.display = "none"
    document.getElementById("plus25-2").style.display = "none"
  }
  function changelv15() {
    document.getElementById("floorselect").src = Floor15
    document.getElementById("floor3").style.color = "black"
    document.getElementById("floor4").style.color = "black"
    document.getElementById("typ1").style.color = "black"
    document.getElementById("typ2").style.color = "black"
    document.getElementById("floor15").style.color = "#bf5c40"
    document.getElementById("floor25").style.color = "black"
    document.getElementById("plus3-1").style.display = "none"
    document.getElementById("plus3-2").style.display = "none"
    document.getElementById("plus4-1").style.display = "none"
    document.getElementById("plus4-2").style.display = "none"
    document.getElementById("plus4-3").style.display = "none"
    document.getElementById("plus4-4").style.display = "none"
    document.getElementById("plus1-1").style.display = "none"
    document.getElementById("plus1-2").style.display = "none"
    document.getElementById("plus1-3").style.display = "none"
    document.getElementById("plus1-4").style.display = "none"
    document.getElementById("plus2-1").style.display = "none"
    document.getElementById("plus2-2").style.display = "none"
    document.getElementById("plus2-3").style.display = "none"
    document.getElementById("plus2-4").style.display = "none"
    document.getElementById("plus15-1").style.display = "block"
    document.getElementById("plus15-2").style.display = "block"
    document.getElementById("plus15-3").style.display = "block"
    document.getElementById("plus15-4").style.display = "block"
    document.getElementById("plus25-1").style.display = "none"
    document.getElementById("plus25-2").style.display = "none"
  }
  function changelv25() {
    document.getElementById("floorselect").src = Floor25
    document.getElementById("floor3").style.color = "black"
    document.getElementById("floor4").style.color = "black"
    document.getElementById("typ1").style.color = "black"
    document.getElementById("typ2").style.color = "black"
    document.getElementById("floor15").style.color = "black"
    document.getElementById("floor25").style.color = "#bf5c40"
    document.getElementById("plus3-1").style.display = "none"
    document.getElementById("plus3-2").style.display = "none"
    document.getElementById("plus4-1").style.display = "none"
    document.getElementById("plus4-2").style.display = "none"
    document.getElementById("plus4-3").style.display = "none"
    document.getElementById("plus4-4").style.display = "none"
    document.getElementById("plus1-1").style.display = "none"
    document.getElementById("plus1-2").style.display = "none"
    document.getElementById("plus1-3").style.display = "none"
    document.getElementById("plus1-4").style.display = "none"
    document.getElementById("plus2-1").style.display = "none"
    document.getElementById("plus2-2").style.display = "none"
    document.getElementById("plus2-3").style.display = "none"
    document.getElementById("plus2-4").style.display = "none"
    document.getElementById("plus15-1").style.display = "none"
    document.getElementById("plus15-2").style.display = "none"
    document.getElementById("plus15-3").style.display = "none"
    document.getElementById("plus15-4").style.display = "none"
    document.getElementById("plus25-1").style.display = "block"
    document.getElementById("plus25-2").style.display = "block"
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
          <img src={Floor3} id="floorselect" />
        </div>
        <BsPlusCircle size="3.5vw" id='plus3-1' />
        <BsPlusCircle size="3.5vw" id='plus3-2' />
        <BsPlusCircle size="3.5vw" id='plus4-1' />
        <BsPlusCircle size="3.5vw" id='plus4-2' />
        <BsPlusCircle size="3.5vw" id='plus4-3' />
        <BsPlusCircle size="3.5vw" id='plus4-4' />
        <BsPlusCircle size="3.5vw" id='plus1-1' />
        <BsPlusCircle size="3.5vw" id='plus1-2' />
        <BsPlusCircle size="3.5vw" id='plus1-3' />
        <BsPlusCircle size="3.5vw" id='plus1-4' />
        <BsPlusCircle size="3.5vw" id='plus2-1' />
        <BsPlusCircle size="3.5vw" id='plus2-2' />
        <BsPlusCircle size="3.5vw" id='plus2-3' />
        <BsPlusCircle size="3.5vw" id='plus2-4' />
        <BsPlusCircle size="3.5vw" id='plus15-1' />
        <BsPlusCircle size="3.5vw" id='plus15-2' />
        <BsPlusCircle size="3.5vw" id='plus15-3' />
        <BsPlusCircle size="3.5vw" id='plus15-4' />
        <BsPlusCircle size="3.5vw" id='plus25-1' />
        <BsPlusCircle size="3.5vw" id='plus25-2' />
      </div>
      <p className='disclaimer3'>Disclaimer: Whilst every care has been taken to ensure
        accuracy in the preparation of the information contained herein, no
        warranties whatsoever are given, or legal representations provided in
        respect thereon.</p>
      <div className='planpopup'>
        <div className='plandetail'>
          <div className='popuplogo'>
            <div className='borderdetail '>
              <img src={delogo} />
            </div>
            <div className='borderdetail'>
              <h4>UNIT TYPE</h4>
              <p>4 BEDROOM - D</p>
            </div>
            <div className='borderdetail'>
              <h4>LEVEL NO.</h4>
              <p>03</p>
            </div>
            <div className='borderdetail'>
              <h4>UNIT NO.</h4>
              <p>01</p>
            </div>
            <div className='borderdetail'>
              <h4>NET FLOOR AREA</h4>
              <p>285.5sqm</p>
            </div>
            <div className='borderdetail'>
              <h4>GROSS FLOOR AREA</h4>
              <p>315.7sqm</p>
            </div>
          </div>
          <div className='planimg'>
            <img src={Lv3_1} />
          </div>
        </div>
        <p>Disclaimer: Whilst every care has been taken to ensure accuracy
          in the preparation of the information contained herein, no warranties
          whatsoever are given, or legal representations provided in respect
          thereon. The Developer reserves the right to modify information of
          the development, or any part thereof as may be approved or required
          by the relevant authorities.</p>
      </div>
    </div>
  )
}

export default choices