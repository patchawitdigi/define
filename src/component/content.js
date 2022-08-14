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

export default function Content() {
    return (
        <div>
            <div className="content">
                <div className="textcon">
                    <h2><br /></h2>
                    <h3>DEFINE A WORLD OF <br />
                        SOPHISTICATION</h3>
                    <p>DEFINE your stature in society by owning one of the exclusive 88 units of
                        Vietnam’s most exclusive luxury condominium development, where
                        unparalleled style and sophistication come to life.</p>
                    <img className="bgleft" src={bgleft} />
                </div>
                <div className="imgcon">
                    <img src={ban1} />
                </div>
            </div>
            <div className="content">
                <div className="imgcon">
                    <img src={ban2} />
                </div>
                <div className="textcon textr">
                    <h2><br /></h2>
                    <h3>DEFINE A PLACE<br />
                        TO CALL YOUR OWN </h3>
                    <p>All units at DEFINE are fully & beautifully fitted with provisions that will
                        define your lifestyle, such as spacious Bedrooms, Designer Gallery Kitchen,
                        Private Lift access, separate Maid’s Quarters for security and privacy, and
                        more.</p>
                    <img className="bgright" src={bgright} />
                </div>
            </div>
            <div className="content">
                <div className="textcon textl2">
                    <h2><br /></h2>
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
                <div className="imgcon">
                    <img src={ban3} />
                </div>
            </div>
            <div className="content">
                <div className="imgcon">
                    <img src={ban4} />
                </div>
                <div className="textcon textr2">
                    <h2><br /></h2>
                    <h3>DEFINE YOUR<br />
                        INNER SELF</h3>
                    <p>Nestled in a private green oasis, surrounded by beautifully landscaped
                        gardens and water features, DEFINE is your heaven of peace and tranquility
                        in Ho Chi Minh City.</p>
                    <a href="">DISCOVER THE EXCLUSIVE FACILITIES</a>
                    <img className="bgright right2" src={bgright} />
                </div>
            </div>
            <div className="content">
                <div className="imgcon">
                    <img src={ban5} />
                </div>
                <div className="textcon textr2">
                    <h2><br /></h2>
                    <h3>DEFINE WHERE<br />
                        YOU STAY</h3>
                    <p>DEFINE is located in the administrative center of Thu Duc City and boasts 
                        a prestigious location with fabulous views of Saigon River from every unit.</p>
                    <a href="">EXPLORE THE PRESTIGIOUS LOCATION</a>
                    <img className="bgright right3" src={bgright} />
                </div>
            </div>
        </div>
    )
}
