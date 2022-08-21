import React, { useEffect, useState } from 'react'
import "./mainnew.css";
import delogo from '../img/pointint/logo-menu.png'
import new1 from '../img/newmedia/new1.jpeg'
import New from './new'


function Mainnew() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
            response => response.json().then(data => {
                setImages(data);
            })
        )

    }, [])

    return (
        <div>
            <img className='delogo' src={delogo} />
            <div className='headborder'>
                <h3 className="headnew">NEWS & MEDIA</h3>
                <h3 className="headnew2"></h3>
            </div>
                <New data={images} />
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