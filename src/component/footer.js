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
                        <a href="https://www.capitaland.com/vn/en/contact-us.html" target="_blank"><button>REGISTER NOW</button></a>
                    </div>
                    <div className="numregis">
                    <a href="1800599986">1800 599 986</a>
                    </div>
                </div>
            </div>
            <div className="moreinfo">
                <div className="moreetc">
                    <div className="infoetc shop">
                        <h4>SHOP</h4>
                        <a href="https://www.capitaland.com/en/shop/malls.html?category=retail" target="_blank">Malls</a>
                        <a href="https://www.capitaland.com/en.html" target="_blank">Deals</a>
                        <a href="https://www.capitaland.com/en/shop/rewards.html"target="_blank">Rewards</a>
                    </div>
                    <div className="infoetc">
                        <h4>STAY</h4>
                        <a href="https://www.capitaland.com/en/stay/residential-developments.html?category=residential" target="_blank">Residential Developments</a>
                        <a href="https://www.capitaland.com/en/stay/lodging.html?category=lodging" target="_blank">Lodging</a>
                    </div>
                    <div className="infoetc">
                        <h4>LEASE</h4>
                        <a href="https://www.capitaland.com/en/lease/businessparks-industrial-logistics.html?category=businesspark-industrial-logistics" target="_blank">Business Parks, Industrial & Logistics Spaces</a>
                        <a href="https://www.capitaland.com/en/lease/offices.html?category=commercial" target="_blank">Offices</a>
                        <a href="https://www.capitaland.com/en/lease/malls.html?category=retail" target="_blank">Malls</a>
                    </div>
                    <div className="infoetc">
                        <h4>INVEST</h4>
                        <a href="https://www.capitaland.com/en.html" target="_blank">CapitaLand Limited</a>
                        <a href="https://www.capitaland.com/en.html" target="_blank">CapitaLand Mall Trust</a>
                        <a href="https://www.ascendas-reit.com/en.html" target="_blank">Ascendas Reit</a>
                        <a href="https://www.capitaland.com/en.html" target="_blank">CapitaLand Commercial Trust</a>
                        <a href="https://www.capitaland.com/en.html" target="_blank">Ascott Residence Trust</a>
                        <a href="https://www.capitaland.com/en.html" target="_blank">CapitaLand Retail China Trust</a>
                        <a href="https://www.a-itrust.com/en.html" target="_blank">Ascendas India Trust</a>
                        <a href="https://www.capitaland.com/en.html" target="_blank">CapitaLand Malaysia Mall Trust</a>
                        <a href="https://www.capitaland.com/en.html" target="_blank">Ascendas Hospitality Trust</a>
                    </div>
                    <div className="infoetc">
                        <h4>MORE FROM CAPITALAND</h4>
                        <a href="https://www.capitaland.com/en/about-capitaland/who-we-are.html" target="_blank">Who We Are</a>
                        <a href="https://www.capitaland.com/en/about-capitaland/sustainability/capitaland-hope-foundation/overview.html" target="_blank">CapitaLand Hope Foundation</a>
                        <a href="https://www.capitaland.com/en/about-capitaland/sustainability.html" target="_blank">Sustainability</a>
                        <a href="https://www.capitaland.com/en/about-capitaland/careers.html" target="_blank">Careers</a>
                        <a href="https://www.capitaland.com/en/art-at-capitaland.html" target="_blank">Art @ CapitaLand</a>
                        <a href="https://www.capitaland.com/en/about-capitaland/newsroom.html" target="_blank">Newsroom</a>
                        <a href="https://www.capitaland.com/en/inside-magazine.html" target="_blank">Blog</a>
                        <a href="https://www.capitaland.com/en/about-capitaland/awards.html" target="_blank">Awards</a>
                        <a href="https://www.capitaland.com/en/more-from-capitaland/social-media.html" target="_blank">Follow @CapitaLand on social!</a>
                        <a href="https://www.capitaland.com/api-portal/index.html" target="_blank">API Portal</a>
                    </div>
                </div>
                <div className="follow">
                    <div>
                        <a href="https://www.capitaland.com/en/find-a-property/global-presence-map.html" target="_blank" className="folleft">Find a Property</a>
                        <a href="https://www.capitaland.com/en/contact-us.html" target="_blank" className="folleft">Contact Us</a>
                        <a href="" target="_blank" className="folleft">Privacy Policy</a>
                        <a href="https://www.capitaland.com/en/legal-notices/terms-and-conditions.html" target="_blank">Terms & Conditions</a>

                    </div>
                    <div className="social">
                        <p>Follow @CapitaLand</p>
                        <a href="https://www.instagram.com/accounts/login/?next=/capitaland/" target="_blank"><img src={ig} /></a>
                        <a href="https://www.facebook.com/capitaland" target="_blank"><img src={fb} /></a>
                        <a href="https://twitter.com/CapitaLand" target="_blank"><img src={tw} /></a>
                        <a href="https://www.linkedin.com/company/capitaland-limited" target="_blank"><img src={lk} /></a>
                        <a href="https://www.youtube.com/user/CapitaLandGroup" target="_blank"><img src={yt} /></a>
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
