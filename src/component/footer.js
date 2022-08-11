import "./footer.css";
import logo from "../img/overview/logo-capita.png"
import logo2 from "../img/overview/logo-thein.png"

export default function Footer() {
    return (
        <div className="bgfoot">
            <div className="bgfoot1">
                <div className="craft">
                    <p>CRAFTED BY</p>
                    <div className="teamicon">
                        <div>
                            <p>LEAD DEVELOPER</p>
                            <img className="logo1" src={logo}/>
                        </div>
                        <div>
                            <p>IN COLLABORATION WITH</p>
                            <img className="logo2" src={logo2}/>
                        </div>
                    </div>
                    <a>REGISTER NOW</a>
                </div>

            </div>
        </div>
    )
}
