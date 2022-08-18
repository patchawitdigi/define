import "./gallaryart.css";
import delogo from '../img/pointint/logo-menu.png'
import Facade1 from '../img/gallaryart/facade1.jpeg'
import Facade2 from '../img/gallaryart/facade2.jpeg'
import Facade3 from '../img/gallaryart/facade3.jpeg'
import Outdoor1 from '../img/gallaryart/outdoor1.jpeg'
import Outdoor2 from '../img/gallaryart/outdoor2.jpeg'
import Outdoor3 from '../img/gallaryart/outdoor3.jpeg'
import Indoor1 from '../img/gallaryart/indoor1.jpeg'
import Indoor2 from '../img/gallaryart/indoor2.jpeg'
import Indoor3 from '../img/gallaryart/indoor3.jpeg'
import Riviere1 from '../img/gallaryart/riviere1.jpeg'
import Riviere2 from '../img/gallaryart/riviere2.jpeg'
import Riviere3 from '../img/gallaryart/riviere3.jpeg'
import Jardin1 from '../img/gallaryart/jardin1.jpeg'
import Jardin2 from '../img/gallaryart/jardin2.jpeg'
import Jardin3 from '../img/gallaryart/jardin3.jpeg'
import { BsPlusCircle } from "react-icons/bs"
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { useEffect } from "react";

export default function Gallaryart() {

    useEffect(() => {
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("plusitem1");
        var span = document.getElementsByClassName("close")[0];
        btn.onclick = function () {
            modal.style.display = "block";
        }
        span.onclick = function () {
            modal.style.display = "none";
        }


        var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = x.length }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }
    }, [])


    return (
        <div>
            <img className='delogo' src={delogo} />
            <div className='headborder'>
                <h3 className="headgal">GALLERIE D’ARTE</h3>
                <h3 className="headgal2"></h3>
            </div>
            <div className="gallary">
                <div className="lgallary">
                    <img className="facade1" src={Facade1} />
                    <img className="facade2 bwimg" src={Facade2} />
                </div>
                <div className="rgallary">
                    <div className="moreitem">
                        <p>FACADE</p>
                        <BsPlusCircle size="2.5vw" id='plusitem1' />
                    </div>
                    <img className="facade3 bwimg" src={Facade3} />
                </div>
            </div>

            <div id="myModal" class="modal2">
                <span className="close">&times;</span>
                <div className="modal2-content">
                    <img src={Facade1} className="mySlides" />
                    <img src={Facade2} className="mySlides" />
                    <img src={Facade3} className="mySlides" />
                </div>
                <FiArrowLeft onClick={() => this.plusDivs(-1)} className="prev" size="3vw" />
                <FiArrowRight onClick={() => this.plusDivs(1)} className="next" size="3vw" />
            </div>

            <div className="gallary">
                <div className="rgallary2">
                    <div className="moreitem">
                        <BsPlusCircle size="2.5vw" id='plusitem2' />
                        <p>OUTDOOR<br />FACILITIES</p>
                    </div>
                    <img className="outdoor3 bwimg" src={Outdoor3} />
                </div>
                <div className="lgallary2">
                    <img className="facade1" src={Outdoor1} />
                    <img className="outdoor2 bwimg" src={Outdoor2} />
                </div>
            </div>


            <div className="gallary">
                <div className="lgallary">
                    <img className="facade1" src={Indoor1} />
                    <img className="facade2 bwimg" src={Indoor2} />
                </div>
                <div className="rgallary">
                    <div className="moreitem">
                        <p>INDOOR<br />FACILITIES</p>
                        <BsPlusCircle size="2.5vw" id='plusitem3' />
                    </div>
                    <img className="facade3 bwimg" src={Indoor3} />
                </div>
            </div>


            <div className="gallary">
                <div className="rgallary2 rgallary3">
                    <div className="moreitem">
                        <BsPlusCircle size="2.5vw" id='plusitem4' />
                        <p>RIVIERE</p>
                    </div>
                    <img className="Riviere3 bwimg" src={Riviere3} />
                </div>
                <div className="lgallary2">
                    <img className="facade1" src={Riviere2} />
                    <img className="outdoor2 bwimg" src={Riviere1} />
                </div>
            </div>


            <div className="gallary">
                <div className="lgallary">
                    <img className="facade1" src={Jardin1} />
                    <img className="facade2 bwimg" src={Jardin2} />
                </div>
                <div className="rgallary">
                    <div className="moreitem">
                        <p>JARDIN</p>
                        <BsPlusCircle size="2.5vw" id='plusitem5' />
                    </div>
                    <img className="jardin3 bwimg" src={Jardin3} />
                </div>
            </div>


        </div>
    )
}
