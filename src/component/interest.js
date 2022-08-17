import React from 'react'
import "./interest.css";
import gal5 from '../img/overview/gallery-5.jpeg'
import delogo from '../img/pointint/logo-menu.png'
import bgmap from '../img/pointint/background.png'
import busi from '../img/pointint/business.png'
import capi from '../img/pointint/capital.png'
import edu from '../img/pointint/education.png'
import heal from '../img/pointint/healt.png'
import metro from '../img/pointint/metro.png'
import near from '../img/pointint/nearby.png'
import shop from '../img/pointint/shopping.png'
import sup from '../img/pointint/supermarket.png'
import surr from '../img/pointint/surround.png'


function interest() {

  function changeimg1() {
    document.getElementById("extend").src = surr
    document.getElementById("surround").style.color = "#bf5c40"
    document.getElementById("capital").style.color = "black"
    document.getElementById("educa").style.color = "black"
    document.getElementById("health").style.color = "black"
    document.getElementById("business").style.color = "black"
    document.getElementById("superma").style.color = "black"
    document.getElementById("shopen").style.color = "black"
    document.getElementById("nearby").style.color = "black"
    document.getElementById("metroline").style.color = "black"

  }
  function changeimg2() {
    document.getElementById("extend").src = capi
    document.getElementById("surround").style.color = "black"
    document.getElementById("capital").style.color = "#bf5c40"
    document.getElementById("educa").style.color = "black"
    document.getElementById("health").style.color = "black"
    document.getElementById("business").style.color = "black"
    document.getElementById("superma").style.color = "black"
    document.getElementById("shopen").style.color = "black"
    document.getElementById("nearby").style.color = "black"
    document.getElementById("metroline").style.color = "black"

  }
  function changeimg3() {
    document.getElementById("extend").src = edu
    document.getElementById("surround").style.color = "black"
    document.getElementById("capital").style.color = "black"
    document.getElementById("educa").style.color = "#bf5c40"
    document.getElementById("health").style.color = "black"
    document.getElementById("business").style.color = "black"
    document.getElementById("superma").style.color = "black"
    document.getElementById("shopen").style.color = "black"
    document.getElementById("nearby").style.color = "black"
    document.getElementById("metroline").style.color = "black"

  }
  function changeimg4() {
    document.getElementById("extend").src = heal
    document.getElementById("surround").style.color = "black"
    document.getElementById("capital").style.color = "black"
    document.getElementById("educa").style.color = "black"
    document.getElementById("health").style.color = "#bf5c40"
    document.getElementById("business").style.color = "black"
    document.getElementById("superma").style.color = "black"
    document.getElementById("shopen").style.color = "black"
    document.getElementById("nearby").style.color = "black"
    document.getElementById("metroline").style.color = "black"

  }
  function changeimg5() {
    document.getElementById("extend").src = busi
    document.getElementById("surround").style.color = "black"
    document.getElementById("capital").style.color = "black"
    document.getElementById("educa").style.color = "black"
    document.getElementById("health").style.color = "black"
    document.getElementById("business").style.color = "#bf5c40"
    document.getElementById("superma").style.color = "black"
    document.getElementById("shopen").style.color = "black"
    document.getElementById("nearby").style.color = "black"
    document.getElementById("metroline").style.color = "black"

  }
  function changeimg6() {
    document.getElementById("extend").src = sup
    document.getElementById("surround").style.color = "black"
    document.getElementById("capital").style.color = "black"
    document.getElementById("educa").style.color = "black"
    document.getElementById("health").style.color = "black"
    document.getElementById("business").style.color = "black"
    document.getElementById("superma").style.color = "#bf5c40"
    document.getElementById("shopen").style.color = "black"
    document.getElementById("nearby").style.color = "black"
    document.getElementById("metroline").style.color = "black"

  }
  function changeimg7() {
    document.getElementById("extend").src = shop
    document.getElementById("surround").style.color = "black"
    document.getElementById("capital").style.color = "black"
    document.getElementById("educa").style.color = "black"
    document.getElementById("health").style.color = "black"
    document.getElementById("business").style.color = "black"
    document.getElementById("superma").style.color = "black"
    document.getElementById("shopen").style.color = "#bf5c40"
    document.getElementById("nearby").style.color = "black"
    document.getElementById("metroline").style.color = "black"

  }
  function changeimg8() {
    document.getElementById("extend").src = near
    document.getElementById("surround").style.color = "black"
    document.getElementById("capital").style.color = "black"
    document.getElementById("educa").style.color = "black"
    document.getElementById("health").style.color = "black"
    document.getElementById("business").style.color = "black"
    document.getElementById("superma").style.color = "black"
    document.getElementById("shopen").style.color = "black"
    document.getElementById("nearby").style.color = "#bf5c40"
    document.getElementById("metroline").style.color = "black"

  }
  function changeimg9() {
    document.getElementById("extend").src = metro
    document.getElementById("surround").style.color = "black"
    document.getElementById("capital").style.color = "black"
    document.getElementById("educa").style.color = "black"
    document.getElementById("health").style.color = "black"
    document.getElementById("business").style.color = "black"
    document.getElementById("superma").style.color = "black"
    document.getElementById("shopen").style.color = "black"
    document.getElementById("nearby").style.color = "black"
    document.getElementById("metroline").style.color = "#bf5c40"

  }

  return (
    <div>
      <img className='delogo' src={delogo} />
      <img className='gal5' src={gal5} />
      <h3 className='where'>DEFINE WHERE YOU STAY</h3>
      <div className='staymap'>
        <div className='bgmap'>
          <img src={bgmap} />
        </div>
        <div className='mapextend'>
          <img src={surr} id="extend" />
        </div>

        <div className='point'>
          <ul class="menu">
            <li onClick={changeimg1}>
              <input type="radio" name="menuopt" id="drop1" />
              <label class="opener" for="drop1">SURROUNDING</label>
              <label class="closer" for="dropclose" id="surround">SURROUNDING</label>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li onClick={changeimg2}>
              <input type="radio" name="menuopt" id="drop2"/>
              <label class="opener" for="drop2">CAPITALAND PROJECTS</label>
              <label class="closer" for="dropclose" id="capital">CAPITALAND PROJECTS</label>
              <ul>
                <li>A The Vista</li>
                <li>B Vista Verde</li>
                <li>C ParcSpring</li>
                <li>D The Krista</li> 
                <li>E Kris Vue</li>
                <li>F Feliz en Vista</li>
                <li>G D2eight</li>
                <li>H D1MENSION</li>
                <li>I De La Sol</li>
                <li>J d’Edge Thao Dien</li>
                <li>K ZENITY</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li onClick={changeimg3}>
              <input type="radio" name="menuopt" id="drop3" />
              <label class="opener" for="drop3">EDUCATION</label>
              <label class="closer" for="dropclose"id="educa">EDUCATION</label>
              <ul>
                <li>1 British International School (BIS)</li>
                <li>2 International School Ho Chi Minh City (ISHCMC)</li>
                <li>3 Australian International School</li>
                <li>4 EtonHouse Kindergarden</li>
                <li>5 Saigon Star International School</li>
                <li>6 The American School (TAS)</li>
                <li>7 Luong Dinh Cua Secondary School</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li onClick={changeimg4}>
              <input type="radio" name="menuopt" id="drop4" />
              <label class="opener" for="drop4">HEALTH CARE</label>
              <label class="closer" for="dropclose" id="health">HEALTH CARE</label>
              <ul>
                <li>8 Le Van Thinh Hospital</li>
                <li>9 American International Hospital</li>
                <li>10 Victoria Healthcare</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li onClick={changeimg5}>
              <input type="radio" name="menuopt" id="drop5" />
              <label class="opener" for="drop5">BUSINESS ADMINISTRATIVE UNITS</label>
              <label class="closer" for="dropclose" id="business">BUSINESS ADMINISTRATIVE UNITS</label>
              <ul>
                <li>11 People’s Committee Thu Duc City</li>
                <li>12 Vietnam State Treasury Thu Duc City</li>
                <li>13 Police Station Thu Duc City</li>
                <li>14 Tax Department</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li onClick={changeimg6}>
              <input type="radio" name="menuopt" id="drop6" />
              <label class="opener" for="drop6">SUPERMARKET</label>
              <label class="closer" for="dropclose" id="superma">SUPERMARKET</label>
              <ul>
                <li>15 Tops Market An Phu</li>
                <li>16 Mega Market</li>
                <li>17 CoopMart</li>
                <li>18 Vinmart Diamond Island</li>
                <li>19 Annam Gourmet</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li onClick={changeimg7}>
              <input type="radio" name="menuopt" id="drop7" />
              <label class="opener" for="drop7">SHOPPING & ENTERTAINMENT</label>
              <label class="closer" for="dropclose" id="shopen">SHOPPING & ENTERTAINMENT</label>
              <ul>
                <li>20 Cantavil An Phu</li>
                <li>21 Lotte Cinema</li>
                <li>22 CGV Cinema</li>
                <li>23 Vincom Megamall Thao Dien</li>
                <li>24 Estella Place</li>
                <li>25 Faifo Lane</li>
                <li>26 Starbucks</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li onClick={changeimg8}>
              <input type="radio" name="menuopt" id="drop8" />
              <label class="opener" for="drop8">NEARBY AMENITIES</label>
              <label class="closer" for="dropclose" id="nearby">NEARBY AMENITIES</label>
              <ul>
                <li>27 Riverside Park</li>
                <li>28 Rach Chiec Golf Driving Range</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li onClick={changeimg9}>
              <input type="radio" name="menuopt" id="drop9" />
              <label class="opener" for="drop9">METRO LINES</label>
              <label class="closer" for="dropclose" id="metroline">METRO LINES</label>
              <ul>
                <li>Metro Station (Under Construction)</li>
                <li>Metro Line 2 (Under Planning)</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
          </ul>
        </div>

      </div>
      <p className='disclaimer'>Disclaimer: Whilst every care has been taken to ensure accuracy in the preparation of the information contained herein, no warranties whatsoever are given, or legal representations provided in respect thereon.</p>
    </div>
  )
}

export default interest