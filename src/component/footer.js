import "./footer.css";
import logo from "../img/overview/logo-capita.png"
import logo2 from "../img/overview/logo-thein.png"
import ig from "../img/overview/ic-ig.png"
import fb from "../img/overview/ic-facebook.png"
import tw from "../img/overview/ic-twitter.png"
import lk from "../img/overview/ic-linkin.png"
import yt from "../img/overview/ic-youtube.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from "react";

export default function Footer() {


    window.addEventListener("resize", function (event) {
        var etcblock = document.querySelectorAll("#etcblock")
        if (document.body.clientWidth < 576) {
            document.getElementById("etc01").onclick = showEtc01
            document.getElementById("etc02").onclick = showEtc02
            document.getElementById("etc03").onclick = showEtc03
            document.getElementById("etc04").onclick = showEtc04
            document.getElementById("etc05").onclick = showEtc05
            for (var i = 0; i < etcblock.length; i++) {
                etcblock[i].style.display = "none"
            }
        } else {
            document.getElementById("etc01").onclick = function () { } 
            document.getElementById("etc02").onclick = function () { } 
            document.getElementById("etc03").onclick = function () { } 
            document.getElementById("etc04").onclick = function () { } 
            document.getElementById("etc05").onclick = function () { } 
            for (var i = 0; i < etcblock.length; i++) {
                etcblock[i].style.display = "block"
            }
        }
        console.log(document.body.clientWidth)
    })

    useEffect(() => {
        if (document.body.clientWidth < 576) {
            document.getElementById("etc01").onclick = showEtc01
            document.getElementById("etc02").onclick = showEtc02
            document.getElementById("etc03").onclick = showEtc03
            document.getElementById("etc04").onclick = showEtc04
            document.getElementById("etc05").onclick = showEtc05
            
        } else {
            document.getElementById("etc01").onclick = function () { } 
            document.getElementById("etc02").onclick = function () { } 
            document.getElementById("etc03").onclick = function () { } 
            document.getElementById("etc04").onclick = function () { } 
            document.getElementById("etc05").onclick = function () { } 
        }
    }, [])

    function showEtc01() {
        var etcblock = document.querySelectorAll("#etcblock")
        if (etcblock[0].style.display == "block") { // if is menuBox displayed, hide it
            etcblock[0].style.display = "none";
            document.getElementById("roll01").style.transform = "rotate(180deg)"
        }
        else { // if is menuBox hidden, display it
            for (var i = 0; i < etcblock.length; i++) {
                etcblock[i].style.display = "none"
            }
            etcblock[0].style.display = "block"
            document.getElementById("roll01").style.transform = "rotate(0deg)"
            document.getElementById("roll02").style.transform = "rotate(180deg)"
            document.getElementById("roll03").style.transform = "rotate(180deg)"
            document.getElementById("roll04").style.transform = "rotate(180deg)"
            document.getElementById("roll05").style.transform = "rotate(180deg)"

        }
    }
    function showEtc02() {
        var etcblock = document.querySelectorAll("#etcblock")
        if (etcblock[1].style.display == "block") { // if is menuBox displayed, hide it
            etcblock[1].style.display = "none";
            document.getElementById("roll02").style.transform = "rotate(180deg)"

        }
        else { // if is menuBox hidden, display it
            for (var i = 0; i < etcblock.length; i++) {
                etcblock[i].style.display = "none"
            }
            etcblock[1].style.display = "block"
            document.getElementById("roll01").style.transform = "rotate(180deg)"
            document.getElementById("roll02").style.transform = "rotate(0deg)"
            document.getElementById("roll03").style.transform = "rotate(180deg)"
            document.getElementById("roll04").style.transform = "rotate(180deg)"
            document.getElementById("roll05").style.transform = "rotate(180deg)"
        }

    }
    function showEtc03() {
        var etcblock = document.querySelectorAll("#etcblock")
        if (etcblock[2].style.display == "block") { // if is menuBox displayed, hide it
            etcblock[2].style.display = "none";
            document.getElementById("roll03").style.transform = "rotate(180deg)"
        }
        else { // if is menuBox hidden, display it
            for (var i = 0; i < etcblock.length; i++) {
                etcblock[i].style.display = "none"
            }
            etcblock[2].style.display = "block"
            document.getElementById("roll01").style.transform = "rotate(180deg)"
            document.getElementById("roll02").style.transform = "rotate(180deg)"
            document.getElementById("roll03").style.transform = "rotate(0deg)"
            document.getElementById("roll04").style.transform = "rotate(180deg)"
            document.getElementById("roll05").style.transform = "rotate(180deg)"
        }

    }
    function showEtc04() {
        var etcblock = document.querySelectorAll("#etcblock")
        if (etcblock[3].style.display == "block") { // if is menuBox displayed, hide it
            etcblock[3].style.display = "none";
            document.getElementById("roll04").style.transform = "rotate(180deg)"
        }
        else { // if is menuBox hidden, display it
            for (var i = 0; i < etcblock.length; i++) {
                etcblock[i].style.display = "none"
            }
            etcblock[3].style.display = "block"
            document.getElementById("roll01").style.transform = "rotate(180deg)"
            document.getElementById("roll02").style.transform = "rotate(180deg)"
            document.getElementById("roll03").style.transform = "rotate(180deg)"
            document.getElementById("roll04").style.transform = "rotate(0deg)"
            document.getElementById("roll05").style.transform = "rotate(180deg)"
        }

    }
    function showEtc05() {
        var etcblock = document.querySelectorAll("#etcblock")
        if (etcblock[4].style.display == "block") { // if is menuBox displayed, hide it
            etcblock[4].style.display = "none";
            document.getElementById("roll05").style.transform = "rotate(180deg)"
        }
        else { // if is menuBox hidden, display it
            for (var i = 0; i < etcblock.length; i++) {
                etcblock[i].style.display = "none"
            }
            etcblock[4].style.display = "block"
            document.getElementById("roll01").style.transform = "rotate(180deg)"
            document.getElementById("roll02").style.transform = "rotate(180deg)"
            document.getElementById("roll03").style.transform = "rotate(180deg)"
            document.getElementById("roll04").style.transform = "rotate(180deg)"
            document.getElementById("roll05").style.transform = "rotate(0deg)"
        }

    }






    return (
        <div>
            <div className="bgfoot1">
                <div className="craft">
                    <p>CRAFTED BY</p>
                    <div className="teamicon">
                        <div className="collapicon">
                            <p>LEAD DEVELOPER</p>
                            <img className="logo1" src={logo} />
                        </div>
                        <div className="collapicon">
                            <p>IN COLLABORATION WITH</p>
                            <img className="logo2" src={logo2} />
                        </div>
                    </div>
                    <div className="butregis">
                        <a href="https://www.capitaland.com/vn/en/contact-us.html" target="_blank"><button>REGISTER NOW</button></a>
                    </div>
                    <div className="numregis">
                        <a href="1800599986">1800 599 986</a>
                    </div>
                </div>
            </div>

            <div className="moreinfo">

                <Container fluid className="p-0">
                    <ul className="moreetc">
                        <Row>
                            <Col sm={2}>
                                <li className="infoetc">
                                    <label id="etc01"><h4>SHOP</h4><p id="roll01">^</p></label>
                                    <ul id="etcblock">
                                        <li><a href="https://www.capitaland.com/en/shop/malls.html?category=retail" target="_blank">Malls</a></li>
                                        <li><a href="https://www.capitaland.com/en.html" target="_blank">Deals</a></li>
                                        <li><a href="https://www.capitaland.com/en/shop/rewards.html" target="_blank">Rewards</a></li>
                                    </ul>
                                </li>
                            </Col>
                            <Col sm={2}>
                                <li className="infoetc" >
                                    <label id="etc02"><h4>STAY</h4><p id="roll02">^</p></label>
                                    <ul id="etcblock">
                                        <li><a href="https://www.capitaland.com/en/stay/residential-developments.html?category=residential" target="_blank">Residential Developments</a></li>
                                        <li><a href="https://www.capitaland.com/en/stay/lodging.html?category=lodging" target="_blank">Lodging</a></li>
                                    </ul>
                                </li>
                            </Col>
                            <Col sm={3}>
                                <li className="infoetc">
                                    <label id="etc03"><h4>LEASE</h4><p id="roll03">^</p></label>
                                    <ul id="etcblock">
                                        <li><a href="https://www.capitaland.com/en/lease/businessparks-industrial-logistics.html?category=businesspark-industrial-logistics" target="_blank">Business Parks, Industrial & Logistics Spaces</a></li>
                                        <li><a href="https://www.capitaland.com/en/lease/offices.html?category=commercial" target="_blank">Offices</a></li>
                                        <li><a href="https://www.capitaland.com/en/lease/malls.html?category=retail" target="_blank">Malls</a></li>
                                    </ul>
                                </li>
                            </Col>
                            <Col sm={2}>
                                <li className="infoetc">
                                    <label id="etc04"><h4>INVEST</h4><p id="roll04">^</p></label>
                                    <ul id="etcblock">
                                        <li><a href="https://www.capitaland.com/en.html" target="_blank">CapitaLand Limited</a></li>
                                        <li><a href="https://www.capitaland.com/en.html" target="_blank">CapitaLand Mall Trust</a></li>
                                        <li><a href="https://www.ascendas-reit.com/en.html" target="_blank">Ascendas Reit</a></li>
                                        <li><a href="https://www.capitaland.com/en.html" target="_blank">CapitaLand Commercial Trust</a></li>
                                        <li><a href="https://www.capitaland.com/en.html" target="_blank">Ascott Residence Trust</a></li>
                                        <li><a href="https://www.capitaland.com/en.html" target="_blank">CapitaLand Retail China Trust</a></li>
                                        <li><a href="https://www.a-itrust.com/en.html" target="_blank">Ascendas India Trust</a></li>
                                        <li><a href="https://www.capitaland.com/en.html" target="_blank">CapitaLand Malaysia Mall Trust</a></li>
                                        <li><a href="https://www.capitaland.com/en.html" target="_blank">Ascendas Hospitality Trust</a></li>
                                    </ul>
                                </li>
                            </Col>
                            <Col sm={3}>
                                <li className="infoetc mfcapi">
                                    <label id="etc05"><h4>MORE FROM CAPITALAND</h4><p id="roll05">^</p></label>
                                    <ul id="etcblock">
                                        <li><a href="https://www.capitaland.com/en/about-capitaland/who-we-are.html" target="_blank">Who We Are</a></li>
                                        <li><a href="https://www.capitaland.com/en/about-capitaland/sustainability/capitaland-hope-foundation/overview.html" target="_blank">CapitaLand Hope Foundation</a></li>
                                        <li><a href="https://www.capitaland.com/en/about-capitaland/sustainability.html" target="_blank">Sustainability</a></li>
                                        <li><a href="https://www.capitaland.com/en/about-capitaland/careers.html" target="_blank">Careers</a></li>
                                        <li><a href="https://www.capitaland.com/en/art-at-capitaland.html" target="_blank">Art @ CapitaLand</a></li>
                                        <li><a href="https://www.capitaland.com/en/about-capitaland/newsroom.html" target="_blank">Newsroom</a></li>
                                        <li><a href="https://www.capitaland.com/en/inside-magazine.html" target="_blank">Blog</a></li>
                                        <li><a href="https://www.capitaland.com/en/about-capitaland/awards.html" target="_blank">Awards</a></li>
                                        <li><a href="https://www.capitaland.com/en/more-from-capitaland/social-media.html" target="_blank">Follow @CapitaLand on social!</a></li>
                                        <li><a href="https://www.capitaland.com/api-portal/index.html" target="_blank">API Portal</a></li>
                                    </ul>
                                </li>
                            </Col>
                        </Row>
                    </ul>
                </Container>

                <div className="follow">
                    <div>
                        <a href="https://www.capitaland.com/en/find-a-property/global-presence-map.html" target="_blank" className="folleft">Find a Property</a>
                        <a href="https://www.capitaland.com/en/contact-us.html" target="_blank" className="folleft">Contact Us</a>
                        <a href="" target="_blank" className="folleft">Privacy Policy</a>
                        <a href="https://www.capitaland.com/en/legal-notices/terms-and-conditions.html" target="_blank">Terms & Conditions</a>

                    </div>
                    <div className="social">
                        <p>Follow @CapitaLand</p>
                        <div>
                            <a href="https://www.instagram.com/accounts/login/?next=/capitaland/" target="_blank"><img src={ig} /></a>
                            <a href="https://www.facebook.com/capitaland" target="_blank"><img src={fb} /></a>
                            <a href="https://twitter.com/CapitaLand" target="_blank"><img src={tw} /></a>
                            <a href="https://www.linkedin.com/company/capitaland-limited" target="_blank"><img src={lk} /></a>
                            <a href="https://www.youtube.com/user/CapitaLandGroup" target="_blank"><img src={yt} /></a>
                        </div>
                    </div>

                </div>

            </div>

            <div className="descrip">
                <p>We have used reasonable care in preparing this website and in constructing the model(s) and showflats. Please note, however, that neither our agents nor we will be held responsible for any inaccuracy in the contents of this website.
                    Whilst we believe the contents of this website to be correct and accurate and correct at the time of publication, they are not to be regarded as statements or representations of fact. All information, specifications and plans herein
                    contained may be subjected to change from time to time by us and/or the competent authorities as may be required and do not form part of an offer or contract. Renderings, depictions and illustrations are artistic impressions.
                    Photographs do not necessarily represent as-built standard specifications. Floor areas are approximate measurements and are subject to final survey. Likewise the model(s) and showflats are artistic impressions only and should not be
                    considered as representation of fact.</p>
            </div>
            <Container fluid className="p-0">
                <div className="contact">
                    <Row>
                        <Col sm={6}>
                            <div className="copyright">
                                <img src={logo} />
                                <p>Copyright © 2021 CapitaLand Limited. All Rights Reserved.</p>
                                <a href=''>Personal Information Protection Policy</a>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="address">
                                <p>Website Owner: CapitaLand-Thien Duc Company Limited
                                    <br />Enterprise Registration Certificate No. 0309710742 issued by the Department of Planning and
                                    <br />Investment Ho Chi Minh City, 1st issued on 30 December 2009
                                    <br />Address: No 02, Phan Van Dang Street, Thanh My Loi Ward, Thu Duc City, Ho Chi Minh City
                                    <br />Phone: (+84) 28 3519 1067</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>

    )
}
