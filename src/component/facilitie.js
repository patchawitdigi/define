import React from 'react'
import "./facilitie.css";
import vel1 from '../img/hidden/level1.jpg'
import vel3 from '../img/hidden/level3.jpg'

function facilitie() {

  function changelevel1() {
    document.getElementById("level").src = vel1
    document.getElementById("lv1").style.color = "#bf5c40"
    document.getElementById("lv3").style.color = "black"
  }
  function changelevel3() {
    document.getElementById("level").src = vel3
    document.getElementById("lv3").style.color = "#bf5c40"
    document.getElementById("lv1").style.color = "black"

  }
  return (
    <div>
      <h3 className='facilitie'>FACILITIES PLAN</h3>
      <div className='levelselect'>
        <p onClick={changelevel1} id="lv1">Level1</p>
        <p onClick={changelevel3} id="lv3">Level3</p>
      </div>
      <div className='levelimg'>
        <img src={vel1} id="level"/>
      </div>
      <div className='levelplan'>
        <div className='outdoor'>
          <h3>OUTDOOR FACILITIES</h3>
          <div className='rowout'>
            <div className='colout'>
              <p>1 Grand Arc Welcome Gate</p>
              <p>2 Guardhouse</p>
              <p>3 Pedestrian Gate</p>
              <p>4 Couture Jardin</p>
              <p>5 DEFINE Signage</p>
              <p>6 DEFINE Artwork</p>
              <p>7 Crystal Court</p>
            </div>
            <div className='colout'>
              <p>8 Ruby Terrace</p>
              <p>9 Reflexology Garden</p>
              <p>10 Emerald Terrace</p>
              <p>11 Vehical Washing Bay</p>
              <p>12 Eco Charging Point & Parking</p>
              <p>13 Amber Garden</p>
              <p>14 Amber Deck</p>
            </div>
            <div className='colout'>
              <p>15 Motorbike Parking</p>
              <p>16 L’Aventure Playground</p>
              <p>17 L’Aventure Treehouse</p>
              <p>18 Topaz Garden</p>
              <p>19 Topaz Pavilion</p>
              <p>21 Topaz Walkway</p>
            </div>
          </div>
        </div>
        <div className='indoor'>
          <h3>INDOOR FACILITIES</h3>
          <div className='rowout'>
            <div className='colout'>
              <p>36 DEFINE Grand Lobby</p>
              <p>37 Mail Room</p>
              <p>38 Diamond Lounge</p>
              <p>39 La Galerie Welcome Lounge</p>
              <p>40 Tranquillité Lounge</p>
              <p>41 La Première Co-working Lounge</p>
              <p>42 L’Aventure Kid’s Club</p>
            </div>
            <div className='colout'>
              <p>43 Privé Supercar Garage</p>
              <p>44 Automated Car Parking System</p>
            </div>
          </div>
        </div>
      </div>
      <p className='disclaimer2'>Disclaimer: Whilst every care has been taken to ensure accuracy in the preparation of the information contained herein,
        no warranties whatsoever are given, or legal representations provided in respect thereon. The Developer reserves the right
        to modify information of the development, or any part thereof as may be approved or required by the relevant authorities.</p>
    </div>
  )
}

export default facilitie