import "./navbar.css";
import logo from "../img/overview/logo-capita.png"

export default function Navbar() {
    return (
        <div className="header">
            <div className="logocapita" >
                <img src={logo} />
            </div>
            <div className="headmenu">
                <div className="language">
                    <p>VN</p>
                    <p>/</p>
                    <p className="en">EN</p>
                </div>
                <div className="btnregis">
                    <a href="https://www.capitaland.com/vn/en/contact-us.html" target="_blank">REGISTER NOW</a>
                </div>
            </div>
        </div>
    )
}