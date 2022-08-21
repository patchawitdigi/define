import "./gallaryart.css";
import delogo from '../img/pointint/logo-menu.png'
import Facade1 from '../img/gallaryart/facade1.jpeg'
import Facade2 from '../img/gallaryart/facade2.jpeg'
import Facade3 from '../img/gallaryart/facade3.jpeg'

import Outdoor1 from '../img/gallaryart/outdoor1.jpeg'
import Outdoor2 from '../img/gallaryart/outdoor2.jpeg'
import Outdoor3 from '../img/gallaryart/outdoor3.jpeg'
import Outdoor4 from '../img/overview/gallery-4.jpeg'
import Outdoor5 from '../img/hidden/Artwork.jpg'
import Outdoor6 from '../img/hidden/Swing.jpg'
import Outdoor7 from '../img/hidden/Sunbed.jpg'
import Outdoor8 from '../img/hidden/Gate.jpg'
import Outdoor9 from '../img/hidden/TheArt.jpg'

import Indoor1 from '../img/gallaryart/indoor1.jpeg'
import Indoor2 from '../img/gallaryart/indoor2.jpeg'
import Indoor3 from '../img/gallaryart/indoor3.jpeg'
import Indoor4 from '../img/hidden/Parking.jpg'
import Indoor5 from '../img/hidden/Lobby.jpg'
import Indoor6 from '../img/hidden/Lift.jpg'
import Indoor7 from '../img/hidden/working.jpg'
import Indoor8 from '../img/hidden/Kid.jpg'

import Riviere1 from '../img/gallaryart/riviere1.jpeg'
import Riviere2 from '../img/gallaryart/riviere2.jpeg'
import Riviere3 from '../img/gallaryart/riviere3.jpeg'
import Riviere4 from '../img/gallaryart/riviere4.jpg'
import Riviere5 from '../img/gallaryart/riviere5.jpg'

import Jardin1 from '../img/gallaryart/jardin1.jpeg'
import Jardin2 from '../img/gallaryart/jardin2.jpeg'
import Jardin3 from '../img/gallaryart/jardin3.jpeg'
import Jardin4 from '../img/gallaryart/jardin4.jpg'
import Jardin5 from '../img/gallaryart/jardin5.jpg'
import Jardin6 from '../img/gallaryart/jardin6.jpg'

import { BsPlusCircle } from "react-icons/bs"
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Gallaryart() {

    useEffect(() => {
        var modal01 = document.getElementById("myModal01");
        var btn01 = document.getElementById("plusitem1");
        var span01 = document.getElementsByClassName("close")[0];
        btn01.onclick = function () {
            modal01.style.display = "block";
        }
        span01.onclick = function () {
            modal01.style.display = "none";
        }

        var modal02 = document.getElementById("myModal02");
        var btn02 = document.getElementById("plusitem2");
        var span02 = document.getElementsByClassName("close")[1];
        btn02.onclick = function () {
            modal02.style.display = "block";
        }
        span02.onclick = function () {
            modal02.style.display = "none";
        }

        var modal03 = document.getElementById("myModal03");
        var btn03 = document.getElementById("plusitem3");
        var span03 = document.getElementsByClassName("close")[2];
        btn03.onclick = function () {
            modal03.style.display = "block";
        }
        span03.onclick = function () {
            modal03.style.display = "none";
        }
        
        var modal04 = document.getElementById("myModal04");
        var btn04 = document.getElementById("plusitem4");
        var span04 = document.getElementsByClassName("close")[3];
        btn04.onclick = function () {
            modal04.style.display = "block";
        }
        span04.onclick = function () {
            modal04.style.display = "none";
        }
        
        var modal05 = document.getElementById("myModal05");
        var btn05 = document.getElementById("plusitem5");
        var span05 = document.getElementsByClassName("close")[4];
        btn05.onclick = function () {
            modal05.style.display = "block";
        }
        span05.onclick = function () {
            modal05.style.display = "none";
        }

    }, [])

    const [imgsl01, setimgsl01] = useState(0)
    const slide01 = [Facade1, Facade2, Facade3]
    function next01(){
        if(imgsl01 >= slide01.length-1){
            setimgsl01(0)
        }
        else{
            setimgsl01(imgsl01+1)
        }
    }
    function prev01(){
        if(imgsl01 <= 0){
            setimgsl01(slide01.length - 1)
        }
        else{
            setimgsl01(imgsl01-1)
        }

    }

    const [imgsl02, setimgsl02] = useState(0)
    const slide02 = [Outdoor4, Outdoor5, Outdoor6, Outdoor2, Outdoor3, Outdoor1, Outdoor7, Outdoor8, Outdoor9]
    function next02(){
        if(imgsl02 >= slide02.length-1){
            setimgsl02(0)
        }
        else{
            setimgsl02(imgsl02+1)
        }
    }
    function prev02(){
        if(imgsl02 <= 0){
            setimgsl02(slide02.length - 1)
        }
        else{
            setimgsl02(imgsl02-1)
        }

    }

    const [imgsl03, setimgsl03] = useState(0)
    const slide03 = [Indoor4, Indoor5, Indoor6, Indoor3, Indoor1, Indoor2, Indoor7, Indoor8]
    function next03(){
        if(imgsl03 >= slide03.length-1){
            setimgsl03(0)
        }
        else{
            setimgsl03(imgsl03+1)
        }
    }
    function prev03(){
        if(imgsl03 <= 0){
            setimgsl03(slide03.length - 1)
        }
        else{
            setimgsl03(imgsl03-1)
        }

    }
    
    const [imgsl04, setimgsl04] = useState(0)
    const slide04 = [Riviere4, Riviere2, Riviere1, Riviere3, Riviere5]
    function next04(){
        if(imgsl04 >= slide04.length-1){
            setimgsl04(0)
        }
        else{
            setimgsl04(imgsl04+1)
        }
    }
    function prev04(){
        if(imgsl04 <= 0){
            setimgsl04(slide04.length - 1)
        }
        else{
            setimgsl04(imgsl04-1)
        }

    }

    const [imgsl05, setimgsl05] = useState(0)
    const slide05 = [Jardin1, Jardin2, Jardin4, Jardin5, Jardin6, Jardin3]
    function next05(){
        if(imgsl05 >= slide05.length-1){
            setimgsl05(0)
        }
        else{
            setimgsl05(imgsl05+1)
        }
    }
    function prev05(){
        if(imgsl05 <= 0){
            setimgsl05(slide05.length - 1)
        }
        else{
            setimgsl05(imgsl05-1)
        }

    }


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
                        <BsPlusCircle size="2vw" id='plusitem1' />
                    </div>
                    <img className="facade3 bwimg" src={Facade3} />
                </div>
            </div>

            <div id="myModal01" class="modal2">
                <span className="close">&times;</span>
                <div className="modal2-content">
                    <img src={slide01[imgsl01]} />
                </div>
                <FiArrowLeft onClick={prev01} className="prev" size="3vw" />
                <FiArrowRight onClick={next01} className="nextimg" size="3vw" />
            </div>

            <div className="gallary">
                <div className="rgallary2">
                    <div className="moreitem">
                        <BsPlusCircle size="2vw" id='plusitem2' />
                        <p>OUTDOOR<br />FACILITIES</p>
                    </div>
                    <img className="outdoor3 bwimg" src={Outdoor3} />
                </div>
                <div className="lgallary2">
                    <img className="facade1" src={Outdoor1} />
                    <img className="outdoor2 bwimg" src={Outdoor2} />
                </div>
            </div>

            <div id="myModal02" class="modal2">
                <span className="close">&times;</span>
                <div className="modal2-content">
                    <img src={slide02[imgsl02]} />
                </div>
                <FiArrowLeft onClick={prev02} className="prev" size="3vw" />
                <FiArrowRight onClick={next02} className="nextimg" size="3vw" />
            </div>

            <div className="gallary">
                <div className="lgallary">
                    <img className="facade1" src={Indoor1} />
                    <img className="facade2 bwimg" src={Indoor2} />
                </div>
                <div className="rgallary">
                    <div className="moreitem">
                        <p>INDOOR<br />FACILITIES</p>
                        <BsPlusCircle size="2vw" id='plusitem3' />
                    </div>
                    <img className="facade3 bwimg" src={Indoor3} />
                </div>
            </div>

            <div id="myModal03" class="modal2">
                <span className="close">&times;</span>
                <div className="modal2-content">
                    <img src={slide03[imgsl03]} />
                </div>
                <FiArrowLeft onClick={prev03} className="prev" size="3vw" />
                <FiArrowRight onClick={next03} className="nextimg" size="3vw" />
            </div>

            <div className="gallary">
                <div className="rgallary2 rgallary3">
                    <div className="moreitem">
                        <BsPlusCircle size="2vw" id='plusitem4' />
                        <p>RIVIERE</p>
                    </div>
                    <img className="Riviere3 bwimg" src={Riviere3} />
                </div>
                <div className="lgallary2">
                    <img className="facade1" src={Riviere2} />
                    <img className="outdoor2 bwimg" src={Riviere1} />
                </div>
            </div>

            <div id="myModal04" class="modal2">
                <span className="close">&times;</span>
                <div className="modal2-content">
                    <img src={slide04[imgsl04]} />
                </div>
                <FiArrowLeft onClick={prev04} className="prev" size="3vw" />
                <FiArrowRight onClick={next04} className="nextimg" size="3vw" />
            </div>

            <div className="gallary">
                <div className="lgallary">
                    <img className="facade1" src={Jardin1} />
                    <img className="facade2 bwimg" src={Jardin2} />
                </div>
                <div className="rgallary">
                    <div className="moreitem">
                        <p>JARDIN</p>
                        <BsPlusCircle size="2vw" id='plusitem5' />
                    </div>
                    <img className="jardin3 bwimg" src={Jardin3} />
                </div>
            </div>

            <div id="myModal05" class="modal2">
                <span className="close">&times;</span>
                <div className="modal2-content">
                    <img src={slide05[imgsl05]} />
                </div>
                <FiArrowLeft onClick={prev05} className="prev" size="3vw" />
                <FiArrowRight onClick={next05} className="nextimg" size="3vw" />
            </div>


        </div>
    )
}
