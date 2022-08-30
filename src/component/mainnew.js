import React, { useEffect, useState } from 'react'
import "./mainnew.css";
import delogo from '../img/pointint/logo-menu.png'
import new1 from '../img/newmedia/new1.jpeg'
import Newlist from './newlist'
import Aos from "aos";
import "aos/dist/aos.css";

function Mainnew() {

    const { REACT_APP_SECRET_NAME } = process.env;

    const [images, setImages] = useState([]);
    useEffect(() => {
        // fetch("http://localhost:8202/publicServices/news/list.php").then(
        // fetch("https://define.com.vn/apiv1/publicServices/news/list.php").then(
        fetch(`${REACT_APP_SECRET_NAME}/publicServices/news/list.php`).then(
            response => response.json().then(data => {
                setImages(data);
            })
        )

        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div>
            <img className='delogo' src={delogo} />
            <div className='headborder'>
                <h3 className="headnew" data-aos="fade-right" >NEWS & MEDIA</h3>
                <h3 className="headnew2" data-aos="fade-right" data-aos-delay="250"></h3>
            </div>
            <Newlist data={images}/>
            {/* <div className='newmedia'>
                <div className='new'>
                    <div className='boxnew'>
                        <img src={new1} />
                        <div className='newtext'>
                            <div className='newdatebox'>
                                <div className='newdate'>
                                    <h4>19</h4>
                                    <p>JULY</p>
                                    <p>2022</p>
                                </div>
                            </div>
                            <div className='newname'>
                                <h5>Construction on process update - July 2022</h5>
                                <p>Constructing for level 5 & 6.</p>
                            </div>
                        </div>
                    </div>
                    <div className='boxnew'>
                    <img src={new1} />
                        <div className='newtext'>
                            <div className='newdatebox'>
                                <div className='newdate'>
                                    <h4>19</h4>
                                    <p>JULY</p>
                                    <p>2022</p>
                                </div>
                            </div>
                            <div className='newname'>
                                <h5>Construction on process update - July 2022</h5>
                                <p>Constructing for level 5 & 6.</p>
                            </div>
                        </div>
                    </div>
                    <div className='boxnew'>
                    <img src={new1} />
                        <div className='newtext'>
                            <div className='newdatebox'>
                                <div className='newdate'>
                                    <h4>19</h4>
                                    <p>JULY</p>
                                    <p>2022</p>
                                </div>
                            </div>
                            <div className='newname'>
                                <h5>Construction on process update - July 2022</h5>
                                <p>Constructing for level 5 & 6.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='new'>
                    <div className='boxnew'>
                    <img src={new1} />
                        <div className='newtext'>
                            <div className='newdatebox'>
                                <div className='newdate'>
                                    <h4>19</h4>
                                    <p>JULY</p>
                                    <p>2022</p>
                                </div>
                            </div>
                            <div className='newname'>
                                <h5>Construction on process update - July 2022</h5>
                                <p>Constructing for level 5 & 6.</p>
                            </div>
                        </div>
                    </div>
                    <div className='boxnew'>
                    <img src={new1} />
                        <div className='newtext'>
                            <div className='newdatebox'>
                                <div className='newdate'>
                                    <h4>19</h4>
                                    <p>JULY</p>
                                    <p>2022</p>
                                </div>
                            </div>
                            <div className='newname'>
                                <h5>Construction on process update - July 2022</h5>
                                <p>Constructing for level 5 & 6.</p>
                            </div>
                        </div>
                    </div>
                    <div className='boxnew'>
                    <img src={new1} />
                        <div className='newtext'>
                            <div className='newdatebox'>
                                <div className='newdate'>
                                    <h4>19</h4>
                                    <p>JULY</p>
                                    <p>2022</p>
                                </div>
                            </div>
                            <div className='newname'>
                                <h5>Construction on process update - July 2022</h5>
                                <p>Constructing for level 5 & 6.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Mainnew