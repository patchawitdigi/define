import "./menu.css";
import logodef from "../img/overview/logodef.png"

import pattleft from '../img/overview/pattern-left.png'
import pattright from '../img/overview/pattern-right.png'
import { useEffect } from "react";

export default function Menu() {

    function toggleMenubar() {
        var menuBox = document.getElementById('menu-box');    
        if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
          menuBox.style.display = "none";
        }
        else { // if is menuBox hidden, display it
          menuBox.style.display = "block";
        }
      }

    return (
        <div>
            <div className="menuclick">
                <p onClick={toggleMenubar}>menuclick</p>
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