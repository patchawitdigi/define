import React from 'react'
import "./mainnew.css";
import delogo from '../img/pointint/logo-menu.png'

function mainnew() {
    return (
        <div>
            <img className='delogo' src={delogo} />
            <div className='headborder'>
            <h3 className="headnew">NEWS & MEDIA</h3>
            <h3 className="headnew2"></h3>
            </div>
            <div className='newmedia'>
                <div className='new'>
                    <div className='boxnew'></div>
                    <div className='boxnew'></div>
                    <div className='boxnew'></div>
                </div>
                <div className='new'>
                    <div className='boxnew'></div>
                    <div className='boxnew'></div>
                    <div className='boxnew'></div>
                </div>
            </div>
        </div>
    )
}

export default mainnew