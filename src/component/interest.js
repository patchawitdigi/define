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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Interest() {

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
    var liblock = document.querySelectorAll("#liblock")
    for (var i = 0; i < liblock.length; i++) {
      liblock[i].style.display = "none"
    }
    document.getElementById("rotatep").style.transform = "rotate(45deg)"
    document.getElementById("rotatep0").style.transform = "rotate(0deg)"
    document.getElementById("rotatep1").style.transform = "rotate(0deg)"
    document.getElementById("rotatep2").style.transform = "rotate(0deg)"
    document.getElementById("rotatep3").style.transform = "rotate(0deg)"
    document.getElementById("rotatep4").style.transform = "rotate(0deg)"
    document.getElementById("rotatep5").style.transform = "rotate(0deg)"
    document.getElementById("rotatep6").style.transform = "rotate(0deg)"
    document.getElementById("rotatep7").style.transform = "rotate(0deg)";

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
    var liblock = document.querySelectorAll("#liblock")
    if (liblock[0].style.display == "block") { // if is menuBox displayed, hide it
      liblock[0].style.display = "none";
      document.getElementById("rotatep0").style.transform = "rotate(0deg)";
    }
    else { // if is menuBox hidden, display it
      for (var i = 0; i < liblock.length; i++) {
        liblock[i].style.display = "none"
      }
      liblock[0].style.display = "block"
      document.getElementById("rotatep").style.transform = "rotate(0deg)"
      document.getElementById("rotatep0").style.transform = "rotate(45deg)"
      document.getElementById("rotatep1").style.transform = "rotate(0deg)"
      document.getElementById("rotatep2").style.transform = "rotate(0deg)"
      document.getElementById("rotatep3").style.transform = "rotate(0deg)"
      document.getElementById("rotatep4").style.transform = "rotate(0deg)"
      document.getElementById("rotatep5").style.transform = "rotate(0deg)"
      document.getElementById("rotatep6").style.transform = "rotate(0deg)"
      document.getElementById("rotatep7").style.transform = "rotate(0deg)";
    }

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
    var liblock = document.querySelectorAll("#liblock")
    if (liblock[1].style.display == "block") { // if is menuBox displayed, hide it
      liblock[1].style.display = "none";
      document.getElementById("rotatep1").style.transform = "rotate(0deg)"
    }
    else { // if is menuBox hidden, display it
      for (var i = 0; i < liblock.length; i++) {
        liblock[i].style.display = "none"
      }
      liblock[1].style.display = "block"
      document.getElementById("rotatep").style.transform = "rotate(0deg)"
      document.getElementById("rotatep0").style.transform = "rotate(0deg)"
      document.getElementById("rotatep1").style.transform = "rotate(45deg)"
      document.getElementById("rotatep2").style.transform = "rotate(0deg)"
      document.getElementById("rotatep3").style.transform = "rotate(0deg)"
      document.getElementById("rotatep4").style.transform = "rotate(0deg)"
      document.getElementById("rotatep5").style.transform = "rotate(0deg)"
      document.getElementById("rotatep6").style.transform = "rotate(0deg)"
      document.getElementById("rotatep7").style.transform = "rotate(0deg)"
        ;
    }
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
    var liblock = document.querySelectorAll("#liblock")
    if (liblock[2].style.display == "block") { // if is menuBox displayed, hide it
      liblock[2].style.display = "none";
      document.getElementById("rotatep2").style.transform = "rotate(0deg)"
    }
    else { // if is menuBox hidden, display it
      for (var i = 0; i < liblock.length; i++) {
        liblock[i].style.display = "none"
      }
      liblock[2].style.display = "block"
      document.getElementById("rotatep").style.transform = "rotate(0deg)"
      document.getElementById("rotatep0").style.transform = "rotate(0deg)"
      document.getElementById("rotatep1").style.transform = "rotate(0deg)"
      document.getElementById("rotatep2").style.transform = "rotate(45deg)"
      document.getElementById("rotatep3").style.transform = "rotate(0deg)"
      document.getElementById("rotatep4").style.transform = "rotate(0deg)"
      document.getElementById("rotatep5").style.transform = "rotate(0deg)"
      document.getElementById("rotatep6").style.transform = "rotate(0deg)"
      document.getElementById("rotatep7").style.transform = "rotate(0deg)"
    }
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
    var liblock = document.querySelectorAll("#liblock")
    if (liblock[3].style.display == "block") { // if is menuBox displayed, hide it
      liblock[3].style.display = "none";
      document.getElementById("rotatep3").style.transform = "rotate(0deg)"
    }
    else { // if is menuBox hidden, display it
      for (var i = 0; i < liblock.length; i++) {
        liblock[i].style.display = "none"
      }
      liblock[3].style.display = "block"
      document.getElementById("rotatep").style.transform = "rotate(0deg)"
      document.getElementById("rotatep0").style.transform = "rotate(0deg)"
      document.getElementById("rotatep1").style.transform = "rotate(0deg)"
      document.getElementById("rotatep2").style.transform = "rotate(0deg)"
      document.getElementById("rotatep3").style.transform = "rotate(45deg)"
      document.getElementById("rotatep4").style.transform = "rotate(0deg)"
      document.getElementById("rotatep5").style.transform = "rotate(0deg)"
      document.getElementById("rotatep6").style.transform = "rotate(0deg)"
      document.getElementById("rotatep7").style.transform = "rotate(0deg)"
    }
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
    var liblock = document.querySelectorAll("#liblock")
    if (liblock[4].style.display == "block") { // if is menuBox displayed, hide it
      liblock[4].style.display = "none";
      document.getElementById("rotatep4").style.transform = "rotate(0deg)"
    }
    else { // if is menuBox hidden, display it
      for (var i = 0; i < liblock.length; i++) {
        liblock[i].style.display = "none"
      }
      liblock[4].style.display = "block"
      document.getElementById("rotatep").style.transform = "rotate(0deg)"
      document.getElementById("rotatep0").style.transform = "rotate(0deg)"
      document.getElementById("rotatep1").style.transform = "rotate(0deg)"
      document.getElementById("rotatep2").style.transform = "rotate(0deg)"
      document.getElementById("rotatep3").style.transform = "rotate(0deg)"
      document.getElementById("rotatep4").style.transform = "rotate(45deg)"
      document.getElementById("rotatep5").style.transform = "rotate(0deg)"
      document.getElementById("rotatep6").style.transform = "rotate(0deg)"
      document.getElementById("rotatep7").style.transform = "rotate(0deg)"
    }
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
    var liblock = document.querySelectorAll("#liblock")
    if (liblock[5].style.display == "block") { // if is menuBox displayed, hide it
      liblock[5].style.display = "none";
      document.getElementById("rotatep5").style.transform = "rotate(0deg)"
    }
    else { // if is menuBox hidden, display it
      for (var i = 0; i < liblock.length; i++) {
        liblock[i].style.display = "none"
      }
      liblock[5].style.display = "block"
      document.getElementById("rotatep").style.transform = "rotate(0deg)"
      document.getElementById("rotatep0").style.transform = "rotate(0deg)"
      document.getElementById("rotatep1").style.transform = "rotate(0deg)"
      document.getElementById("rotatep2").style.transform = "rotate(0deg)"
      document.getElementById("rotatep3").style.transform = "rotate(0deg)"
      document.getElementById("rotatep4").style.transform = "rotate(0deg)"
      document.getElementById("rotatep5").style.transform = "rotate(45deg)"
      document.getElementById("rotatep6").style.transform = "rotate(0deg)"
      document.getElementById("rotatep7").style.transform = "rotate(0deg)"
    }
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
    var liblock = document.querySelectorAll("#liblock")
    if (liblock[6].style.display == "block") { // if is menuBox displayed, hide it
      liblock[6].style.display = "none";
      document.getElementById("rotatep6").style.transform = "rotate(0deg)"
    }
    else { // if is menuBox hidden, display it
      for (var i = 0; i < liblock.length; i++) {
        liblock[i].style.display = "none"

      }
      liblock[6].style.display = "block"
      document.getElementById("rotatep").style.transform = "rotate(0deg)"
      document.getElementById("rotatep0").style.transform = "rotate(0deg)"
      document.getElementById("rotatep1").style.transform = "rotate(0deg)"
      document.getElementById("rotatep2").style.transform = "rotate(0deg)"
      document.getElementById("rotatep3").style.transform = "rotate(0deg)"
      document.getElementById("rotatep4").style.transform = "rotate(0deg)"
      document.getElementById("rotatep5").style.transform = "rotate(0deg)"
      document.getElementById("rotatep6").style.transform = "rotate(45deg)"
      document.getElementById("rotatep7").style.transform = "rotate(0deg)"

    }
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
    var liblock = document.querySelectorAll("#liblock")
    if (liblock[7].style.display == "block") { // if is menuBox displayed, hide it
      liblock[7].style.display = "none";
      document.getElementById("rotatep7").style.transform = "rotate(0deg)"
    }
    else { // if is menuBox hidden, display it
      for (var i = 0; i < liblock.length; i++) {
        liblock[i].style.display = "none"
      }
      liblock[7].style.display = "block"
      document.getElementById("rotatep").style.transform = "rotate(0deg)"
      document.getElementById("rotatep0").style.transform = "rotate(0deg)"
      document.getElementById("rotatep1").style.transform = "rotate(0deg)"
      document.getElementById("rotatep2").style.transform = "rotate(0deg)"
      document.getElementById("rotatep3").style.transform = "rotate(0deg)"
      document.getElementById("rotatep4").style.transform = "rotate(0deg)"
      document.getElementById("rotatep5").style.transform = "rotate(0deg)"
      document.getElementById("rotatep6").style.transform = "rotate(0deg)"
      document.getElementById("rotatep7").style.transform = "rotate(45deg)";
    }
  }

  return (
    <div>
      <img className='delogo' src={delogo} />
      <img className='gal5' src={gal5} />
      <h3 className='where'>DEFINE WHERE YOU STAY</h3>
      <Container fluid className='p-0'>
        <div className='staymap'>
          <Row>
            <Col sm={8}>
              <div className='bgmap'>
                <img src={bgmap} />
              </div>
              <div className='mapextend'>
                <img src={surr} id="extend" />
              </div>
            </Col>
            <Col sm={3}>
              <div className='point'>
                <ul className="menu">
                  <li onClick={changeimg1}>
                    <div className='headdrop'>
                      <label className="closer" for="dropclose" id="surround">SURROUNDING</label>
                      <p id="rotatep">+</p>
                    </div>
                  </li>

                  <li onClick={changeimg2}>
                    <div className='headdrop'>
                      <label className="closer" for="dropclose" id="capital">CAPITALAND PROJECTS</label>
                      <p id="rotatep0">+</p>
                    </div>
                    <ul id="liblock">
                      <li><span>A</span> <a>The Vista</a></li>
                      <li><span>B</span> <a>Vista Verde</a></li>
                      <li><span>C</span> <a>ParcSpring</a></li>
                      <li><span>D</span> <a>The Krista</a></li>
                      <li><span>E</span> <a>Kris Vue</a></li>
                      <li><span>F</span> <a>Feliz en Vista</a></li>
                      <li><span>G</span> <a>D2eight</a></li>
                      <li><span>H</span> <a>D1MENSION</a></li>
                      <li><span>I</span> <a>De La Sol</a></li>
                      <li><span>J</span> <a>d’Edge Thao Dien</a></li>
                      <li><span>K</span> <a>ZENITY</a></li>
                    </ul>
                  </li>


                  <li onClick={changeimg3}>
                    <div className='headdrop'>
                      <label className="closer" for="dropclose" id="educa">EDUCATION</label>
                      <p id="rotatep1">+</p>
                    </div>
                    <ul id="liblock">
                      <li><span>1</span> <a>British International School (BIS)</a></li>
                      <li><span>2</span> <a>International School Ho Chi Minh City (ISHCMC)</a></li>
                      <li><span>3</span> <a>Australian International School</a></li>
                      <li><span>4</span> <a>EtonHouse Kindergarden</a></li>
                      <li><span>5</span> <a>Saigon Star International School</a></li>
                      <li><span>6</span> <a>The American School (TAS)</a></li>
                      <li><span>7</span> <a>Luong Dinh Cua Secondary School</a></li>
                    </ul>
                  </li>

                  <li onClick={changeimg4}>
                    <div className='headdrop'>
                      <label className="closer" for="dropclose" id="health">HEALTH CARE</label>
                      <p id="rotatep2">+</p>
                    </div>
                    <ul id="liblock">
                      <li><span>8</span> <a>Le Van Thinh Hospital</a></li>
                      <li><span>9</span> <a>American International Hospital</a></li>
                      <li><span>10</span> <a>Victoria Healthcare</a></li>
                    </ul>
                  </li>

                  <li onClick={changeimg5}>
                    <div className='headdrop'>
                      <label className="closer" for="dropclose" id="business">BUSINESS ADMINISTRATIVE UNITS</label>
                      <p id="rotatep3">+</p>
                    </div>
                    <ul id="liblock">
                      <li><span>11</span> <a>People’s Committee Thu Duc City</a></li>
                      <li><span>12</span> <a>Vietnam State Treasury Thu Duc City</a></li>
                      <li><span>13</span> <a>Police Station Thu Duc City</a></li>
                      <li><span>14</span> <a>Tax Department</a></li>
                    </ul>
                  </li>

                  <li onClick={changeimg6}>
                    <div className='headdrop'>
                      <label className="closer" for="dropclose" id="superma">SUPERMARKET</label>
                      <p id="rotatep4">+</p>
                    </div>
                    <ul id="liblock">
                      <li><span>15</span> <a>Tops Market An Phu</a></li>
                      <li><span>16</span> <a>Mega Market</a></li>
                      <li><span>17</span> <a>CoopMart</a></li>
                      <li><span>18</span> <a>Vinmart Diamond Island</a></li>
                      <li><span>19</span> <a>Annam Gourmet</a></li>
                    </ul>
                  </li>

                  <li onClick={changeimg7}>
                    <div className='headdrop'>
                      <label className="closer" for="dropclose" id="shopen">SHOPPING & ENTERTAINMENT</label>
                      <p id="rotatep5">+</p>
                    </div>
                    <ul id="liblock">
                      <li><span>20</span> <a>Cantavil An Phu</a></li>
                      <li><span>21</span> <a>Lotte Cinema</a></li>
                      <li><span>22</span> <a>CGV Cinema</a></li>
                      <li><span>23</span> <a>Vincom Megamall Thao Dien</a></li>
                      <li><span>24</span> <a>Estella Place</a></li>
                      <li><span>25</span> <a>Faifo Lane</a></li>
                      <li><span>26</span> <a>Starbucks</a></li>
                    </ul>
                  </li>

                  <li onClick={changeimg8}>
                    <div className='headdrop'>
                      <label className="closer" for="dropclose" id="nearby">NEARBY AMENITIES</label>
                      <p id="rotatep6">+</p>
                    </div>
                    <ul id="liblock">
                      <li><span>27</span> <a>Riverside Park</a></li>
                      <li><span>28</span> <a>Rach Chiec Golf Driving Range</a></li>
                    </ul>
                  </li>

                  <li onClick={changeimg9}>
                    <div className='headdrop'>
                      <label className="closer" for="dropclose" id="metroline">METRO LINES</label>
                      <p id="rotatep7">+</p>
                    </div>
                    <ul id="liblock">
                      <li><span><br /></span> <a>Metro Station (Under Construction)</a></li>
                      <li><span style={{ backgroundColor: '#9e9e9e' }}><br /></span> <a>Metro Line 2 (Under Planning)</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <p className='disclaimer'>Disclaimer: Whilst every care has been taken to ensure accuracy in the preparation of the information contained herein, no warranties whatsoever are given, or legal representations provided in respect thereon.</p>
    </div>
  )
}

export default Interest