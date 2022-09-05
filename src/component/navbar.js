import "./navbar.css";
import logo from "../img/overview/logo-capita.png"
import { useTranslation } from 'react-i18next';

export default function Navbar() {

    const { t, i18n } = useTranslation();

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
                    <a href="https://www.capitaland.com/vn/en/contact-us.html" target="_blank">{t('REGISTER NOW')}</a>
                </div>
            </div>
        </div>
    )
}