import React, { useEffect } from 'react'
import "./slide.css";
import delogo from '../img/pointint/logo-menu.png'
import bgleft from '../img/overview/bgleft.jpg'
import im1 from '../img/overview/gallery-4.jpeg'
import im2 from '../img/hidden/Artwork.jpg'
import im3 from '../img/hidden/Pool.jpg'
import im4 from '../img/hidden/Charging.jpg'
import im5 from '../img/hidden/Gate.jpg'
import im6 from '../img/hidden/Sunbed.jpg'
import im7 from '../img/hidden/Swing.jpg'
import im8 from '../img/hidden/TheArt.jpg'
import im9 from '../img/hidden/Walkway.jpg'
import im10 from '../img/hidden/Parking.jpg'
import im11 from '../img/hidden/Lobby.jpg'
import im12 from '../img/hidden/Kid.jpg'
import im13 from '../img/hidden/Lounge.jpg'
import im14 from '../img/hidden/working.jpg'
import im15 from '../img/hidden/Lift.jpg'
import im16 from '../img/hidden/Party.jpg'
import im17 from '../img/hidden/Garage.jpg'
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";



function Slide() {


    useEffect(() => {
        const images = document.querySelectorAll(".carousel-image");
        const prevBtn = document.querySelector("#prevBtn");
        const nextBtn = document.querySelector("#nextBtn");

        const nextSlide = () => {
            const currentSlide = document.querySelector(".current");
            currentSlide.classList.remove("current");
            if (currentSlide.nextElementSibling) {
                currentSlide.nextElementSibling.classList.add("current");
            } else {
                images[0].classList.add("current");
            }

        };

        const prevSlide = () => {
            const currentSlide = document.querySelector(".current");
            currentSlide.classList.remove("current");
            if (currentSlide.previousElementSibling) {
                currentSlide.previousElementSibling.classList.add("current");
            } else {
                images[images.length - 1].classList.add("current");
            }

        };

        nextBtn.addEventListener("click", k => {
            nextSlide();
        });
        prevBtn.addEventListener("click", k => {
            prevSlide();
        });
    }, []);


    return (
        <div>
            <img className='delogo' src={delogo} />
            <div className="content conhid">
                <div className="textcon">
                    <h2><br /></h2>
                    <h3>DEFINE YOUR LIFESTYLE<br />
                        & WELLBEING</h3>
                    <p>Surrounded by serene gardens and tranquil water features, you will find numerous relaxation zones
                        within DEFINE. Lush jewel themed gardens are dotted around the first floor and third floor, allowing
                        residents to easily reconnect with nature for quiet moments of repose.</p>
                    <img className="bglefthid" src={bgleft} />
                </div>
                <div className="main-carousel">
                    <div className="carousel">
                        <div className="items">
                            <img src={im1} alt="" className="carousel-image current" />
                            <img src={im2} alt="" className="carousel-image"/>
                            <img src={im3} alt="" className="carousel-image"/>
                            <img src={im4} alt="" className="carousel-image"/>
                            <img src={im5} alt="" className="carousel-image" />
                            <img src={im6} alt="" className="carousel-image" />
                            <img src={im7} alt="" className="carousel-image" />
                            <img src={im8} alt="" className="carousel-image" />
                            <img src={im9} alt="" className="carousel-image" />
                            <img src={im10} alt="" className="carousel-image" />
                            <img src={im11} alt="" className="carousel-image" />
                            <img src={im12} alt="" className="carousel-image" />
                            <img src={im13} alt="" className="carousel-image" />
                            <img src={im14} alt="" className="carousel-image" />
                            <img src={im15} alt="" className="carousel-image" />
                            <img src={im16} alt="" className="carousel-image" />
                            <img src={im17} alt="" className="carousel-image" />
                        </div>
                    </div>

                    <div className="buttons">
                        <FiArrowLeft id="nextBtn" size="2vw"/>
                        <FiArrowRight id="prevBtn" size="2vw"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Slide