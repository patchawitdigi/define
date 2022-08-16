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

export default function Gallaryart() {
    return (
        <div>
            <img className='delogo' src={delogo} />
            <h3 className="headgal">GALLERIE D’ARTE</h3>
            <div className="gallary">
                <div className="lgallary">
                    <img className="facade1" src={Facade1} />
                    <img className="facade2" src={Facade2} />
                </div>
                <div className="rgallary">
                    <p>FACADE</p>
                    <img className="facade3" src={Facade3} />
                </div>
            </div>
            <div className="gallary">
                <div className="rgallary2">
                    <p>OUTDOOR<br />FACILITIES</p>
                    <img className="outdoor3" src={Outdoor3} />
                </div>
                <div className="lgallary2">
                    <img className="facade1" src={Outdoor1} />
                    <img className="outdoor2" src={Outdoor2} />
                </div>
            </div>
            <div className="gallary">
                <div className="lgallary">
                    <img className="facade1" src={Indoor1} />
                    <img className="facade2" src={Indoor2} />
                </div>
                <div className="rgallary">
                    <p>INDOOR<br />FACILITIES</p>
                    <img className="facade3" src={Indoor3} />
                </div>
            </div>
            <div className="gallary">
                <div className="rgallary2">
                    <p>RIVIERE</p>
                    <img className="Riviere3" src={Riviere3} />
                </div>
                <div className="lgallary2">
                    <img className="facade1" src={Riviere2} />
                    <img className="outdoor2" src={Riviere1} />
                </div>
            </div>
            <div className="gallary">
                <div className="lgallary">
                    <img className="facade1" src={Jardin1} />
                    <img className="facade2" src={Jardin2} />
                </div>
                <div className="rgallary">
                    <p>JARDIN</p>
                    <img className="jardin3" src={Jardin3} />
                </div>
            </div>
        </div>
    )
}
