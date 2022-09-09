import React, { useState } from 'react'
import "./slide.css";
import delogo from '../img/pointint/logo-menu.png'
import bgleft from '../img/overview/bgleft.jpg'
import im1 from '../img/overview/gallery-4.jpeg'
import im2 from '../img/hidden/Artwork2.jpg'
import im3 from '../img/hidden/Pool2.jpg'
import im4 from '../img/hidden/Charging2.jpg'
import im5 from '../img/hidden/Gate2.jpg'
import im6 from '../img/hidden/Sunbed2.jpg'
import im7 from '../img/hidden/Swing2.jpg'
import im8 from '../img/hidden/TheArt2.jpg'
import im9 from '../img/hidden/Walkway2.jpg'
import im10 from '../img/hidden/Parking2.jpg'
import im11 from '../img/hidden/Lobby2.jpg'
import im12 from '../img/hidden/Kid2.jpg'
import im13 from '../img/hidden/Lounge.jpg'
import im14 from '../img/hidden/working2.jpg'
import im15 from '../img/hidden/Lift2.jpg'
import im16 from '../img/hidden/Party.jpg'
import im17 from '../img/hidden/Garage2.jpg'
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

import { hiddentreasure } from './flieapi';

function Slide() {

    const [imgsty, setimgsty] = useState({ objectPosition: '50% 100%' })
    const [imgsl, setimgsl] = useState(0)
    const slide = [im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12, im13, im14, im15, im16, im17]
    const slide2 = []
    function next() {
        if (imgsl >= slide.length - 1) {
            setimgsl(0)
        }
        else {
            setimgsl(imgsl + 1)
        }
        if (imgsl == 13) {
            setimgsty({ objectPosition: 'center 50%' })
        }
        else {
            setimgsty({ objectPosition: '50% 100%' })
        }
        console.log(imgsl)

    }
    function prev() {
        if (imgsl <= 0) {
            setimgsl(slide.length - 1)
        }
        else {
            setimgsl(imgsl - 1)
        }
        if (imgsl == 15) {
            setimgsty({ objectPosition: 'center 50%' })
        }
        else {
            setimgsty({ objectPosition: '50% 100%' })
        }
        console.log(imgsl)
    }

    const [treasure, setTreasure] = useState([])
    useEffect(() => {
        fetch(hiddentreasure).then(
            response => response.json().then(data => {
                setTreasure(data);
            })
        );

        Aos.init({ duration: 1000 });
    }, []);

    console.log(treasure.images)

    {treasure?.images?.map(hidden => {
            slide2.push(hidden.url);
        })}

    console.log(slide2)



    return (
        <div>
            <a href='/project/define/'><img className='delogo' src={delogo} /></a>

            <Container fluid className="p-0">
                <div className="content conhid">
                    <Row>
                        <Col lg={4}>
                            <div className="textcon texthid" data-aos="fade-down">
                                <h2></h2>
                                <h3>{treasure.title}</h3>
                                <p>{treasure.subTitle}</p>
                                <img className="bglefthid" src={bgleft} />
                            </div>
                            {/* <div className="textcon texthid" data-aos="fade-down">
                                <h2></h2>
                                <h3>DEFINE YOUR LIFESTYLE<br />
                                    & WELLBEING</h3>
                                <p>Surrounded by serene gardens and tranquil water features, you will find numerous relaxation zones
                                    within DEFINE. Lush jewel themed gardens are dotted around the first floor and third floor, allowing
                                    residents to easily reconnect with nature for quiet moments of repose.</p>
                                <img className="bglefthid" src={bgleft} />
                            </div> */}
                        </Col>
                        <Col lg={8}>
                            <div className="main-carousel">
                                <div className="carousel">
                                    <div className="items">
                                        {/* <img src={slide[imgsl]} alt="" className="carousel-image" style={imgsty} /> */}
                                        <img src={slide2[imgsl]} alt="" className="carousel-image" style={imgsty} />
                                        {/* {treasure?.images?.map(hidden => {
                                            return (
                                                <div>
                                                    <p>{hidden.caption}</p>
                                                    <p>Artist's Impreesion</p>
                                                </div>
                                            );
                                        })} */}
                                    </div>
                                </div>

                                <div className="buttons">
                                    <FiArrowLeft onClick={prev} id="prevBtn" size="3vw" />
                                    <FiArrowRight onClick={next} id="nextBtn" size="3vw" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Slide