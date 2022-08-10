import "./navbar.css";
import logo from "../img/overview/logo-capita.png"

export default function Navbar(){
    return (
    <div className="header">
        <div className="logocapita" >
        <img src={logo}/>
        </div>
        <div className="headmenu">
            <p>VN</p>
            <p>/</p>
            <p>EN</p>
            <button>REGISTER NOW</button>
        </div>


    </div>
)}