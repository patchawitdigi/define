import "./navbar.css";
import logo from "../img/overview/logo-capita.jpeg"
import { useTranslation } from 'react-i18next';

export default function Navbar() {

    const { t, i18n } = useTranslation();

    function chgvn() {
        document.getElementById("lanvn").style.color = "#bf5c40"
        document.getElementById("lanen").style.color = "black"
    }
      
    function chgen() {
        document.getElementById("lanvn").style.color = "black"
        document.getElementById("lanen").style.color = "#bf5c40"
    }


    return (
        <div className="header">
            <div className="logocapita" >
                <img src={logo} />
            </div>
            <div className="headmenu">
                <div className="language">
                    <a onClick={chgvn} className="stylelan"><p onClick={() => {i18n.changeLanguage('vn')}} id="lanvn">VN</p></a>
                    <p>/</p>
                    <a onClick={chgen} className="stylelan"><p className="en" onClick={() => {i18n.changeLanguage('en')}} id="lanen">EN</p></a>
                </div>
                <div className="btnregis">
                    <a href="https://www.capitaland.com/vn/en/contact-us.html" target="_blank"><button>{t('REGISTER NOW')}</button></a>
                </div>
            </div>
        </div>
    )
}