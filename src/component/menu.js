import "./menu.css";
import logodef from "../img/overview/logodef.png"

import pattleft from '../img/overview/pattern-left.png'
import pattright from '../img/overview/pattern-right.png'
import { useEffect } from "react";

export default function Menu() {

    function toggleMenubar() {
        var menuBox = document.getElementById('menu-box');
        if (menuBox.style.display == "block") { // if is menuBox displayed, hide it
            menuBox.style.display = "none";
            document.getElementsByClassName("wrap-close")[0].style.display = 'none'
            document.getElementsByClassName("menuclick")[0].style.display = 'flex'
        }
        else { // if is menuBox hidden, display it
            menuBox.style.display = "block";
            document.getElementsByClassName("wrap-close")[0].style.display = 'block'
            document.getElementsByClassName("menuclick")[0].style.display = 'none'
        }
        
    }

    return (
        <div>
            <div className="wrap-close" onClick={toggleMenubar}>
                <div className="x-1"></div>
                <div className="x-2"></div>
            </div>
            <div className="menuclick" onClick={toggleMenubar}>
                <div className="col_1">
                    <div className="row-1-1" style={{ backgroundColor: '#ea7048' }}></div>
                    <div className="row-2-1" style={{ backgroundColor: '#cc583a' }}></div>
                    <div className="row-3-1" style={{ backgroundColor: '#cb5739' }}></div>
                    <div className="row-4-1" style={{ backgroundColor: '#b94a32' }}></div>
                    <div className="row-5-1" style={{ backgroundColor: '#a03927' }}></div>
                    <div className="row-6-1" style={{ backgroundColor: '#963223' }}></div>
                </div>
                <div className="col_2">
                    <div className="row-1-2" style={{ backgroundColor: '#e26a45' }}></div>
                    <div className="row-2-2" style={{ backgroundColor: '#d25c3d' }}></div>
                    <div className="row-3-2" style={{ backgroundColor: '#c25035' }}></div>
                    <div className="row-4-2" style={{ backgroundColor: '#9f3827' }}></div>
                    <div className="row-5-2" style={{ backgroundColor: '#a03927' }}></div>
                    <div className="row-6-2" style={{ backgroundColor: '#8d2d20' }}></div>
                </div>
                <div className="col_3">
                    <div className="row-1-3" style={{ backgroundColor: '#dc6442' }}></div>
                    <div className="row-2-3" style={{ backgroundColor: '#cb5739' }}></div>
                    <div className="row-3-3" style={{ backgroundColor: '#bb4c33' }}></div>
                    <div className="row-4-3" style={{ backgroundColor: '#a93f2b' }}></div>
                    <div className="row-5-3" style={{ backgroundColor: '#993424' }}></div>
                    <div className="row-6-3" style={{ backgroundColor: '#86281d' }}></div>
                </div>
            </div>
            <div className="menubg" id="menu-box" style={{ display: "none" }}>
                <img className="pattl" src={pattleft} />
                <img className="pattr" src={pattright} />
                <div className="logodef">
                    <img src={logodef} />
                </div>
                <div className="menuitem">
                    <a href='/project/define/'>OVERVIEW</a>
                    <a href='/project/define/point-of-Interests'>POINT OF INTERESTS</a>
                    <a href='/project/define/hidden-treasures'>HIDDEN TREASURES</a>
                    <a href='/project/define/luxury-of-choices'>LUXURY OF CHOICES</a>
                    <a href='/project/define/gallerie-d-arte'>GALLERIE D’ARTE</a>
                    <a href='/project/define/news-and-media'>NEWS & MEDIA</a>
                </div>
            </div>
        </div>
    )
}