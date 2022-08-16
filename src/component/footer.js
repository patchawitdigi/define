import "./footer.css";
import logo from "../img/overview/logo-capita.png"
import logo2 from "../img/overview/logo-thein.png"
import ig from "../img/overview/ic-ig.png"
import fb from "../img/overview/ic-facebook.png"
import tw from "../img/overview/ic-twitter.png"
import lk from "../img/overview/ic-linkin.png"
import yt from "../img/overview/ic-youtube.png"

export default function Footer() {
    return (
        <div>
            <div className="bgfoot1">
                <div className="craft">
                    <p>CRAFTED BY</p>
                    <div className="teamicon">
                        <div>
                            <p>LEAD DEVELOPER</p>
                            <img className="logo1" src={logo} />
                        </div>
                        <div>
                            <p>IN COLLABORATION WITH</p>
                            <img className="logo2" src={logo2} />
                        </div>
                    </div>
                    <div className="butregis">
                        <button href="">REGISTER NOW</button>
                    </div>
                    <div className="butregis">
                    <a href="1800599986">1800 599 986</a>
                    </div>
                </div>
            </div>
            <div className="moreinfo">
                <div className="moreetc">
                    <div className="infoetc shop">
                        <h4>SHOP</h4>
                        <a href="">Malls</a>
                        <a href="">Deals</a>
                        <a href="">Rewards</a>
                    </div>
                    <div className="infoetc">
                        <h4>STAY</h4>
                        <a href="">Residential Developments</a>
                        <a href="">Lodging</a>
                    </div>
                    <div className="infoetc">
                        <h4>LEASE</h4>
                        <a href="">Business Parks, Industrial & Logistics Spaces</a>
                        <a href="">Offices</a>
                        <a href="">Malls</a>
                    </div>
                    <div className="infoetc">
                        <h4>INVEST</h4>
                        <a href="">CapitaLand Limited</a>
                        <a href="">CapitaLand Mall Trust</a>
                        <a href="">Ascendas Reit</a>
                        <a href="">CapitaLand Commercial Trust</a>
                        <a href="">Ascott Residence Trust</a>
                        <a href="">CapitaLand Retail China Trust</a>
                        <a href="">Ascendas India Trust</a>
                        <a href="">CapitaLand Malaysia Mall Trust</a>
                        <a href="">Ascendas Hospitality Trust</a>
                    </div>
                    <div className="infoetc">
                        <h4>MORE FROM CAPITALAND</h4>
                        <a href="">Who We Are</a>
                        <a href="">CapitaLand Hope Foundation</a>
                        <a href="">Sustainability</a>
                        <a href="">Careers</a>
                        <a href="">Art @ CapitaLand</a>
                        <a href="">Newsroom</a>
                        <a href="">Blog</a>
                        <a href="">Awards</a>
                        <a href="">Follow @CapitaLand on social!</a>
                        <a href="">API Portal</a>
                    </div>
                </div>
                <div className="follow">
                    <div>
                        <a href="" className="folleft">Find a Property</a>
                        <a href="" className="folleft">Contact Us</a>
                        <a href="" className="folleft">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>

                    </div>
                    <div className="social">
                        <p>Follow @CapitaLand</p>
                        <img src={ig} />
                        <img src={fb} />
                        <img src={tw} />
                        <img src={lk} />
                        <img src={yt} />
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
            <div className="contact">
                <div className="copyright">
                    <img src={logo}/>
                    <p>Copyright © 2021 CapitaLand Limited. All Rights Reserved.</p>
                    <a href=''>Personal Information Protection Policy</a>
                </div>
                <div className="address">
                    <p>Website Owner: CapitaLand-Thien Duc Company Limited
                    <br/>Enterprise Registration Certificate No. 0309710742 issued by the Department of Planning and
                    <br/>Investment Ho Chi Minh City, 1st issued on 30 December 2009
                    <br/>Address: No 02, Phan Van Dang Street, Thanh My Loi Ward, Thu Duc City, Ho Chi Minh City
                    <br/>Phone: (+84) 28 3519 1067</p>
                </div>
            </div>

        </div>

    )
}
