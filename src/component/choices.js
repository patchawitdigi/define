import React, { useEffect } from 'react'
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

import Lv4_1 from '../img/luxury/lv4unit1.jpg'
import Lv4_2 from '../img/luxury/lv4unit2.jpg'
import Lv4_3 from '../img/luxury/lv4unit3.jpg'
import Lv4_4 from '../img/luxury/lv4unit4.jpg'

import typ1_1 from '../img/luxury/typ1unit1.jpg'
import typ1_2 from '../img/luxury/typ1unit2.jpg'
import typ1_3 from '../img/luxury/typ1unit3.jpg'
import typ1_4 from '../img/luxury/typ1unit4.jpg'

import typ2_1 from '../img/luxury/typ2unit1.jpg'
import typ2_2 from '../img/luxury/typ2unit2.jpg'
import typ2_3 from '../img/luxury/typ2unit3.jpg'
import typ2_4 from '../img/luxury/typ2unit4.jpg'

import Lv15_1 from '../img/luxury/lv15unit1.jpg'
import Lv15_2 from '../img/luxury/lv15unit2.jpg'
import Lv15_3 from '../img/luxury/lv15unit3.jpg'
import Lv15_4 from '../img/luxury/lv15unit4.jpg'

import Lv25_1 from '../img/luxury/lv25unit1.jpg'
import Lv25_2 from '../img/luxury/lv25unit2.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Aos from "aos";
import "aos/dist/aos.css";


function Choices() {

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

  useEffect(() => {
    var modal = document.getElementById("pop3-1");
    var btn = document.getElementById("plus3-1");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
      modal.style.display = "block";
    }
    span.onclick = function () {
      modal.style.display = "none";
    }

    var modal2 = document.getElementById("pop3-2");
    var btn2 = document.getElementById("plus3-2");
    var span2 = document.getElementsByClassName("close")[1];
    btn2.onclick = function () {
      modal2.style.display = "block";
    }
    span2.onclick = function () {
      modal2.style.display = "none";
    }

    var modal3 = document.getElementById("pop4-1");
    var btn3 = document.getElementById("plus4-1");
    var span3 = document.getElementsByClassName("close")[2];
    btn3.onclick = function () {
      modal3.style.display = "block";
    }
    span3.onclick = function () {
      modal3.style.display = "none";
    }

    var modal4 = document.getElementById("pop4-2");
    var btn4 = document.getElementById("plus4-2");
    var span4 = document.getElementsByClassName("close")[3];
    btn4.onclick = function () {
      modal4.style.display = "block";
    }
    span4.onclick = function () {
      modal4.style.display = "none";
    }

    var modal5 = document.getElementById("pop4-3");
    var btn5 = document.getElementById("plus4-3");
    var span5 = document.getElementsByClassName("close")[4];
    btn5.onclick = function () {
      modal5.style.display = "block";
    }
    span5.onclick = function () {
      modal5.style.display = "none";
    }

    var modal6 = document.getElementById("pop4-4");
    var btn6 = document.getElementById("plus4-4");
    var span6 = document.getElementsByClassName("close")[5];
    btn6.onclick = function () {
      modal6.style.display = "block";
    }
    span6.onclick = function () {
      modal6.style.display = "none";
    }

    var modal7 = document.getElementById("pop1-1");
    var btn7 = document.getElementById("plus1-1");
    var span7 = document.getElementsByClassName("close")[6];
    btn7.onclick = function () {
      modal7.style.display = "block";
    }
    span7.onclick = function () {
      modal7.style.display = "none";
    }

    var modal8 = document.getElementById("pop1-2");
    var btn8 = document.getElementById("plus1-2");
    var span8 = document.getElementsByClassName("close")[7];
    btn8.onclick = function () {
      modal8.style.display = "block";
    }
    span8.onclick = function () {
      modal8.style.display = "none";
    }

    var modal9 = document.getElementById("pop1-3");
    var btn9 = document.getElementById("plus1-3");
    var span9 = document.getElementsByClassName("close")[8];
    btn9.onclick = function () {
      modal9.style.display = "block";
    }
    span9.onclick = function () {
      modal9.style.display = "none";
    }

    var modal10 = document.getElementById("pop1-4");
    var btn10 = document.getElementById("plus1-4");
    var span10 = document.getElementsByClassName("close")[9];
    btn10.onclick = function () {
      modal10.style.display = "block";
    }
    span10.onclick = function () {
      modal10.style.display = "none";
    }

    var modal11 = document.getElementById("pop2-1");
    var btn11 = document.getElementById("plus2-1");
    var span11 = document.getElementsByClassName("close")[10];
    btn11.onclick = function () {
      modal11.style.display = "block";
    }
    span11.onclick = function () {
      modal11.style.display = "none";
    }

    var modal12 = document.getElementById("pop2-2");
    var btn12 = document.getElementById("plus2-2");
    var span12 = document.getElementsByClassName("close")[11];
    btn12.onclick = function () {
      modal12.style.display = "block";
    }
    span12.onclick = function () {
      modal12.style.display = "none";
    }

    var modal13 = document.getElementById("pop2-3");
    var btn13 = document.getElementById("plus2-3");
    var span13 = document.getElementsByClassName("close")[12];
    btn13.onclick = function () {
      modal13.style.display = "block";
    }
    span13.onclick = function () {
      modal13.style.display = "none";
    }

    var modal14 = document.getElementById("pop2-4");
    var btn14 = document.getElementById("plus2-4");
    var span14 = document.getElementsByClassName("close")[13];
    btn14.onclick = function () {
      modal14.style.display = "block";
    }
    span14.onclick = function () {
      modal14.style.display = "none";
    }

    var modal15 = document.getElementById("pop15-1");
    var btn15 = document.getElementById("plus15-1");
    var span15 = document.getElementsByClassName("close")[14];
    btn15.onclick = function () {
      modal15.style.display = "block";
    }
    span15.onclick = function () {
      modal15.style.display = "none";
    }

    var modal16 = document.getElementById("pop15-2");
    var btn16 = document.getElementById("plus15-2");
    var span16 = document.getElementsByClassName("close")[15];
    btn16.onclick = function () {
      modal16.style.display = "block";
    }
    span16.onclick = function () {
      modal16.style.display = "none";
    }

    var modal17 = document.getElementById("pop15-3");
    var btn17 = document.getElementById("plus15-3");
    var span17 = document.getElementsByClassName("close")[16];
    btn17.onclick = function () {
      modal17.style.display = "block";
    }
    span17.onclick = function () {
      modal17.style.display = "none";
    }

    var modal18 = document.getElementById("pop15-4");
    var btn18 = document.getElementById("plus15-4");
    var span18 = document.getElementsByClassName("close")[17];
    btn18.onclick = function () {
      modal18.style.display = "block";
    }
    span18.onclick = function () {
      modal18.style.display = "none";
    }

    var modal19 = document.getElementById("pop25-1");
    var btn19 = document.getElementById("plus25-1");
    var span19 = document.getElementsByClassName("close")[18];
    btn19.onclick = function () {
      modal19.style.display = "block";
    }
    span19.onclick = function () {
      modal19.style.display = "none";
    }

    var modal20 = document.getElementById("pop25-2");
    var btn20 = document.getElementById("plus25-2");
    var span20 = document.getElementsByClassName("close")[19];
    btn20.onclick = function () {
      modal20.style.display = "block";
    }
    span20.onclick = function () {
      modal20.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == modal20) {
        modal20.style.display = "none";
      } else if (event.target == modal19) {
        modal19.style.display = "none";
      } else if (event.target == modal18) {
        modal18.style.display = "none";
      } else if (event.target == modal17) {
        modal17.style.display = "none";
      } else if (event.target == modal16) {
        modal16.style.display = "none";
      } else if (event.target == modal15) {
        modal15.style.display = "none";
      } else if (event.target == modal14) {
        modal14.style.display = "none";
      } else if (event.target == modal13) {
        modal13.style.display = "none";
      } else if (event.target == modal12) {
        modal12.style.display = "none";
      } else if (event.target == modal11) {
        modal11.style.display = "none";
      } else if (event.target == modal10) {
        modal10.style.display = "none";
      } else if (event.target == modal9) {
        modal9.style.display = "none";
      } else if (event.target == modal8) {
        modal8.style.display = "none";
      } else if (event.target == modal7) {
        modal7.style.display = "none";
      } else if (event.target == modal6) {
        modal6.style.display = "none";
      } else if (event.target == modal5) {
        modal5.style.display = "none";
      } else if (event.target == modal4) {
        modal4.style.display = "none";
      } else if (event.target == modal3) {
        modal3.style.display = "none";
      } else if (event.target == modal2) {
        modal2.style.display = "none";
      }
      else if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    Aos.init({ duration:  1000 });

  }, [])




  return (
    <div>
      <img className='delogo' src={delogo} />
      <img className='floorbg' src={Floor} data-aos="fade-up"/>
      <h3 className='yourown' data-aos="fade-up">DEFINE A PLACE TO CALL YOUR OWN</h3>
      <Container fluid className="p-0">
        <div className='floorplan'>
          <Row>
            <Col lg={2}>
              <div className='selectlevel' data-aos="fade-right" data-aos-delay="500">
                <h4>FLOOR PLAN</h4>
                <div className='selectleveltext'>
                <p onClick={changelv3} id="floor3">LEVEL3</p>
                <p onClick={changelv4} id="floor4">LEVEL4</p>
                <p onClick={changetyp1} id="typ1">TYPICAL 1</p>
                <p onClick={changetyp2} id="typ2">TYPICAL 2</p>
                <p onClick={changelv15} id="floor15">LEVEL15</p>
                <p onClick={changelv25} id="floor25">LEVEL25</p>
                </div>
              </div>
            </Col>
            <Col lg={10}>
              <div className='imglevel'>
                <img src={Floor3} id="floorselect" data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus3-1' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus3-2' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus4-1' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus4-2' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus4-3' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus4-4' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus1-1' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus1-2' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus1-3' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus1-4' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus2-1' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus2-2' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus2-3' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus2-4' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus15-1' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus15-2' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus15-3' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus15-4' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus25-1' data-aos="fade-up" data-aos-delay="1000"/>
                <BsPlusCircle size="3.5vw" id='plus25-2' data-aos="fade-up" data-aos-delay="1000"/>
              </div>
            </Col>
          </Row>
        </div>
      </Container>


      <p className='disclaimer3'>Disclaimer: Whilst every care has been taken to ensure
        accuracy in the preparation of the information contained herein, no
        warranties whatsoever are given, or legal representations provided in
        respect thereon.</p>

      <div className='modal' id="pop3-1">
        <div className='planpopup'>
          <span className="close">&times;</span>
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


      <div className='modal' id="pop3-2">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>4 BEDROOM - D (M)</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>03</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>02</p>
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
              <img src={Lv3_2} />
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

      <div className='modal' id="pop4-1">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>3 BEDROOM - A</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>04, 06, 08, 10, 12, 14, 16, 18, 20, 22, 24</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>01</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>197.2sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>220.8sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={Lv4_1} />
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

      <div className='modal' id="pop4-2">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>3 BEDROOM - B</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>04</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>02</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>297.7sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>324.7sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={Lv4_2} />
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

      <div className='modal' id="pop4-3">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>3 BEDROOM - B (M)</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>04</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>03</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>297.7sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>324.7sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={Lv4_3} />
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

      <div className='modal' id="pop4-4">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>3 BEDROOM - A (M)</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>04, 06, 08, 10, 12, 14, 16, 18, 20, 22, 24</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>04</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>197.2sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>220.8sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={Lv4_4} />
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

      <div className='modal' id="pop1-1">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>3 BEDROOM - A</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>04, 06, 08, 10, 12, 14, 16, 18, 20, 22, 24</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>01</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>197.2sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>220.8sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={typ1_1} />
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

      <div className='modal' id="pop1-2">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>4 BEDROOM - A</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>06, 08, 10, 12, 14, 16, 18, 20, 22, 24</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>02</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>295.5sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>324.7sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={typ1_2} />
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

      <div className='modal' id="pop1-3">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>4 BEDROOM - A (M)</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>06, 08, 10, 12, 14, 16, 18, 20, 22, 24</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>03</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>295.5sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>324.7sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={typ1_3} />
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

      <div className='modal' id="pop1-4">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>3 BEDROOM - A (M)</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>04, 06, 08, 10, 12, 14, 16, 18, 20, 22, 24</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>04</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>197.2sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>220.8sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={typ1_4} />
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

      <div className='modal' id="pop2-1">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>4 BEDROOM - B</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>05, 07, 09, 11, 13, 17, 19, 21, 23</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>01</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>295.5sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>325.9sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={typ2_1} />
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

      <div className='modal' id="pop2-2">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>3 BEDROOM - A (M)</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>05, 07, 09, 11, 13, 15, 17, 19, 21, 23</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>02</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>197.2sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>219.6sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={typ2_2} />
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

      <div className='modal' id="pop2-3">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>3 BEDROOM - A</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>05, 07, 09, 11, 13, 15, 17, 19, 21, 23</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>03</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>197.2sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>219.6sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={typ2_3} />
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

      <div className='modal' id="pop2-4">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>4 BEDROOM - B (M)</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>05, 07, 09, 11, 13, 17, 19, 21, 23</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>04</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>295.5sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>325.9sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={typ2_4} />
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

      <div className='modal' id="pop15-1">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>4 BEDROOM - C</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>15</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>01</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>260.3sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>287.6sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={Lv15_1} />
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

      <div className='modal' id="pop15-2">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>3 BEDROOM - A (M)</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>05, 07, 09, 11, 13, 15, 17, 19, 21, 23</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>02</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>197.2sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>219.6sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={Lv15_2} />
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

      <div className='modal' id="pop15-3">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>3 BEDROOM - A</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>05, 07, 09, 11, 13, 15, 17, 19, 21, 23</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>03</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>197.2sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>219.6sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={Lv15_3} />
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

      <div className='modal' id="pop15-4">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>4 BEDROOM - C (M)</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>15</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>04</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>260.3sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>287.6sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={Lv15_4} />
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

      <div className='modal' id="pop25-1">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>PENTHOUSE - A</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>25</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>01</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>528.2sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>569.7sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={Lv25_1} />
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

      <div className='modal' id="pop25-2">
        <div className='planpopup'>
          <span className="close">&times;</span>
          <div className='plandetail'>
            <div className='popuplogo'>
              <div className='borderdetail '>
                <img src={delogo} />
              </div>
              <div className='borderdetail'>
                <h4>UNIT TYPE</h4>
                <p>PENTHOUSE - A (M)</p>
              </div>
              <div className='borderdetail'>
                <h4>LEVEL NO.</h4>
                <p>25</p>
              </div>
              <div className='borderdetail'>
                <h4>UNIT NO.</h4>
                <p>02</p>
              </div>
              <div className='borderdetail'>
                <h4>NET FLOOR AREA</h4>
                <p>528.2sqm</p>
              </div>
              <div className='borderdetail'>
                <h4>GROSS FLOOR AREA</h4>
                <p>569.7sqm</p>
              </div>
            </div>
            <div className='planimg'>
              <img src={Lv25_2} />
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

    </div>
  )
}

export default Choices
