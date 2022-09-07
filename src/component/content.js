import "./content.css";
import ban1 from '../img/overview/banner.jpeg'
import ban2 from '../img/overview/gallery-2.jpeg'
import ban3 from '../img/overview/gallery-3.jpeg'
import ban4 from '../img/overview/gallery-4.jpeg'
import ban5 from '../img/overview/gallery-5.jpeg'

import bgleft from '../img/overview/bgleft.jpg'
import bgright from '../img/overview/bgright.jpeg'

import icon1 from '../img/overview/g-1.png'
import icon2 from '../img/overview/g-2.png'
import icon3 from '../img/overview/g-3.png'
import icon4 from '../img/overview/g-4.png'

import video from "../img/overview/video-banner.mp4"

import useScrollSnap from 'react-use-scroll-snap';
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from "aos";
import "aos/dist/aos.css";
import { homeGallery } from './flieapi';
import { bannervideo } from './flieapi';

import { useTranslation } from 'react-i18next';

export default function Content() {

    const [content, setContent] = useState([]);
    const [videoban, setVideoBan] = useState([]);

    const { t, i18n } = useTranslation();

    useEffect(() => {
        // fetch("http://localhost:8202/publicServices/homeGallery/list.php").then(
        fetch(homeGallery).then(
            response => response.json().then(data => {
                setContent(data);
            })
        )
        fetch(bannervideo).then(
            response => response.json().then(data => {
                setVideoBan(data);
            })
        )
        Aos.init({ duration: 1000 });

    }, []);

    console.log(videoban.banners)
   
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

    return (
        <div ref={scrollRef}>
            {/* <div> */}
            <div className="vibanner">
                <video loop muted autoPlay>
                    {/* {videoban?.banners?.map((banvid) => {
                         <source src={banvid} type="video/mp4" />
                         console.log(banvid)
                    })}     */}
                    {/* <source src={"https://define.com.vn/assets/video-banner.mp4"} type="video/mp4" />        */}
                    <source src={video} type="video/mp4" />
                    
                    
                </video>
            </div>

            {content.map(detail => {
                if (detail.imageAlignment == "right") {
                    return (
                        <div>
                            <Container fluid className="p-0">
                                <div className="content">
                                    <Row>
                                        <Col lg={4}>
                                            <div className="textcon" data-aos="fade-down">
                                                <h2></h2>
                                                <h3>{detail.title}</h3>
                                                <p>{detail.description}</p>
                                                <img className="bgleft" src={bgleft} />
                                            </div>
                                        </Col>
                                        <Col lg={8}>
                                            <div className="imgcon ban1">
                                                <img src={detail.url} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </div>
                    );
                }
                else if (detail.imageAlignment == "left") {
                    return (
                        <div>
                            <Container fluid className="p-0">
                                <div className="content">
                                    <Row>
                                        <Col lg={8}>
                                            <div className="imgcon ban2">
                                                <img src={detail.url} />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="textcon textr" data-aos="fade-down">
                                                <h2></h2>
                                                <h3>{detail.title}</h3>
                                                <p>{detail.description}</p>
                                                <img className="bgright" src={bgright} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </div>
                    );
                }


            })}







            {/* <Container fluid className="p-0">
                <div className="content">
                    <Row>
                        <Col lg={4}>
                            <div className="textcon" data-aos="fade-down">
                                <h2></h2>
                                <h3>DEFINE A WORLD OF <br />
                                    SOPHISTICATION</h3>
                                <p>DEFINE your stature in society by owning one of the exclusive 88 units of
                                    Vietnam’s most exclusive luxury condominium development, where
                                    unparalleled style and sophistication come to life.</p>
                                <img className="bgleft" src={bgleft} />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="imgcon ban1">
                                <img src={ban1} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container fluid className="p-0">
                <div className="content">
                    <Row>
                        <Col lg={8}>
                            <div className="imgcon ban2">
                                <img src={ban2} />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="textcon textr" data-aos="fade-down">
                                <h2></h2>
                                <h3>DEFINE A PLACE<br />
                                    TO CALL YOUR OWN </h3>
                                <p>All units at DEFINE are fully & beautifully fitted with provisions that will
                                    define your lifestyle, such as spacious Bedrooms, Designer Gallery Kitchen,
                                    Private Lift access, separate Maid’s Quarters for security and privacy, and
                                    more.</p>
                                <img className="bgright" src={bgright} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container fluid className="p-0">
                <div className="content">
                    <Row>
                        <Col lg={4}>
                            <div className="textcon textl2" data-aos="fade-down">
                                <h2></h2>
                                <h3>DEFINE THE PEAK<br />
                                    OF PROVISIONS</h3>
                                <div>
                                    <img className="icon1" src={icon1} />
                                    <img className="icon2" src={icon2} />
                                </div>
                                <div>
                                    <img className="icon3" src={icon3} />
                                    <img className="icon4" src={icon4} />
                                </div>
                                <img className="bgleft left2" src={bgleft} />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="imgcon ban3">
                                <img src={ban3} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container fluid className="p-0">
                <div className="content">
                    <Row>
                        <Col lg={8}>
                            <div className="imgcon ban4">
                                <img src={ban4} />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="textcon textr2" data-aos="fade-down">
                                <h2></h2>
                                <h3>DEFINE YOUR<br />
                                    INNER SELF</h3>
                                <p>Nestled in a private green oasis, surrounded by beautifully landscaped
                                    gardens and water features, DEFINE is your heaven of peace and tranquility
                                    in Ho Chi Minh City.</p>
                                <a href="/project/define/hidden-treasures">DISCOVER THE EXCLUSIVE FACILITIES<FiArrowRight size="1vw" className="changeto" /></a>
                                <img className="bgright right2" src={bgright} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container fluid className="p-0">
                <div className="content">
                    <Row>
                        <Col lg={8}>
                            <div className="imgcon">
                                <img src={ban5} />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="textcon textr2" data-aos="fade-down">
                                <h2></h2>
                                <h3>DEFINE WHERE<br />
                                    YOU STAY</h3>
                                <p>DEFINE is located in the administrative center of Thu Duc City and boasts
                                    a prestigious location with fabulous views of Saigon River from every unit.</p>
                                <a href="/project/define/point-of-Interests">EXPLORE THE PRESTIGIOUS LOCATION<FiArrowRight size="1vw" className="changeto" /></a>
                                <img className="bgright right3" src={bgright} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container> */}
        </div>
    )
}
