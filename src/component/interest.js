import React from 'react'
import "./interest.css";
import gal5 from '../img/overview/gallery-5.jpeg'
import delogo from '../img/pointint/logo-menu.png'
import bgmap from '../img/pointint/background.png'


function interest() {
  return (
    <div>
      <img className='delogo' src={delogo} />
      <img className='gal5' src={gal5} />
      <h3 className='where'>DEFINE WHERE YOU STAY</h3>
      <div className='staymap'>
        <div className='bgmap'>
          <img src={bgmap} />
        </div>

        <div className='point'>
          <ul class="menu">
            <li>
              <input type="radio" name="menuopt" id="drop1" />
              <label class="opener" for="drop1">SURROUNDING</label>
              <label class="closer" for="dropclose">SURROUNDING</label>
            </li>
            <li>
              <input type="radio" name="menuopt" id="drop2" />
              <label class="opener" for="drop2">CAPITALAND PROJECTS</label>
              <label class="closer" for="dropclose">CAPITALAND PROJECTS</label>
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
            <li>
              <input type="radio" name="menuopt" id="drop3" />
              <label class="opener" for="drop3">EDUCATION</label>
              <label class="closer" for="dropclose">EDUCATION</label>
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
            <li>
              <input type="radio" name="menuopt" id="drop4" />
              <label class="opener" for="drop4">HEALTH CARE</label>
              <label class="closer" for="dropclose">HEALTH CARE</label>
              <ul>
                <li>8 Le Van Thinh Hospital</li>
                <li>9 American International Hospital</li>
                <li>10 Victoria Healthcare</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li>
              <input type="radio" name="menuopt" id="drop5" />
              <label class="opener" for="drop5">BUSINESS ADMINISTRATIVE UNITS</label>
              <label class="closer" for="dropclose">BUSINESS ADMINISTRATIVE UNITS</label>
              <ul>
                <li>11 People’s Committee Thu Duc City</li>
                <li>12 Vietnam State Treasury Thu Duc City</li>
                <li>13 Police Station Thu Duc City</li>
                <li>14 Tax Department</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li>
              <input type="radio" name="menuopt" id="drop6" />
              <label class="opener" for="drop6">SUPERMARKET</label>
              <label class="closer" for="dropclose">SUPERMARKET</label>
              <ul>
                <li>15 Tops Market An Phu</li>
                <li>16 Mega Market</li>
                <li>17 CoopMart</li>
                <li>18 Vinmart Diamond Island</li>
                <li>19 Annam Gourmet</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li>
              <input type="radio" name="menuopt" id="drop7" />
              <label class="opener" for="drop7">SHOPPING & ENTERTAINMENT</label>
              <label class="closer" for="dropclose">SHOPPING & ENTERTAINMENT</label>
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
            <li>
              <input type="radio" name="menuopt" id="drop8" />
              <label class="opener" for="drop8">NEARBY AMENITIES</label>
              <label class="closer" for="dropclose">NEARBY AMENITIES</label>
              <ul>
                <li>27 Riverside Park</li>
                <li>28 Rach Chiec Golf Driving Range</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
            <li>
              <input type="radio" name="menuopt" id="drop9" />
              <label class="opener" for="drop9">METRO LINES</label>
              <label class="closer" for="dropclose">METRO LINES</label>
              <ul>
                <li>Metro Station (Under Construction)</li>
                <li>Metro Line 2 (Under Planning)</li>
              </ul>
              <input type="radio" name="menuopt" id="dropclose" />
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default interest